(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-459702dc"],{2740:function(e,t,n){},3476:function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),o={class:"socks5-wrap"},a={class:"title t-c"},r={class:"form"},l={class:"w-100"},u={class:"w-100"},i={class:"w-100 t-c"},b=Object(c["createTextVNode"])("确 定"),d=Object(c["createTextVNode"])("配置插件"),s={class:"w-100"};function f(e,t,n,f,m,O){var j=Object(c["resolveComponent"])("el-alert"),p=Object(c["resolveComponent"])("el-input"),V=Object(c["resolveComponent"])("el-form-item"),C=Object(c["resolveComponent"])("el-col"),N=Object(c["resolveComponent"])("el-option"),x=Object(c["resolveComponent"])("el-select"),h=Object(c["resolveComponent"])("el-row"),w=Object(c["resolveComponent"])("el-checkbox"),g=Object(c["resolveComponent"])("el-tooltip"),_=Object(c["resolveComponent"])("el-button"),k=Object(c["resolveComponent"])("ConfigureModal"),v=Object(c["resolveComponent"])("el-form");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("h3",a,Object(c["toDisplayString"])(e.$route.meta.name),1),Object(c["createVNode"])(j,{class:"alert",type:"warning","show-icon":"",closable:!1,title:"socks5代理，如果服务端开启，则也可以代理到服务端",description:"适用于ftp双通道"}),Object(c["createElementVNode"])("div",r,[Object(c["createVNode"])(v,{ref:"formDom",model:f.state.form,rules:f.state.rules,"label-width":"80px"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(V,{label:"","label-width":"0"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",l,[Object(c["createVNode"])(h,{gutter:10},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(C,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(V,{label:"监听端口",prop:"ListenPort"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(p,{modelValue:f.state.form.ListenPort,"onUpdate:modelValue":t[0]||(t[0]=function(e){return f.state.form.ListenPort=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(c["createVNode"])(C,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(V,{label:"buffersize",prop:"BufferSize"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(p,{modelValue:f.state.form.BufferSize,"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.state.form.BufferSize=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(c["createVNode"])(C,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(V,{label:"通信通道",prop:"TunnelType"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(x,{modelValue:f.state.form.TunnelType,"onUpdate:modelValue":t[2]||(t[2]=function(e){return f.state.form.TunnelType=e}),placeholder:"选择类型"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(f.shareData.tunnelTypes,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(N,{key:t,label:e,value:t},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(c["createVNode"])(C,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(V,{label:"目标端",prop:"TargetName"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(x,{modelValue:f.state.form.TargetName,"onUpdate:modelValue":t[3]||(t[3]=function(e){return f.state.form.TargetName=e}),placeholder:"选择目标"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(f.targets,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(N,{key:t,label:e.label,value:e.Name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(c["createVNode"])(V,{label:"","label-width":"0"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",u,[Object(c["createVNode"])(h,{gutter:10},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(C,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(V,{"label-width":"0",prop:"ListenEnable"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(g,{class:"box-item",effect:"dark",content:"不勾选表示关闭socks5监听",placement:"top-start"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(w,{modelValue:f.state.form.ListenEnable,"onUpdate:modelValue":t[4]||(t[4]=function(e){return f.state.form.ListenEnable=e}),label:"开启监听"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(c["createVNode"])(C,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(V,{"label-width":"0",prop:"ConnectEnable"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(g,{class:"box-item",effect:"dark",content:"作为目标端时，是否允许被访问",placement:"top-start"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(w,{modelValue:f.state.form.ConnectEnable,"onUpdate:modelValue":t[5]||(t[5]=function(e){return f.state.form.ConnectEnable=e}),label:"允许访问"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(c["createVNode"])(C,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(V,{"label-width":"0",prop:"LanConnectEnable"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(g,{class:"box-item",effect:"dark",content:"作为目标端时，是否允许被访问本地地址",placement:"top-start"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(w,{modelValue:f.state.form.LanConnectEnable,"onUpdate:modelValue":t[6]||(t[6]=function(e){return f.state.form.LanConnectEnable=e}),label:"允许访问本地"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(c["createVNode"])(C,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(V,{"label-width":"0",prop:"IsPac"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(g,{class:"box-item",effect:"dark",content:"勾选则设置系统代理，不勾选则需要自己设置",placement:"top-start"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(w,{modelValue:f.state.form.IsPac,"onUpdate:modelValue":t[7]||(t[7]=function(e){return f.state.form.IsPac=e}),label:"设置系统代理"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(c["createVNode"])(C,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(V,{"label-width":"0",prop:"IsCustomPac"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(g,{class:"box-item",effect:"dark",content:"自定义pac还是使用预制的pac规则",placement:"top-start"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(w,{modelValue:f.state.form.IsCustomPac,"onUpdate:modelValue":t[8]||(t[8]=function(e){return f.state.form.IsCustomPac=e}),label:"自定义pac"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(c["createVNode"])(V,{"label-width":"0"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",i,[Object(c["createVNode"])(_,{type:"primary",loading:f.state.loading,onClick:f.handleSubmit,class:"m-r-1"},{default:Object(c["withCtx"])((function(){return[b]})),_:1},8,["loading","onClick"]),Object(c["createVNode"])(k,{className:"Socks5ClientConfigure"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(_,null,{default:Object(c["withCtx"])((function(){return[d]})),_:1})]})),_:1})])]})),_:1}),Object(c["createVNode"])(V,{"label-width":"0",class:"hidden-xs-only",style:{"margin-bottom":"0"}},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",s,[Object(c["createVNode"])(p,{modelValue:f.state.pac,"onUpdate:modelValue":t[9]||(t[9]=function(e){return f.state.pac=e}),rows:16,type:"textarea",placeholder:"写pac内容",resize:"none"},null,8,["modelValue"])])]})),_:1})]})),_:1},8,["model","rules"])])])}n("d3b7"),n("25f0"),n("99af"),n("d81d"),n("a9e3"),n("e9c4");var m=n("a1e9"),O=n("97af"),j=function(){return Object(O["c"])("socks5/get")},p=function(e){return Object(O["c"])("socks5/set",e)},V=function(){return Object(O["c"])("socks5/getpac")},C=function(e){return Object(O["c"])("socks5/setpac",e)},N=n("5c40"),x=n("3ef4"),h=n("3fd2"),w=n("8286"),g=n("49f5"),_={components:{ConfigureModal:g["a"]},setup:function(){var e=Object(h["a"])(),t=Object(w["a"])(),n=function(){j().then((function(e){r.form.ListenEnable=e.ListenEnable,r.form.ListenPort=e.ListenPort,r.form.BufferSize=e.BufferSize,r.form.ConnectEnable=e.ConnectEnable,r.form.LanConnectEnable=e.LanConnectEnable,r.form.IsCustomPac=e.IsCustomPac,r.form.IsPac=e.IsPac,r.form.TunnelType=e.TunnelType.toString(),r.form.TargetName=e.TargetName}))},c=function(){V().then((function(e){r.pac=e}))},o=function(){C({IsCustom:r.form.IsCustomPac,Pac:r.pac}).then((function(){}))};Object(N["rb"])((function(){n(),c()}));var a=Object(m["c"])((function(){return[{Name:"",label:"服务器"}].concat(e.clients.map((function(e){return{Name:e.Name,label:e.Name}})))})),r=Object(m["p"])({loading:!1,pac:"",form:{ListenEnable:!1,ListenPort:5412,ConnectEnable:!1,LanConnectEnable:!1,IsPac:!1,IsCustomPac:!1,BufferSize:8192,TunnelType:"8",TargetName:""},rules:{ListenPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}],BufferSize:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:1048576,message:"数字 1-1048576",trigger:"blur",transform:function(e){return Number(e)}}]}}),l=Object(m["r"])(null),u=function(){l.value.validate((function(e){if(!e)return!1;r.loading=!0;var t=JSON.parse(JSON.stringify(r.form));t.ListenPort=Number(t.ListenPort),t.BufferSize=Number(t.BufferSize),t.TunnelType=Number(t.TunnelType),p(t).then((function(){r.loading=!1,t.IsPac&&o(),x["a"].success("操作成功！")})).catch((function(e){r.loading=!1}))}))};return{targets:a,shareData:t,state:r,formDom:l,handleSubmit:u}}},k=(n("e05b"),n("6b0d")),v=n.n(k);const E=v()(_,[["render",f],["__scopeId","data-v-703df749"]]);t["default"]=E},e05b:function(e,t,n){"use strict";n("2740")}}]);