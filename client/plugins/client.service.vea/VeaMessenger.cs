using common.libs;
using common.server;

namespace client.service.vea
{
    public class VeaMessenger : IMessenger
    {
        private readonly VeaTransfer veaTransfer;
        private readonly Config config;
        public VeaMessenger(VeaTransfer veaTransfer, Config config)
        {
            this.veaTransfer = veaTransfer;
            this.config = config;
        }

        public byte[] IP(IConnection connection)
        {
            veaTransfer.OnNotify(connection);
            return new IPAddressInfo { IP = config.IP, LanIP = config.LanIP }.ToBytes();
        }

        public byte[] Reset(IConnection connection)
        {
            veaTransfer.Run();
            return Helper.TrueArray;
        }
    }
}
