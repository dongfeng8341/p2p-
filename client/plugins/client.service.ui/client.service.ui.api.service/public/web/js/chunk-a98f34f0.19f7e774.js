(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a98f34f0"],{"0fca":function(e,t,o){"use strict";o("3f98")},"3f98":function(e,t,o){},"73cf":function(e,t,o){"use strict";o.r(t);var r=o("7a23"),n=function(e){return Object(r["pushScopeId"])("data-v-6e391208"),e=e(),Object(r["popScopeId"])(),e},c={class:"register-form"},l=n((function(){return Object(r["createElementVNode"])("h3",{class:"title t-c"},"将本客户端注册到服务器",-1)})),a={class:"inner"},u={class:"t-c w-100"},d=Object(r["createTextVNode"])("注册");function i(e,t,o,n,i,f){var b=Object(r["resolveComponent"])("el-input"),p=Object(r["resolveComponent"])("el-form-item"),m=Object(r["resolveComponent"])("el-col"),j=Object(r["resolveComponent"])("el-tooltip"),O=Object(r["resolveComponent"])("el-row"),C=Object(r["resolveComponent"])("el-alert"),V=Object(r["resolveComponent"])("el-option"),s=Object(r["resolveComponent"])("el-select"),g=Object(r["resolveComponent"])("el-switch"),N=Object(r["resolveComponent"])("el-button"),h=Object(r["resolveComponent"])("el-form");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,[l,Object(r["createElementVNode"])("div",a,[Object(r["createVNode"])(h,{"label-width":"8rem",ref:"formDom",model:e.model,rules:e.rules},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"基本信息"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(m,{span:12},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"名称",prop:"ClientName"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{modelValue:e.model.ClientName,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.model.ClientName=t}),maxlength:"32","show-word-limit":"",placeholder:"设置你的注册名称"},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(m,{span:12},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"分组",prop:"GroupId"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{class:"box-item",effect:"dark",content:"设置你的分组编号，两个客户端之间分组编号一致时相互可见",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{modelValue:e.model.GroupId,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.model.GroupId=t}),maxlength:"32","show-word-limit":"",placeholder:"设置你的分组编号"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(p,{label:"服务器"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(m,{span:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"地址",prop:"ServerIp"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{modelValue:e.model.ServerIp,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.model.ServerIp=t}),placeholder:"域名或IP地址"},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(m,{span:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"Udp端口",prop:"ServerUdpPort"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{modelValue:e.model.ServerUdpPort,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.model.ServerUdpPort=t})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(m,{span:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"Tcp端口",prop:"ServerTcpPort"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{modelValue:e.model.ServerTcpPort,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.model.ServerTcpPort=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(p,{label:""},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{title:"使用免费打洞服务器p2p.snltty.com，udp 5410，tcp 59410，或者自己部署的服务器地址及端口",type:"warning","show-icon":""})]})),_:1}),Object(r["createVNode"])(p,{label:"本地"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(m,{span:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"Udp端口",prop:"UdpPort"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{readonly:"",modelValue:n.registerState.LocalInfo.UdpPort,"onUpdate:modelValue":t[5]||(t[5]=function(e){return n.registerState.LocalInfo.UdpPort=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(m,{span:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"Tcp端口",prop:"TcpPort"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{readonly:"",modelValue:n.registerState.LocalInfo.TcpPort,"onUpdate:modelValue":t[6]||(t[6]=function(e){return n.registerState.LocalInfo.TcpPort=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(m,{span:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"mac地址",prop:"Mac"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{readonly:"",modelValue:n.registerState.LocalInfo.Mac,"onUpdate:modelValue":t[7]||(t[7]=function(e){return n.registerState.LocalInfo.Mac=e})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(p,{label:"外网"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(m,{span:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"Udp端口",prop:"UdpPort"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{readonly:"",modelValue:n.registerState.RemoteInfo.UdpPort,"onUpdate:modelValue":t[8]||(t[8]=function(e){return n.registerState.RemoteInfo.UdpPort=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(m,{span:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"Tcp端口",prop:"TcpPort"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{readonly:"",modelValue:n.registerState.RemoteInfo.TcpPort,"onUpdate:modelValue":t[9]||(t[9]=function(e){return n.registerState.RemoteInfo.TcpPort=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(m,{span:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"IP",prop:"Ip"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{readonly:"",modelValue:n.registerState.RemoteInfo.Ip,"onUpdate:modelValue":t[10]||(t[10]=function(e){return n.registerState.RemoteInfo.Ip=e})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(p,{label:"自动注册"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(m,{span:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"状态",prop:"AutoReg"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(s,{modelValue:e.model.AutoReg,"onUpdate:modelValue":t[11]||(t[11]=function(t){return e.model.AutoReg=t}),size:"large"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(),Object(r["createBlock"])(V,{key:!1,label:"不自动注册",value:!1})),(Object(r["openBlock"])(),Object(r["createBlock"])(V,{key:!0,label:"自动注册",value:!0}))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(m,{span:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"重试次数",prop:"AutoRegTimes"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{class:"box-item",effect:"dark",content:"如果自动注册失败，将要重试几次",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{modelValue:e.model.AutoRegTimes,"onUpdate:modelValue":t[12]||(t[12]=function(t){return e.model.AutoRegTimes=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(p,{label:"注册状态"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(m,{span:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"UDP",prop:"UdpConnected"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{disabled:"",modelValue:n.registerState.LocalInfo.UdpConnected,"onUpdate:modelValue":t[13]||(t[13]=function(e){return n.registerState.LocalInfo.UdpConnected=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(m,{span:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"TCP",prop:"TcpConnected"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{disabled:"",modelValue:n.registerState.LocalInfo.TcpConnected,"onUpdate:modelValue":t[14]||(t[14]=function(e){return n.registerState.LocalInfo.TcpConnected=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(m,{span:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"打洞加密",prop:"ClientEncode"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{class:"box-item",effect:"dark",content:"客户端之间通信使用加密",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{modelValue:e.model.ClientEncode,"onUpdate:modelValue":t[15]||(t[15]=function(t){return e.model.ClientEncode=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(m,{span:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"服务加密",prop:"ServerEncode"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{class:"box-item",effect:"dark",content:"客户端与服务端之间通信使用加密",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{modelValue:e.model.ServerEncode,"onUpdate:modelValue":t[16]||(t[16]=function(t){return e.model.ServerEncode=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(p,{label:"","label-width":"0",class:"t-c"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",u,[Object(r["createVNode"])(N,{type:"primary",size:"large",loading:n.registerState.LocalInfo.IsConnecting,onClick:n.handleSubmit},{default:Object(r["withCtx"])((function(){return[d]})),_:1},8,["loading","onClick"])])]})),_:1})]})),_:1},8,["model","rules"])])])}var f=o("5530"),b=(o("a9e3"),o("a1e9")),p=o("9709"),m=o("ea39"),j=o("97af"),O=function(e){return Object(j["c"])("config/update",e)},C=o("3ef4"),V=o("5c40"),s={setup:function(){var e=Object(b["r"])(null),t=Object(p["a"])(),o=Object(b["p"])({model:{ClientName:"",ServerIp:"",ServerUdpPort:0,ServerTcpPort:0,AutoReg:!1,AutoRegTimes:10,UseMac:!1,GroupId:"",ClientEncode:!1,ServerEncode:!1},rules:{ClientName:[{required:!0,message:"必填",trigger:"blur"}],ServerIp:[{required:!0,message:"必填",trigger:"blur"}],ServerUdpPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}],ServerTcpPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}]}});Object(m["a"])().then((function(e){o.model.ClientName=t.ClientConfig.Name=e.ClientConfig.Name,o.model.GroupId=t.ClientConfig.GroupId=e.ClientConfig.GroupId,o.model.AutoReg=t.ClientConfig.AutoReg=e.ClientConfig.AutoReg,o.model.AutoRegTimes=t.ClientConfig.AutoRegTimes=e.ClientConfig.AutoRegTimes,o.model.UseMac=t.ClientConfig.UseMac=e.ClientConfig.UseMac,o.model.ClientEncode=t.ClientConfig.Encode=e.ClientConfig.Encode,o.model.ServerIp=t.ServerConfig.Ip=e.ServerConfig.Ip,o.model.ServerUdpPort=t.ServerConfig.UdpPort=e.ServerConfig.UdpPort,o.model.ServerTcpPort=t.ServerConfig.TcpPort=e.ServerConfig.TcpPort,o.model.ServerEncode=t.ServerConfig.Encode=e.ServerConfig.Encode})).catch((function(e){})),Object(V["nc"])((function(){return t.ClientConfig.GroupId}),(function(){o.model.GroupId=t.ClientConfig.GroupId}));var r=function(){e.value.validate((function(e){if(!e)return!1;var r={ClientConfig:{Name:o.model.ClientName,GroupId:o.model.GroupId,AutoReg:o.model.AutoReg,AutoRegTimes:+o.model.AutoRegTimes,UseMac:o.model.UseMac,Encode:o.model.ClientEncode},ServerConfig:{Ip:o.model.ServerIp,UdpPort:+o.model.ServerUdpPort,TcpPort:+o.model.ServerTcpPort,Encode:o.model.ServerEncode}};t.LocalInfo.IsConnecting=!0,O(r).then((function(){Object(m["b"])().then((function(e){})).catch((function(e){C["a"].error(e)}))})).catch((function(e){C["a"].error(e)}))}))};return Object(f["a"])(Object(f["a"])({},Object(b["z"])(o)),{},{registerState:t,formDom:e,handleSubmit:r})}},g=(o("0fca"),o("6b0d")),N=o.n(g);const h=N()(s,[["render",i],["__scopeId","data-v-6e391208"]]);t["default"]=h}}]);