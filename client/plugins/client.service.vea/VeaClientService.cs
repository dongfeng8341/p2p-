using client.messengers.clients;
using client.service.ui.api.clientServer;
using common.libs.extends;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace client.service.vea
{
    public class VeaClientService : IClientService
    {
        private readonly Config config;
        private readonly VeaTransfer virtualEthernetAdapterTransfer;
        private readonly IVeaSocks5ServerHandler veaSocks5ServerHandler;
        private readonly VeaMessengerSender veaMessengerSender;
        private readonly IClientInfoCaching clientInfoCaching;

        public VeaClientService(Config config, VeaTransfer virtualEthernetAdapterTransfer, IVeaSocks5ServerHandler veaSocks5ServerHandler, VeaMessengerSender veaMessengerSender, IClientInfoCaching clientInfoCaching)
        {
            this.config = config;
            this.virtualEthernetAdapterTransfer = virtualEthernetAdapterTransfer;
            this.veaSocks5ServerHandler = veaSocks5ServerHandler;
            this.veaMessengerSender = veaMessengerSender;
            this.clientInfoCaching = clientInfoCaching;
        }

        public Config Get(ClientServiceParamsInfo arg)
        {
            return config;
        }
        public void Set(ClientServiceParamsInfo arg)
        {
            var conf = arg.Content.DeJson<Config>();

            config.Enable = conf.Enable;
            config.ProxyAll = conf.ProxyAll;
            config.TargetName = conf.TargetName;
            config.IP = conf.IP;
            config.LanIP = conf.LanIP;
            config.TunnelType = conf.TunnelType;
            config.SocksPort = conf.SocksPort;
            config.BufferSize = conf.BufferSize;
            config.ConnectEnable = conf.ConnectEnable;

            veaSocks5ServerHandler.UpdateConfig();

            try
            {
                virtualEthernetAdapterTransfer.Run();
            }
            catch (Exception ex)
            {
                arg.SetCode(ClientServiceResponseCodes.Error, ex.Message);
            }

            config.SaveConfig().Wait();
        }

        public Dictionary<ulong, IPAddressCacheInfo> Update(ClientServiceParamsInfo arg)
        {
            return virtualEthernetAdapterTransfer.IPList.ToDictionary(c => c.Value.Client.Id, d => d.Value);
        }

        public async Task<bool> Reset(ClientServiceParamsInfo arg)
        {
            var model = arg.Content.DeJson<ResetModel>();
            if (clientInfoCaching.Get(model.Id, out ClientInfo client))
            {
                await veaMessengerSender.Reset(client.OnlineConnection, model.Id);
            }
            return true;
        }
    }

    class ResetModel
    {
        public ulong Id { get; set; }
    }
}
