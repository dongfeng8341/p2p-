(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24e7bd34"],{"4cad":function(e,t,n){var r=n("f099");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var c=n("499e").default;c("411082f6",r,!0,{sourceMap:!1,shadowMode:!1})},5372:function(e,t,n){"use strict";n("4cad")},"9f6a":function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),c=function(e){return Object(r["pushScopeId"])("data-v-1d92161a"),e=e(),Object(r["popScopeId"])(),e},o={class:"socks5-wrap"},a={class:"inner"},l={class:"title t-c"},u={class:"form"},d={class:"w-100"},i={class:"w-100"},b={class:"w-100"},f={class:"w-100 t-c"},s=Object(r["createTextVNode"])("确 定"),m=Object(r["createTextVNode"])("配置插件"),O={class:"inner"},j=c((function(){return Object(r["createElementVNode"])("h3",{class:"title t-c"},"组网列表",-1)})),p={key:0,style:{color:"green"}},V={key:1},N={style:{color:"#999"}},x=Object(r["createTextVNode"])("重装其网卡");function w(e,t,n,c,w,h){var C=Object(r["resolveComponent"])("el-alert"),g=Object(r["resolveComponent"])("el-input"),v=Object(r["resolveComponent"])("el-tooltip"),_=Object(r["resolveComponent"])("el-form-item"),k=Object(r["resolveComponent"])("el-col"),P=Object(r["resolveComponent"])("el-option"),y=Object(r["resolveComponent"])("el-select"),E=Object(r["resolveComponent"])("el-row"),S=Object(r["resolveComponent"])("el-checkbox"),I=Object(r["resolveComponent"])("el-button"),T=Object(r["resolveComponent"])("ConfigureModal"),B=Object(r["resolveComponent"])("el-form"),z=Object(r["resolveComponent"])("el-table-column"),L=Object(r["resolveComponent"])("el-table");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[Object(r["createElementVNode"])("div",a,[Object(r["createElementVNode"])("h3",l,Object(r["toDisplayString"])(e.$route.meta.name),1),Object(r["createVNode"])(C,{class:"alert",type:"warning","show-icon":"",closable:!1,title:"虚拟网卡组网，可将在线客户端组合成一个网络，然后通过客户端ip直接访问，暂时仅windows",description:"需要管理员运行，否则无法添加虚拟网卡"}),Object(r["createElementVNode"])("div",u,[Object(r["createVNode"])(B,{ref:"formDom",model:c.state.form,rules:c.state.rules,"label-width":"80px"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",d,[Object(r["createVNode"])(E,{gutter:10},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{label:"代理端口",prop:"SocksPort"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(v,{class:"box-item",effect:"dark",content:"代理端口，无所谓，填写一个未被占用的端口即可",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{modelValue:c.state.form.SocksPort,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.state.form.SocksPort=e})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(k,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{label:"buffersize",prop:"BufferSize"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{modelValue:c.state.form.BufferSize,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.state.form.BufferSize=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(k,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{label:"通信通道",prop:"TunnelType"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(y,{modelValue:c.state.form.TunnelType,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.state.form.TunnelType=e}),placeholder:"选择类型"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.shareData.tunnelTypes,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])(P,{key:t,label:e,value:t},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(k,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{label:"目标端",prop:"TargetName"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(v,{class:"box-item",effect:"dark",content:"当遇到不存在的ip时，目标端应该选择谁，为某个客户端",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(y,{modelValue:c.state.form.TargetName,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.state.form.TargetName=e}),placeholder:"选择目标"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.targets,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])(P,{key:t,label:e.label,value:e.Name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(r["createVNode"])(_,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",i,[Object(r["createVNode"])(E,{gutter:10},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{"label-width":"0",prop:"Enable"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(v,{class:"box-item",effect:"dark",content:"不开启，则只修改配置信息，不安装虚拟网卡",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(S,{modelValue:c.state.form.Enable,"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.state.form.Enable=e}),label:"开启网卡"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(k,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{"label-width":"0",prop:"ProxyAll"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(v,{class:"box-item",effect:"dark",content:"是否由虚拟网卡代理所有，暂不可用",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(S,{disabled:"",modelValue:c.state.form.ProxyAll,"onUpdate:modelValue":t[5]||(t[5]=function(e){return c.state.form.ProxyAll=e}),label:"代理所有"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(k,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{"label-width":"0",prop:"ConnectEnable"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(v,{class:"box-item",effect:"dark",content:"作为被访问端时，是否允许访问",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(S,{modelValue:c.state.form.ConnectEnable,"onUpdate:modelValue":t[6]||(t[6]=function(e){return c.state.form.ConnectEnable=e}),label:"允许访问"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(r["createVNode"])(_,{"label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",b,[Object(r["createVNode"])(E,{gutter:10},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{xs:12,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{label:"本机IP",prop:"IP"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(v,{class:"box-item",effect:"dark",content:"当前客户端的虚拟网卡ip，各个客户端之间设置不一样的ip，相同网段即可",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{modelValue:c.state.form.IP,"onUpdate:modelValue":t[7]||(t[7]=function(e){return c.state.form.IP=e})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(k,{xs:12,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{label:"局域网段",prop:"LanIP"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(v,{class:"box-item",effect:"dark",content:"当前客户端的局域网段，各个客户端之间设置不一样的网段即可，192.168.x.0酱紫，0.0.0.0则不启用",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(g,{modelValue:c.state.form.LanIP,"onUpdate:modelValue":t[8]||(t[8]=function(e){return c.state.form.LanIP=e})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(r["createVNode"])(_,{"label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",f,[Object(r["createVNode"])(I,{type:"primary",loading:c.state.loading,onClick:c.handleSubmit,class:"m-r-1"},{default:Object(r["withCtx"])((function(){return[s]})),_:1},8,["loading","onClick"]),Object(r["createVNode"])(T,{className:"VeaClientConfigure"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(I,null,{default:Object(r["withCtx"])((function(){return[m]})),_:1})]})),_:1})])]})),_:1})]})),_:1},8,["model","rules"])])]),Object(r["createElementVNode"])("div",O,[j,Object(r["createElementVNode"])("div",null,[Object(r["createVNode"])(L,{size:"small",border:"",data:c.showClients,style:{width:"100%"}},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(z,{prop:"Name",label:"客户端"},{default:Object(r["withCtx"])((function(e){return[e.row.online?(Object(r["openBlock"])(),Object(r["createElementBlock"])("strong",p,Object(r["toDisplayString"])(e.row.Name),1)):(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",V,Object(r["toDisplayString"])(e.row.Name),1))]})),_:1}),Object(r["createVNode"])(z,{prop:"veaIp",label:"虚拟ip"},{default:Object(r["withCtx"])((function(e){return[Object(r["createElementVNode"])("p",null,[Object(r["createElementVNode"])("strong",null,Object(r["toDisplayString"])(e.row.veaIp.IP),1)]),Object(r["createElementVNode"])("p",N,Object(r["toDisplayString"])(e.row.veaIp.LanIP),1)]})),_:1}),Object(r["createVNode"])(z,{prop:"todo",label:"操作"},{default:Object(r["withCtx"])((function(e){return[Object(r["createVNode"])(I,{size:"small",loading:c.state.loading,onClick:function(t){return c.handleResetVea(e.row)},class:"m-r-1"},{default:Object(r["withCtx"])((function(){return[x]})),_:2},1032,["loading","onClick"])]})),_:1})]})),_:1},8,["data"])])])])}n("d81d"),n("a9e3"),n("d3b7"),n("159b"),n("25f0"),n("e9c4");var h=n("a1e9"),C=n("97af"),g=function(){return Object(C["c"])("vea/get")},v=function(e){return Object(C["c"])("vea/set",e)},_=function(){return Object(C["c"])("vea/update")},k=function(e){return Object(C["c"])("vea/reset",e)},P=n("5c40"),y=n("3ef4"),E=n("3fd2"),S=n("8286"),I=n("9709"),T=n("49f5"),B={components:{ConfigureModal:T["a"]},setup:function(){var e=Object(E["a"])(),t=Object(I["a"])(),n=Object(S["a"])(),r=Object(h["c"])((function(){return e.clients.map((function(e){return{Name:e.Name,label:e.Name}}))})),c=Object(h["p"])({loading:!1,form:{Enable:!1,ProxyAll:!1,TargetName:"",IP:"",LanIP:"0.0.0.0",TunnelType:"8",SocksPort:5415,BufferSize:8192,ConnectEnable:!1},rules:{BufferSize:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1024,max:65536,message:"数字 1k-64k",trigger:"blur",transform:function(e){return Number(e)}}],SocksPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}],IP:[{required:!0,message:"必填",trigger:"blur"}],LanIP:[{required:!0,message:"必填",trigger:"blur"}]},veaClients:{}}),o=Object(h["r"])(null),a=Object(h["c"])((function(){return e.clients.forEach((function(e){e.veaIp=c.veaClients[e.Id]||{IP:"",LanIP:""}})),e.clients})),l=function(){g().then((function(e){c.form.Enable=e.Enable,c.form.ProxyAll=e.ProxyAll,c.form.TargetName=e.TargetName,c.form.IP=e.IP,c.form.LanIP=e.LanIP,c.form.TunnelType=e.TunnelType.toString(),c.form.SocksPort=e.SocksPort,c.form.BufferSize=e.BufferSize,c.form.ConnectEnable=e.ConnectEnable}))},u=0,d=function e(){C["e"].connected?_().then((function(t){c.veaClients=t,u=setTimeout(e,1e3)})):(c.veaClients={},u=setTimeout(e,1e3))};Object(P["rb"])((function(){l(),d()})),Object(P["wb"])((function(){clearTimeout(u)}));var i=function(){o.value.validate((function(e){if(!e)return!1;c.loading=!0;var t=JSON.parse(JSON.stringify(c.form));t.SocksPort=Number(t.SocksPort),t.TunnelType=Number(t.TunnelType),t.BufferSize=Number(t.BufferSize),v(t).then((function(e){c.loading=!1,t.IsPac&&savePac(),y["a"].success("操作成功！")})).catch((function(e){c.loading=!1}))}))},b=function(e){c.loading=!0,k({id:e.Id}).then((function(e){c.loading=!1,e?y["a"].success("成功"):y["a"].error("失败")})).catch((function(){c.loading=!1,y["a"].error("失败")}))};return{targets:r,shareData:n,registerState:t,state:c,showClients:a,formDom:o,handleSubmit:i,handleResetVea:b}}},z=(n("5372"),n("6b0d")),L=n.n(z);const D=L()(B,[["render",w],["__scopeId","data-v-1d92161a"]]);t["default"]=D},f099:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".socks5-wrap[data-v-1d92161a]{padding:2rem}.inner[data-v-1d92161a]{border:1px solid #ddd;padding:1rem;border-radius:.4rem}.alert[data-v-1d92161a],.inner[data-v-1d92161a]{margin-bottom:1rem}@media screen and (max-width:768px){.el-col[data-v-1d92161a]{margin-top:.6rem}}",""]),e.exports=t}}]);