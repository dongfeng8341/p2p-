(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39ef0701"],{"02ea":function(e,t,n){},"4f2a":function(e,t,n){},"89e5":function(e,t,n){"use strict";n.r(t);var c=n("7a23");function o(e,t,n,o,a,r){var l=Object(c["resolveComponent"])("Share"),i=Object(c["resolveComponent"])("el-tab-pane"),u=Object(c["resolveComponent"])("Connect"),d=Object(c["resolveComponent"])("el-tabs");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createVNode"])(d,{type:"border-card"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(i,{label:"分享"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l)]})),_:1}),Object(c["createVNode"])(i,{label:"连接"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u)]})),_:1})]})),_:1})])}var a=function(e){return Object(c["pushScopeId"])("data-v-d549de30"),e=e(),Object(c["popScopeId"])(),e},r={ref:"playDom",playsinline:"",muted:"",loop:""},l={class:"meta t-c"},i=a((function(){return Object(c["createElementVNode"])("span",{class:"label"},"帧数",-1)})),u=a((function(){return Object(c["createElementVNode"])("span",{class:"label"},"模式",-1)})),d=a((function(){return Object(c["createElementVNode"])("span",{class:"label"},null,-1)})),s=Object(c["createTextVNode"])("结束分享"),f=Object(c["createTextVNode"])("开始分享");function b(e,t,n,o,a,b){var O=Object(c["resolveComponent"])("el-input"),p=Object(c["resolveComponent"])("el-option"),j=Object(c["resolveComponent"])("el-select"),m=Object(c["resolveComponent"])("el-button");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createElementVNode"])("video",r,null,512),Object(c["createElementVNode"])("div",l,[i,Object(c["createVNode"])(O,{modelValue:e.frameRate,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.frameRate=t})},null,8,["modelValue"]),u,Object(c["createVNode"])(j,{modelValue:e.hint,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.hint=t}),size:"large"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.hints,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(p,{key:e.value,label:e.text,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"]),d,e.sharing?(Object(c["openBlock"])(),Object(c["createBlock"])(m,{key:0,type:"danger",onClick:o.handleStop},{default:Object(c["withCtx"])((function(){return[s]})),_:1},8,["onClick"])):(Object(c["openBlock"])(),Object(c["createBlock"])(m,{key:1,type:"primary",onClick:o.handleStart},{default:Object(c["withCtx"])((function(){return[f]})),_:1},8,["onClick"]))])],64)}var O=n("5530"),p=(n("a9e3"),n("d3b7"),n("159b"),n("e9c4"),n("a1e9")),j=n("5c40"),m=n("97af"),h=function(e){return Object(m["c"])("webrtc/execute",e)},v=function(e){return h({toid:e,data:JSON.stringify({type:"share/start"})})},g=function(e,t){return h({toid:e,data:JSON.stringify({type:"share/candidate",data:t})})},y=function(e,t){return h({toid:e,data:JSON.stringify({type:"share/desc",data:t})})},C=function(e){return h({toid:e,data:JSON.stringify({type:"connect/create"})})},k=function(e,t){return h({toid:e,data:JSON.stringify({type:"connect/candidate",data:t})})},N=function(e,t){return h({toid:e,data:JSON.stringify({type:"connect/desc",data:t})})},S=function(e,t){return h({toid:e,data:JSON.stringify({type:"connect/error",data:t})})},w={setup:function(e,t){t.emit;var n=Object(p["p"])({hints:[{text:"流畅度",value:"motion"},{text:"清晰度",value:"text"}],hint:"text",sharing:!1,frameRate:60}),c=Object(p["r"])(null),o=Object(p["r"])(null),a=null,r={video:{width:{max:1920},height:{max:1080},frameRate:{ideal:60}}},l=function(e,t){var n=e.getVideoTracks()[0];"contentHint"in n?(n.contentHint=t,n.contentHint!=t&&console.warn("".concat(t," contentHint 设置失败"))):console.warn("不支持 contentHint")},i=function(){return r.video.frameRate.ideal=Number(n.frameRate),navigator.mediaDevices.getDisplayMedia(r)},u=function(e){c.value.srcObject=e,c.value.play(),n.sharing=!0},d=function(){i().then((function(e){o.value=e,u(e)}))},s=function(){o.value.getTracks().forEach((function(e){e.stop()})),n.sharing=!1},f={"share/start":function(e){if(n.sharing)if(null!=a)S(e.FromId,"占线");else{e.FromId;var t=o.value.clone();l(t,n.hint),a=new RTCPeerConnection({iceServers:[{urls:"stun:stun.voipstunt.com"}]});var c=a.createDataChannel("connectionStateCannel",null);c.onclose=function(){a.close(),a=null},c.onopen=function(){c.send("share hello")},c.onmessage=function(e,t){console.log(e),console.log(t)},a.onicecandidate=function(t){t.candidate&&k(e.FromId,JSON.stringify(t.candidate))},t.getTracks().forEach((function(e){a.addTrack(e,t)})),C(e.FromId).then((function(){a.createOffer().then((function(t){a.setLocalDescription(t).then((function(){return N(e.FromId,JSON.stringify(t))})).catch((function(e){console.log(e)}))}))}))}else S(e.FromId,"未开始分享")},"share/candidate":function(e){a.addIceCandidate(new RTCIceCandidate(JSON.parse(e.Data.data))).catch((function(e){console.log(e)}))},"share/desc":function(e){a.setRemoteDescription(new RTCSessionDescription(JSON.parse(e.Data.data))).catch((function(e){console.log(e)}))}},b=function(e){e=JSON.parse(JSON.stringify(e)),e.Data=JSON.parse(e.Data),f[e.Data.type]&&f[e.Data.type](e)};return Object(j["rb"])((function(){Object(m["d"])("webrtc/execute",b)})),Object(j["wb"])((function(){Object(m["f"])("webrtc/execute",b)})),Object(O["a"])(Object(O["a"])({},Object(p["z"])(n)),{},{playDom:c,handleStart:d,handleStop:s})}},V=(n("f5a8"),n("6b0d")),D=n.n(V);const x=D()(w,[["render",b],["__scopeId","data-v-d549de30"]]);var I=x,J=function(e){return Object(c["pushScopeId"])("data-v-68ce7b15"),e=e(),Object(c["popScopeId"])(),e},B={ref:"playDom",controls:"",playsinline:"",muted:"",loop:""},E={class:"meta t-c"},T=J((function(){return Object(c["createElementVNode"])("span",{class:"label"},"目标客户端",-1)})),_=J((function(){return Object(c["createElementVNode"])("span",{class:"label"},null,-1)})),R=Object(c["createTextVNode"])("关闭连接"),F=Object(c["createTextVNode"])("开始连接");function H(e,t,n,o,a,r){var l=Object(c["resolveComponent"])("el-option"),i=Object(c["resolveComponent"])("el-select"),u=Object(c["resolveComponent"])("el-button");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createElementVNode"])("video",B,null,512),Object(c["createElementVNode"])("div",E,[T,Object(c["createVNode"])(i,{modelValue:e.clientId,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.clientId=t}),placeholder:"选择目标"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(o.clientsState.clients,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:t,label:e.Name,value:e.Id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"]),_,e.connecting?(Object(c["openBlock"])(),Object(c["createBlock"])(u,{key:0,type:"danger",onClick:o.handleStop},{default:Object(c["withCtx"])((function(){return[R]})),_:1},8,["onClick"])):(Object(c["openBlock"])(),Object(c["createBlock"])(u,{key:1,type:"primary",onClick:o.handleStart},{default:Object(c["withCtx"])((function(){return[F]})),_:1},8,["onClick"]))])],64)}var L=n("3ef4"),z=n("3fd2"),P={setup:function(e,t){t.emit;var n=Object(z["a"])(),c=Object(p["p"])({connecting:!1,clientId:0}),o=function(){l&&l.close(),l=null,c.connecting=!1},a=function(){v(c.clientId)},r=Object(p["r"])(null),l=null,i=function(){l=new RTCPeerConnection({iceServers:[{urls:"stun:stun.voipstunt.com"}]});var e=l.createDataChannel("connectionStateCannel",null);e.onclose=function(){l=null,c.connecting=!1},e.onopen=function(){e.send("connect hello")},e.onmessage=function(e,t){console.log(e),console.log(t)},l.onicecandidate=function(e){e.candidate&&g(c.clientId,JSON.stringify(e.candidate))},l.ontrack=function(e){r.value.srcObject!=e.streams[0]&&(r.value.srcObject=e.streams[0],r.value.play()),c.connecting=!0}},u=function(e){l.addIceCandidate(new RTCIceCandidate(JSON.parse(e))).catch((function(e){console.log(e)}))},d=function(e){return new Promise((function(t,n){l.setRemoteDescription(new RTCSessionDescription(JSON.parse(e))).then((function(){l.createAnswer().then((function(e){t(e),setTimeout((function(){l.setLocalDescription(e).then((function(){})).catch((function(e){console.log(e),n(e)}))}),30)}))})).catch((function(e){console.log(e)}))}))},s={"connect/create":function(e){i()},"connect/candidate":function(e){u(e.Data.data)},"connect/desc":function(e){d(e.Data.data).then((function(e){y(c.clientId,JSON.stringify(e))}))},"connect/error":function(e){L["a"].error(e.Data.data)}},f=function(e){e=JSON.parse(JSON.stringify(e)),e.Data=JSON.parse(e.Data),s[e.Data.type]&&s[e.Data.type](e)};return Object(j["rb"])((function(){Object(m["d"])("webrtc/execute",f)})),Object(j["wb"])((function(){Object(m["f"])("webrtc/execute",f)})),Object(O["a"])(Object(O["a"])({},Object(p["z"])(c)),{},{clientsState:n,playDom:r,handleStop:o,handleStart:a})}};n("c5d5");const U=D()(P,[["render",H],["__scopeId","data-v-68ce7b15"]]);var A=U,M={components:{Share:I,Connect:A},setup:function(){return{}}};n("c1a6");const q=D()(M,[["render",o],["__scopeId","data-v-2aea5ef6"]]);t["default"]=q},bd60:function(e,t,n){},c1a6:function(e,t,n){"use strict";n("4f2a")},c5d5:function(e,t,n){"use strict";n("bd60")},f5a8:function(e,t,n){"use strict";n("02ea")}}]);