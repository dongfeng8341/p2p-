﻿using client.messengers.register;
using common.libs;
using common.libs.database;
using common.libs.extends;
using common.server;
using common.server.model;
using common.udpforward;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace client.service.udpforward
{
    /// <summary>
    /// tcp转发中转器和入口
    /// </summary>
    public class UdpForwardTransfer : UdpForwardTransferBase
    {
        private readonly IUdpForwardTargetCaching<UdpForwardTargetCacheInfo> udpForwardTargetCaching;
        private readonly IUdpForwardServer udpForwardServer;
        NumberSpaceInt32 listenNS = new NumberSpaceInt32();

        public readonly P2PConfigInfo p2PConfigInfo;
        private readonly IConfigDataProvider<P2PConfigInfo> p2pConfigDataProvider;
        public readonly ServerConfigInfo serverConfigInfo;
        private readonly IConfigDataProvider<ServerConfigInfo> serverConfigDataProvider;
        private readonly Config clientConfig;
        private readonly RegisterStateInfo registerStateInfo;

        private readonly UdpForwardMessengerSender udpForwardMessengerSender;

        public UdpForwardTransfer(
            IUdpForwardTargetCaching<UdpForwardTargetCacheInfo> udpForwardTargetCaching,
            IUdpForwardServer udpForwardServer,

            IConfigDataProvider<P2PConfigInfo> p2pConfigDataProvider,
            IConfigDataProvider<ServerConfigInfo> serverConfigDataProvider,

            Config clientConfig,
            RegisterStateInfo registerStateInfo,

           UdpForwardMessengerSender udpForwardMessengerSender,
           IUdpForwardTargetProvider tcpForwardTargetProvider) : base(udpForwardServer, udpForwardMessengerSender, tcpForwardTargetProvider)
        {
            this.udpForwardTargetCaching = udpForwardTargetCaching;

            this.p2pConfigDataProvider = p2pConfigDataProvider;
            p2PConfigInfo = ReadP2PConfig();
            this.serverConfigDataProvider = serverConfigDataProvider;
            serverConfigInfo = ReadServerConfig();

            this.clientConfig = clientConfig;
            this.registerStateInfo = registerStateInfo;

            this.udpForwardServer = udpForwardServer;
            this.udpForwardMessengerSender = udpForwardMessengerSender;

            udpForwardServer.OnListenChange.Sub((model) =>
            {
                if (model.Port == 0)
                {
                    udpForwardTargetCaching.ClearConnection();
                }
                else
                {
                    GetP2PByPort(model.Port).Listening = model.State;
                }
            });
            registerStateInfo.OnRegisterStateChange.Sub((state) =>
            {
                if (state)
                {
                    RegisterServerForward();
                }
            });
        }

        #region p2p
        public string AddP2PListen(P2PListenInfo param)
        {
            try
            {

                P2PListenInfo oldPort = GetP2PByPort(param.Port);
                if (oldPort.ID > 0)
                {
                    return "已存在";
                }

                param.ID = listenNS.Increment();
                p2PConfigInfo.Tunnels.Add(new P2PListenInfo
                {
                    Port = param.Port,
                    ID = param.ID,
                    TunnelType = param.TunnelType,
                    Name = param.Name,
                    Listening = param.Listening,
                    TargetIp = param.TargetIp,
                    TargetPort = param.TargetPort,
                });
                udpForwardTargetCaching.Add(param.Port, new UdpForwardTargetCacheInfo
                {
                    Name = param.Name,
                    TunnelType = param.TunnelType,
                    Endpoint = NetworkHelper.EndpointToArray(param.TargetIp, param.TargetPort)
                });

                if (param.Listening)
                {
                    StartP2P(GetP2PByPort(param.Port));
                }
                SaveP2PConfig();
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
            return string.Empty;
        }
        public void RemoveP2PListen(int port)
        {
            RemoveP2PListen(GetP2PByPort(port));
        }
        private void RemoveP2PListen(P2PListenInfo listen)
        {
            if (listen.ID > 0)
            {
                StopP2PListen(listen);
                p2PConfigInfo.Tunnels.Remove(listen);
                udpForwardTargetCaching.Remove(listen.TargetPort);
                SaveP2PConfig();
            }
        }
        public void StopP2PListen(int port)
        {
            StopP2PListen(GetP2PByPort(port));
        }
        private void StopP2PListen(P2PListenInfo listen)
        {
            if (listen.ID > 0)
            {
                udpForwardServer.Stop(listen.Port);
            }
        }
        public P2PListenInfo GetP2PByPort(int port)
        {
            return p2PConfigInfo.Tunnels.FirstOrDefault(c => c.Port == port) ?? new P2PListenInfo { };
        }
        public void StartP2P()
        {
            StartP2PAll();
        }
        public string StartP2P(P2PListenInfo listen)
        {
            try
            {
                udpForwardServer.Start(listen.Port);
                SaveP2PConfig();
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
            return string.Empty;
        }
        public string StartP2P(int port)
        {
            try
            {
                udpForwardServer.Start(port);
                SaveP2PConfig();
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
            return string.Empty;
        }
        public void StartP2PAll()
        {
            StopP2PAll();
            foreach (var item in p2PConfigInfo.Tunnels.Where(c => c.Listening))
            {
                StartP2P(item);
            }
        }
        public void StopP2PAll()
        {
            p2PConfigInfo.Tunnels.ForEach(c =>
            {
                StopP2PListen(c);
            });
        }

        private P2PConfigInfo ReadP2PConfig()
        {
            P2PConfigInfo config = p2pConfigDataProvider.Load().Result ?? new P2PConfigInfo { };
            foreach (var listen in config.Tunnels)
            {
                try
                {
                    udpForwardTargetCaching.Add(listen.Port, new UdpForwardTargetCacheInfo
                    {
                        Endpoint = NetworkHelper.EndpointToArray(listen.TargetIp, listen.TargetPort),
                        Name = listen.Name,
                        TunnelType = listen.TunnelType
                    });
                }
                catch (Exception)
                {
                }
            }
            return config;
        }
        private string SaveP2PConfig()
        {
            try
            {
                p2pConfigDataProvider.Save(p2PConfigInfo);
                return string.Empty;
            }
            catch (Exception ex)
            {
                return (ex.Message);
            }
        }
        #endregion

        #region 服务器代理

        public async Task<int[]> GetServerPorts()
        {
            var resp = await udpForwardMessengerSender.GetPorts(registerStateInfo.TcpConnection);
            if (resp.Code == MessageResponeCodes.OK)
            {
                return resp.Data.DeBytes<int[]>();
            }

            return Array.Empty<int>();
        }
        public async Task<string> AddServerForward(ServerForwardItemInfo forward)
        {
            var resp = await udpForwardMessengerSender.Register(registerStateInfo.TcpConnection, new UdpForwardRegisterParamsInfo
            {
                SourcePort = forward.ServerPort,
                TargetIp = forward.LocalIp,
                TargetPort = forward.LocalPort,
                TargetName = clientConfig.Client.Name,
                TunnelType = forward.TunnelType,
            }).ConfigureAwait(false);
            if (resp.Code != MessageResponeCodes.OK)
            {
                return resp.Code.GetDesc((byte)resp.Code);
            }

            UdpForwardRegisterResult result = resp.Data.DeBytes<UdpForwardRegisterResult>();
            if (result.Code != UdpForwardRegisterResultCodes.OK)
            {
                return result.Code.GetDesc((byte)result.Code);
            }

            serverConfigInfo.Tunnels.Add(forward);
            SaveServerConfig();
            return string.Empty;
        }
        public async Task<string> RemoveServerForward(int port)
        {
            ServerForwardItemInfo forwardInfo = serverConfigInfo.Tunnels.FirstOrDefault(c => c.ServerPort == port);
            if (forwardInfo == null)
            {
                return "未找到删除对象";
            }
            var resp = await udpForwardMessengerSender.UnRegister(registerStateInfo.TcpConnection, (ushort)port).ConfigureAwait(false);
            if (resp.Code != MessageResponeCodes.OK)
            {
                return resp.Code.GetDesc((byte)resp.Code);
            }
            serverConfigInfo.Tunnels.Remove(forwardInfo);
            SaveServerConfig();

            return string.Empty;
        }

        private ServerConfigInfo ReadServerConfig()
        {
            var config = serverConfigDataProvider.Load().Result;
            return config;
        }
        private void SaveServerConfig()
        {
            serverConfigDataProvider.Save(serverConfigInfo);
        }

        private void RegisterServerForward()
        {
            Task.Run(async () =>
            {
                foreach (var item in serverConfigInfo.Tunnels)
                {
                    await SendRegister(item).ConfigureAwait(false);
                }
            });
        }
        private async Task SendRegister(ServerForwardItemInfo item)
        {
            var resp = await udpForwardMessengerSender.Register(registerStateInfo.TcpConnection, new UdpForwardRegisterParamsInfo
            {
                SourcePort = item.ServerPort,
                TargetIp = item.LocalIp,
                TargetPort = item.LocalPort,
                TargetName = clientConfig.Client.Name,
                TunnelType = item.TunnelType
            }).ConfigureAwait(false);
            PrintResult(item, resp);
        }
        private void PrintResult(ServerForwardItemInfo item, MessageResponeInfo resp)
        {
            bool success = false;
            StringBuilder sb = new StringBuilder();

            sb.Append($"注册服务器代理Udp转发代理 {item.ServerPort} -> {item.LocalIp}:{item.LocalPort}");
            if (resp.Code != MessageResponeCodes.OK)
            {
                sb.Append($" 【{resp.Code.GetDesc((byte)resp.Code)}】");
            }
            else
            {
                UdpForwardRegisterResult result = resp.Data.DeBytes<UdpForwardRegisterResult>();
                sb.Append($" 【{result.Code.GetDesc((byte)result.Code)}】{result.Msg}");
                success = result.Code == UdpForwardRegisterResultCodes.OK;
            }
            if (success)
            {
                Logger.Instance.Info(sb.ToString());
            }
            else
            {
                Logger.Instance.Warning(sb.ToString());
            }
        }

        #endregion

    }

    [Table("p2p-udp-forwards")]
    public class P2PConfigInfo
    {
        public P2PConfigInfo() { }
        public List<P2PListenInfo> Tunnels { get; set; } = new List<P2PListenInfo>();
    }
    public class P2PListenInfo
    {
        public int ID { get; set; } = 0;
        public int Port { get; set; } = 0;
        public string Name { get; set; } = string.Empty;
        public bool Listening { get; set; } = false;
        public UdpForwardTunnelTypes TunnelType { get; set; } = UdpForwardTunnelTypes.TCP_FIRST;
        public string TargetIp { get; set; } = String.Empty;
        public int TargetPort { get; set; } = 0;
    }
    [Table("server-udp-forwards")]
    public class ServerConfigInfo
    {
        public ServerConfigInfo() { }
        public List<ServerForwardItemInfo> Tunnels { get; set; } = new List<ServerForwardItemInfo>();
    }
    public class ServerForwardItemInfo
    {
        public int ServerPort { get; set; }
        public string LocalIp { get; set; }
        public int LocalPort { get; set; }
        public UdpForwardTunnelTypes TunnelType { get; set; } = UdpForwardTunnelTypes.TCP_FIRST;
    }
}