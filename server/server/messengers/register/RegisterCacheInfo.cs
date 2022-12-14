using common.server;
using common.server.model;
using System.Collections.Concurrent;
using System.Net;
using System.Text.Json.Serialization;

namespace server.messengers.register
{
    public class RegisterCacheInfo
    {
        [JsonIgnore]
        public IConnection TcpConnection { get; private set; }
        [JsonIgnore]
        public IConnection UdpConnection { get; private set; }

        [JsonIgnore]
        public IConnection OnLineConnection => TcpConnection ?? UdpConnection;

        public ulong Id { get; set; }
        public string Name { get; set; }
        public string GroupId { get; set; }
        [JsonIgnore]
        public IPAddress[] LocalIps { get; set; }
        [JsonIgnore]
        public string Mac { get; set; }
        public bool AutoPunchHole { get; set; } = false;

        public void UpdateUdpInfo(IConnection connection)
        {
            UdpConnection = connection;
            UdpConnection.ConnectId = Id;
        }
        public void UpdateTcpInfo(IConnection connection)
        {
            TcpConnection = connection;
            TcpConnection.ConnectId = Id;
        }

        private ConcurrentDictionary<ulong, TunnelRegisterCacheInfo> tunnels = new ConcurrentDictionary<ulong, TunnelRegisterCacheInfo>();
        public void AddTunnel(TunnelRegisterCacheInfo model)
        {
            tunnels.AddOrUpdate(model.TunnelName, model, (a, b) => model);
        }
        public void RemoveTunnel(ulong tunnameName)
        {
            tunnels.TryRemove(tunnameName,out _);
        }
        public bool TunnelExists(ulong tunnelName)
        {
            return tunnels.ContainsKey(tunnelName);
        }
        public bool GetTunnel(ulong tunnelName, out TunnelRegisterCacheInfo model)
        {
            return tunnels.TryGetValue(tunnelName, out model);
        }
    }

    public class TunnelRegisterCacheInfo
    {
        public ulong TunnelName { get; set; } = 0;
        public int Port { get; set; } = 0;
        public int LocalPort { get; set; } = 0;
        public ServerType Servertype { get; set; }
        public bool IsDefault { get; set; } = false;
    }
}
