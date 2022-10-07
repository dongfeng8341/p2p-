﻿using client.messengers.clients;
using client.messengers.punchHole;
using client.messengers.punchHole.udp;
using client.messengers.register;
using client.realize.messengers.crypto;
using common.libs;
using common.server;
using common.server.model;
using common.server.servers.rudp;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace client.realize.messengers.punchHole.udp
{
    public class PunchHoleRUdpMessengerSender : IPunchHoleUdp
    {
        private readonly PunchHoleMessengerSender punchHoleMessengerSender;
        private readonly RegisterStateInfo registerState;
        private readonly CryptoSwap cryptoSwap;
        private readonly Config config;
        private readonly WheelTimer<object> wheelTimer;
        private readonly IClientInfoCaching clientInfoCaching;
        private readonly IClientsTunnel clientsTunnel;

        public PunchHoleRUdpMessengerSender(PunchHoleMessengerSender punchHoleMessengerSender, RegisterStateInfo registerState, CryptoSwap cryptoSwap, Config config, WheelTimer<object> wheelTimer, IClientInfoCaching clientInfoCaching, IClientsTunnel clientsTunnel)
        {
            this.punchHoleMessengerSender = punchHoleMessengerSender;
            this.registerState = registerState;
            this.cryptoSwap = cryptoSwap;
            this.config = config;
            this.wheelTimer = wheelTimer;
            this.clientInfoCaching = clientInfoCaching;
            this.clientsTunnel = clientsTunnel;
        }
        private IConnection connection => registerState.UdpConnection;
        private ulong ConnectId => registerState.ConnectId;
#if DEBUG
        private bool UseLocalPort = false;
#else
        private bool UseLocalPort = true;
#endif

        private readonly ConcurrentDictionary<ulong, ConnectCacheModel> connectCache = new();

        public SimpleSubPushHandler<ConnectParams> OnSendHandler => new SimpleSubPushHandler<ConnectParams>();
        public async Task<ConnectResultModel> Send(ConnectParams param)
        {
            if (param.TunnelName == (ulong)TunnelDefaults.MIN)
            {
                (ulong tunnelName, int localPort) = await clientsTunnel.NewBind(ServerType.UDP, (ulong)TunnelDefaults.MIN);
                param.TunnelName = tunnelName;
                param.LocalPort = localPort;
            }

            var timeout = wheelTimer.NewTimeout(new WheelTimerTimeoutTask<object> { Callback = SendStep1Timeout, State = param.Id }, 500);

            TaskCompletionSource<ConnectResultModel> tcs = new TaskCompletionSource<ConnectResultModel>();
            connectCache.TryAdd(param.Id, new ConnectCacheModel
            {
                Step1Timeout = timeout,
                Tcs = tcs,
                TryTimes = param.TryTimes,
                LocalPort = param.LocalPort,
            });

            await punchHoleMessengerSender.Send(new SendPunchHoleArg<PunchHoleStep1Info>
            {
                Connection = connection,
                TunnelName = param.TunnelName,
                ToId = param.Id,
                Data = new PunchHoleStep1Info { Step = (byte)PunchHoleUdpSteps.STEP_1, PunchType = PunchHoleTypes.UDP }
            }).ConfigureAwait(false);

            return await tcs.Task.ConfigureAwait(false);
        }
        private void SendStep1Timeout(WheelTimerTimeout<object> timeout)
        {
            try
            {
                if (timeout.IsCanceled) return;

                ulong toid = (ulong)timeout.Task.State;
                timeout.Cancel();
                if (connectCache.TryRemove(toid, out ConnectCacheModel cache))
                {
                    cache.Canceled = true;
                    cache.Tcs.SetResult(new ConnectResultModel { State = false, Result = new ConnectFailModel { Type = ConnectFailType.ERROR, Msg = "udp打洞超时" } });
                }
            }
            catch (Exception ex)
            {
                Logger.Instance.Error(ex);
            }

        }

        public SimpleSubPushHandler<OnStep1Params> OnStep1Handler { get; } = new SimpleSubPushHandler<OnStep1Params>();
        public async Task OnStep1(OnStep1Params arg)
        {
            if (arg.Data.IsDefault)
            {
                OnStep1Handler.Push(arg);
            }
            if (arg.RawData.TunnelName > (ulong)TunnelDefaults.MAX)
            {
                await clientsTunnel.NewBind(arg.Connection.ServerType, arg.RawData.TunnelName);
            }

            if (clientInfoCaching.GetUdpserver(arg.RawData.TunnelName, out UdpServer udpServer))
            {
                foreach (var ip in arg.Data.LocalIps.Where(c => c.Equals(IPAddress.Any) == false))
                {
                    udpServer.SendUnconnectedMessage(Helper.FalseArray, new IPEndPoint(ip, arg.Data.LocalPort));
                }
                udpServer.SendUnconnectedMessage(Helper.FalseArray, new IPEndPoint(arg.Data.Ip, arg.Data.Port));

                await punchHoleMessengerSender.Send(new SendPunchHoleArg<PunchHoleStep2Info>
                {
                    Connection = arg.Connection,
                    TunnelName = arg.RawData.TunnelName,
                    ToId = arg.RawData.FromId,
                    Data = new PunchHoleStep2Info { Step = (byte)PunchHoleUdpSteps.STEP_2, PunchType = PunchHoleTypes.UDP }
                }).ConfigureAwait(false);
            }
        }

        public SimpleSubPushHandler<OnStep2Params> OnStep2Handler { get; } = new SimpleSubPushHandler<OnStep2Params>();
        public async Task OnStep2(OnStep2Params arg)
        {
            OnStep2Handler.Push(arg);
            await Task.Run(async () =>
            {
                if (connectCache.TryGetValue(arg.RawData.FromId, out ConnectCacheModel cache) == false)
                {
                    return;
                }
                if (clientInfoCaching.GetUdpserver(arg.RawData.TunnelName, out UdpServer udpServer) == false)
                {
                    return;
                }
                cache.Step1Timeout.Cancel();

                if (arg.Data.IsDefault)
                {
                    List<IPEndPoint> ips = new List<IPEndPoint>();
                    int times = cache.TryTimes;
                    if (UseLocalPort && registerState.RemoteInfo.Ip.ToString() == arg.Data.Ip.ToString())
                    {
                        times += 2;
                        ips = arg.Data.LocalIps.Where(c => c.Equals(IPAddress.Any) == false).Select(c => new IPEndPoint(c, arg.Data.LocalPort)).ToList();
                    }
                    ips.Add(new IPEndPoint(arg.Data.Ip, arg.Data.Port));

                    IConnection connection = null;
                    for (int i = 0; i < times; i++)
                    {
                        IPEndPoint ip = i >= ips.Count - 1 ? ips[^1] : ips[i];
                        connection = await udpServer.CreateConnection(ip);
                        if (connection != null)
                        {
                            break;
                        }
                        else
                        {
                            if (i >= ips.Count - 1)
                            {
                                await punchHoleMessengerSender.Send(new SendPunchHoleArg<PunchHoleStep21Info>
                                {
                                    Connection = this.connection,
                                    TunnelName = arg.RawData.TunnelName,
                                    ToId = arg.RawData.FromId,
                                    Data = new PunchHoleStep21Info
                                    {
                                        Step = (byte)PunchHoleUdpSteps.STEP_2_1,
                                        PunchType = PunchHoleTypes.UDP
                                    }
                                }).ConfigureAwait(false);
                                System.Threading.Thread.Sleep(100);
                            }
                        }
                    }
                    if (connection != null)
                    {
                        await CryptoSwap(connection);
                        await punchHoleMessengerSender.Send(new SendPunchHoleArg<PunchHoleStep3Info>
                        {
                            Connection = connection,
                            TunnelName = arg.RawData.TunnelName,
                            Data = new PunchHoleStep3Info
                            {
                                FromId = ConnectId,
                                Step = (byte)PunchHoleUdpSteps.STEP_3,
                                PunchType = PunchHoleTypes.UDP
                            }
                        }).ConfigureAwait(false);
                    }
                    else
                    {
                        await punchHoleMessengerSender.Send(new SendPunchHoleArg<PunchHoleStep2FailInfo>
                        {
                            Connection = this.connection,
                            TunnelName = arg.RawData.TunnelName,
                            ToId = arg.RawData.FromId,
                            Data = new PunchHoleStep2FailInfo { Step = (byte)PunchHoleUdpSteps.STEP_2_Fail, PunchType = PunchHoleTypes.UDP }
                        }).ConfigureAwait(false);
                        if (connectCache.TryRemove(arg.RawData.FromId, out _))
                        {
                            cache.Tcs.SetResult(new ConnectResultModel { State = false, Result = new ConnectFailModel { Type = ConnectFailType.ERROR, Msg = "udp打洞失败" } });
                        }
                    }
                }
                else
                {
                    if (connectCache.TryRemove(arg.RawData.FromId, out _))
                    {
                        cache.Tcs.SetResult(new ConnectResultModel { State = true });
                    }
                }
            });
        }

        private async Task CryptoSwap(IConnection connection)
        {
            if (config.Client.Encode)
            {
                ICrypto crypto = await cryptoSwap.Swap(null, connection, config.Client.EncodePassword);
                if (crypto == null)
                {
                    Logger.Instance.Error("udp打洞交换密钥失败，可能是两端密钥不一致，A如果设置了密钥，则B必须设置相同的密钥，如果B未设置密钥，则A必须留空");
                }
                else
                {
                    connection.EncodeEnable(crypto);
                }
            }
        }

        public SimpleSubPushHandler<OnStep21Params> OnStep21Handler { get; } = new SimpleSubPushHandler<OnStep21Params>();
        public async Task OnStep21(OnStep21Params arg)
        {
            if (arg.Data.IsDefault)
            {
                OnStep21Handler.Push(arg);
            }
            if (clientInfoCaching.GetUdpserver(arg.RawData.TunnelName, out UdpServer udpServer))
            {
                foreach (var ip in arg.Data.LocalIps.Where(c => c.Equals(IPAddress.Any) == false))
                {
                    udpServer.SendUnconnectedMessage(Helper.FalseArray, new IPEndPoint(ip, arg.Data.LocalPort));
                }
                udpServer.SendUnconnectedMessage(Helper.FalseArray, new IPEndPoint(arg.Data.Ip, arg.Data.Port));
            }
            await Task.CompletedTask;
        }

        public SimpleSubPushHandler<OnStep2FailParams> OnStep2FailHandler { get; } = new SimpleSubPushHandler<OnStep2FailParams>();
        public void OnStep2Fail(OnStep2FailParams arg)
        {
            OnStep2FailHandler.Push(arg);
        }

        public SimpleSubPushHandler<OnStep3Params> OnStep3Handler { get; } = new SimpleSubPushHandler<OnStep3Params>();
        public async Task OnStep3(OnStep3Params arg)
        {
            OnStep3Handler.Push(arg);

            await punchHoleMessengerSender.Send(new SendPunchHoleArg<PunchHoleStep4Info>
            {
                Connection = arg.Connection,
                TunnelName = arg.RawData.TunnelName,
                Data = new PunchHoleStep4Info
                {
                    FromId = ConnectId,
                    Step = (byte)PunchHoleUdpSteps.STEP_4,
                    PunchType = PunchHoleTypes.UDP
                }
            }).ConfigureAwait(false);
        }

        public SimpleSubPushHandler<OnStep4Params> OnStep4Handler { get; } = new SimpleSubPushHandler<OnStep4Params>();

        public void OnStep4(OnStep4Params arg)
        {
            if (connectCache.TryRemove(arg.Data.FromId, out ConnectCacheModel cache))
            {
                cache.Tcs.SetResult(new ConnectResultModel { State = true });
            }
            OnStep4Handler.Push(arg);
        }

    }
}
