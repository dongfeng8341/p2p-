#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#docker run -it --entrypoint sh snltty/p2p-tunnel-client

# ��ȡ  ����
# docker pull snltty/p2p-tunnel-client
# docker run -it -d --name="p2p-tunnel-client" -p 5411:5411/tcp -p 59411:59411/tcp snltty/p2p-tunnel-client

# ��������Ŀ¼����������ʱ�����ļ��������޸�������Ϣ
# cd /usr/local
# mkdir p2p-tunnel-client
# cd p2p-tunnel-client

# �������ļ��������︴�Ƴ���
# docker cp p2p-tunnel-server:/app/appsettings.json /usr/local/p2p-tunnel-client/appsettings.json
# docker cp p2p-tunnel-server:/app/socks5-appsettings.json /usr/local/p2p-tunnel-client/socks5-appsettings.json
# docker cp p2p-tunnel-server:/app/tcpforward-appsettings.json /usr/local/p2p-tunnel-client/tcpforward-appsettings.json
# docker cp p2p-tunnel-server:/app/udpforward-appsettings.json /usr/local/p2p-tunnel-client/udpforward-appsettings.json

# �޸�����
# vim  
# i ����༭�޸�
# esc �˳��༭
# :wq �����˳�

# �������ļ����ƽ�ȥ
# docker cp /usr/local/p2p-tunnel-client/appsettings.json  p2p-tunnel-server:/app/appsettings.json
# docker cp /usr/local/p2p-tunnel-client/socks5-appsettings.json  p2p-tunnel-server:/app/socks5-appsettings.json
# docker cp /usr/local/p2p-tunnel-client/tcpforward-appsettings.json  p2p-tunnel-server:/app/tcpforward-appsettings.json
# docker cp /usr/local/p2p-tunnel-client/udpforward-appsettings.json  p2p-tunnel-server:/app/udpforward-appsettings.json

# ��������
# docker restart p2p-tunnel-client

FROM alpine:latest
ENV TZ=Asia/Shanghai DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=1
RUN echo "http://mirrors.aliyun.com/alpine/latest-stable/main/" > /etc/apk/repositories \
    && apk add --no-cache libstdc++ libintl tzdata zeromq bash \
    && ln -snf /usr/share/zoneinfo/$clTZ /etc/localtime \
    && echo $TZ > /etc/timezone

EXPOSE 5411/tcp
EXPOSE 59411/tcp

WORKDIR /app
COPY . .
ENTRYPOINT ["./client.service"]