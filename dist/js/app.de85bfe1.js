(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},r=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4c89cc5a"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=o);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}a[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("1356"),a=n.n(o);a.a},1:function(t,e){},1356:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"app-container"}},[o("v-content",{attrs:{id:"v-content"},on:{mousemove:t.enablePlayback}},[o("v-text-field",{staticStyle:{color:"white"},attrs:{autofocus:!0,placeholder:"Room Key",label:"Connect",outlined:"",rounded:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.checkstream(e)}},model:{value:t.room,callback:function(e){t.room=e},expression:"room"}}),o("v-btn",{attrs:{id:"connect-btn",rounded:""},on:{click:t.checkstream}},[t._v("Toonin")]),o("br"),o("br"),o("v-btn",{ref:"playBtn",staticStyle:{"margin-left":"2%"},attrs:{hidden:"",rounded:""},on:{click:t.manualPlay}},[t._v("Play")]),o("div",{staticStyle:{float:"left","margin-top":"2%","margin-right":"0%"},attrs:{id:"timeline-container"}},[o("a",{attrs:{id:"timelineHeader"}},[t._v("Status")]),o("v-timeline",[o("v-timeline-item",{attrs:{color:""!=t.room?"#4CAF50":"#F44336","fill-dot":""}},[o("v-card",{staticClass:"statusCard",staticStyle:{width:"250px"}},[o("a",{staticClass:"statusCardRightText"},[t._v("Waiting")])])],1),o("v-timeline-item",{attrs:{color:t.roomFound?"#4CAF50":"#F44336","fill-dot":""}},[o("v-card",{staticClass:"statusCard"},[o("a",{staticClass:"statusCardLeftText"},[t._v("Room found")])])],1),o("v-timeline-item",{attrs:{color:t.established?"#4CAF50":"#F44336","fill-dot":""}},[o("v-card",{staticClass:"statusCard"},[o("a",{staticClass:"statusCardRightText"},[t._v("Connected")])])],1),o("v-timeline-item",{attrs:{color:t.isPlaying?"#4CAF50":"#F44336","fill-dot":""}},[o("v-card",{staticClass:"statusCard"},[o("a",{staticClass:"statusCardLeftText"},[t._v("Playing")])])],1)],1)],1),o("div",[o("audio",{ref:"audio"})]),o("img",{attrs:{src:n("bfc1"),id:"logo"}})],1)],1)},r=[],i=n("8055"),s=n.n(i);const c="http://www.toonin.ml:8100/",l={iceServers:[{urls:["stun:stun.l.google.com:19302","stun:stun2.l.google.com:19302","stun:stun3.l.google.com:19302","stun:stun4.l.google.com:19302"]}]};var d,u,f=s()(c),m=null,h=null;function p(t,e,n){u=n,d=e,h=t,window.onbeforeunload=t=>{v()};var o=window.location.pathname;"/"!==o&&w(null,o.substr(1,o.length)),_=_.bind(this),j=j.bind(this)}function v(){f.emit("logoff",{from:f.id,to:h.room})}function y(t){for(var e=Object.keys(t),n=0;n<e.length;n++)e[n]in h&&(h[e[n]]=t[e[n]])}function g(){this.$refs.audio.muted=!1}function b(){C("user played manually"),d.srcObject=m,d.play(),y({isPlaying:d.srcObject.active})}function C(t){console.log(t)}function w(){fetch(c+h.room).then(t=>t.json()).then(t=>x(t)).catch(t=>C(t))}function x(t){if("SUCCESS"===t){y({roomFound:!0}),C("Active session with ID: "+h.room+" found!"),f.emit("new peer",h.room),_(f);const t=new RTCPeerConnection(l);t.onicecandidate=t=>{t.candidate?f.emit("peer new ice",{id:f.id,room:h.room,candidate:t.candidate}):C("No candidate for RTC connection")},t.onconnectionstatechange=function(){"connected"===t.connectionState&&y({established:!0}),"disconnected"!=t.connectionState&&"failed"!=t.connectionState||y({established:!1,isPlaying:!1})},t.onaddstream=t=>{C("Stream added"),C(t.stream),d.srcObject=t.stream,console.log(d),d.oncanplay=()=>{d.play().catch(t=>{C(t)}),d.onplay=()=>{y({established:!0,isPlaying:d.srcObject.active})}}},t.ontrack=t=>{C("track added"),m=new MediaStream([t.track]);try{d.srcObject=m,d.play(),d.onplay=()=>{y({established:!0,isPlaying:d.srcObject.active,stream:m})}}catch(e){u.$refs.link.hidden=!1}},y({rtcConn:t,peerID:f.id})}else y({room:"",established:!1})}function _(t){t.on("src ice",e=>{C(`Received new ICE Candidate from src for peer: ${e.id} in room: ${e.room}`),C(`I have id: ${t.id} and room: ${h.room}`),e.room===h.room&&e.id===t.id?h.rtcConn.addIceCandidate(new RTCIceCandidate(e.candidate)).then(C("Ice Candidate added successfully")).catch(t=>C(`ERROR on addIceCandidate: ${t}`)):C("ICE Candidate not for me")}),t.on("src desc",e=>{C(`Received description from src for peer: ${e.id} in room: ${e.room}`),C(`I have id: ${t.id} and room: ${h.room}`),e.room===h.room&&e.id===t.id?h.rtcConn.setRemoteDescription(new RTCSessionDescription(e.desc)).then(()=>{C("Setting remote description success"),j(e.desc)}):C("ICE Candidate not for me")})}function j(t){const e=h.room;h.rtcConn.createAnswer().then(t=>{C("Answer created"),h.rtcConn.setLocalDescription(new RTCSessionDescription(t)).then((function(){C("Local description from answer set"),f.emit("peer new desc",{id:f.id,room:e,desc:t})}))})}var k={name:"App",data:()=>({room:"",established:!1,roomFound:!1,peerID:"",rtcConn:null,isPlaying:!1,stream:null}),methods:{logMessage:C,checkstream:w,enablePlayback:g,manualPlay:b},mounted:function(){p(this,this.$refs.audio,this.$refs.playBtn)}},I=k,S=(n("034f"),n("2877")),$=n("6544"),O=n.n($),R=n("7496"),P=n("8336"),T=n("b0af"),E=n("a75b"),M=n("8654"),D=n("8414"),F=n("1e06"),V=Object(S["a"])(I,a,r,!1,null,null,null),A=V.exports;O()(V,{VApp:R["a"],VBtn:P["a"],VCard:T["a"],VContent:E["a"],VTextField:M["a"],VTimeline:D["a"],VTimelineItem:F["a"]});var L=n("8c4f"),W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("HelloWorld")},q=[],B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-layout",{attrs:{"text-center":"",wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),o("v-flex",{attrs:{"mb-4":""}},[o("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),o("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),o("br"),t._v("please join our online\n        "),o("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),o("v-flex",{attrs:{"mb-5":"",xs12:""}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),o("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,(function(e,n){return o("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1),o("v-flex",{attrs:{xs12:"","mb-5":""}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),o("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,(function(e,n){return o("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1),o("v-flex",{attrs:{xs12:"","mb-5":""}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),o("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,(function(e,n){return o("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1)],1)],1)},H=[],N={data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},J=N,K=n("a523"),Q=n("0e8f"),U=n("adda"),z=n("a722"),G=Object(S["a"])(J,B,H,!1,null,null,null),X=G.exports;O()(G,{VContainer:K["a"],VFlex:Q["a"],VImg:U["a"],VLayout:z["a"]});var Y={components:{HelloWorld:X}},Z=Y,tt=Object(S["a"])(Z,W,q,!1,null,null,null),et=tt.exports;o["a"].use(L["a"]);var nt=new L["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:et},{path:"/about",name:"about",component:()=>n.e("about").then(n.bind(null,"f820"))}]}),ot=n("2f62");const at=s()("http://www.toonin.ml:8100");at.on("src ice",t=>{logMessage(`Received new ICE Candidate from src for peer: ${t.id} in room: ${t.room}`),logMessage(`I have id: ${at.id} and room: ${(void 0).state.roomID}`),t.room===(void 0).state.roomID&&t.id===at.id?(void 0).state.rtcConn.addIceCandidate(new RTCIceCandidate(t.candidate)).then(logMessage("Ice Candidate added successfully")).catch(t=>logMessage(`ERROR on addIceCandidate: ${t}`)):logMessage("ICE Candidate not for me")}),at.on("src desc",t=>{logMessage(`Received description from src for peer: ${t.id} in room: ${t.room}`),logMessage(`I have id: ${at.id} and room: ${(void 0).state.roomID}`),t.room===(void 0).state.roomID&&t.id===at.id?(void 0).state.rtcConn.setRemoteDescription(new RTCSessionDescription(t.desc)).then(()=>{logMessage("Setting remote description success"),(void 0).createAnswer(t.desc)}):logMessage("ICE Candidate not for me")}),o["a"].use(ot["a"]);var rt=new ot["a"].Store({state:{},mutations:{},actions:{}}),it=n("f309");o["a"].use(it["a"]);var st=new it["a"]({icons:{iconfont:"fa"}});o["a"].config.productionTip=!1,new o["a"]({router:nt,store:rt,vuetify:st,render:t=>t(A)}).$mount("#app")},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},bfc1:function(t,e,n){t.exports=n.p+"img/icon.1085cc22.png"}});
//# sourceMappingURL=app.de85bfe1.js.map