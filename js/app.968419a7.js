(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function i(e){return u.p+"js/"+({about:"about",config:"config",help:"help"}[e]||e)+"."+{about:"358335cb",config:"66b3fd43",help:"16b65cbd"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1,help:1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",config:"config",help:"help"}[e]||e)+"."+{about:"56595ca9",config:"31d6cfe0",help:"b6cc98c5"}[e]+".css",a=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],b.parentNode.removeChild(b),n(o)},b.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,n[1](d)}a[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/covid-ampel-widget/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var b=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"035c":function(e,t,n){},"06c6":function(e,t,n){"use strict";n("9d46")},"0d30":function(e,t,n){},"0f53":function(e,t,n){"use strict";n("4760")},"2c46":function(e,t,n){"use strict";n("5d60")},"34a8":function(e,t,n){},4760:function(e,t,n){},"48b9":function(e,t,n){},"564b":function(e,t,n){"use strict";n("035c")},"56d7":function(e,t,n){"use strict";n.r(t);n("bca0");var r=n("543e"),c=(n("576f"),n("92e2")),a=(n("cd52"),n("e11d")),o=(n("bf24"),n("44bf")),i=(n("78a2"),n("1437")),u=(n("4826"),n("f9bd")),s=(n("2a53"),n("34e9")),l=(n("3ec1"),n("7744")),d=(n("53e7"),n("a792")),b=(n("94a7"),n("a3f9")),f=(n("7b23"),n("d3d4")),h=(n("2591"),n("3104")),O=(n("da02"),n("6b41")),j=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7a23")),p={id:"view"};function v(e,t,n,r,c,a){var o=Object(j["C"])("router-view"),i=Object(j["C"])("navigation-bar");return Object(j["u"])(),Object(j["d"])("div",p,[Object(j["h"])(o),Object(j["h"])(i)])}var g=Object(j["L"])("data-v-7de12dcc");Object(j["x"])("data-v-7de12dcc");var m=Object(j["g"])("Home"),w=Object(j["g"])("Hilfe"),k=Object(j["g"])("Einstellungen"),y=Object(j["g"])("Mehr");Object(j["v"])();var x=g((function(e,t,n,r,c,a){var o=Object(j["C"])("traffic-lights"),i=Object(j["C"])("van-action-bar-icon"),u=Object(j["C"])("help"),s=Object(j["C"])("settings"),l=Object(j["C"])("more"),d=Object(j["C"])("van-action-bar"),b=Object(j["C"])("van-sticky");return Object(j["u"])(),Object(j["d"])(b,null,{default:g((function(){return[Object(j["h"])(d,null,{default:g((function(){return[Object(j["h"])(i,{to:a.home},{default:g((function(){return[Object(j["B"])(e.$slots,"icon",{},(function(){return[Object(j["h"])(o)]})),Object(j["B"])(e.$slots,"default",{},(function(){return[m]}))]})),_:3},8,["to"]),Object(j["h"])(i,{to:"/help"},{default:g((function(){return[Object(j["B"])(e.$slots,"icon",{},(function(){return[Object(j["h"])(u)]})),Object(j["B"])(e.$slots,"default",{},(function(){return[w]}))]})),_:3}),Object(j["h"])(i,{to:"/config"},{default:g((function(){return[Object(j["B"])(e.$slots,"icon",{},(function(){return[Object(j["h"])(s)]})),Object(j["B"])(e.$slots,"default",{},(function(){return[k]}))]})),_:3}),Object(j["h"])(i,{to:"/more"},{default:g((function(){return[Object(j["B"])(e.$slots,"icon",{},(function(){return[Object(j["h"])(l)]})),Object(j["B"])(e.$slots,"default",{},(function(){return[y]}))]})),_:3})]})),_:1})]})),_:1})})),_=Object(j["L"])("data-v-d9ffc5de");Object(j["x"])("data-v-d9ffc5de");var C={xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-traffic-lights",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},I=Object(j["h"])("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1),B=Object(j["h"])("rect",{x:"7",y:"2",width:"10",height:"20",rx:"5"},null,-1),E=Object(j["h"])("circle",{cx:"12",cy:"7",r:"1"},null,-1),D=Object(j["h"])("circle",{cx:"12",cy:"12",r:"1"},null,-1),S=Object(j["h"])("circle",{cx:"12",cy:"17",r:"1"},null,-1);Object(j["v"])();var L=_((function(e,t,n,r,c,a){return Object(j["u"])(),Object(j["d"])("svg",C,[I,B,E,D,S])})),z={};n("2c46");z.render=L,z.__scopeId="data-v-d9ffc5de";var T=z,F=Object(j["L"])("data-v-99508752");Object(j["x"])("data-v-99508752");var M={xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-settings",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},R=Object(j["h"])("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1),A=Object(j["h"])("path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"},null,-1),N=Object(j["h"])("circle",{cx:"12",cy:"12",r:"3"},null,-1);Object(j["v"])();var P=F((function(e,t,n,r,c,a){return Object(j["u"])(),Object(j["d"])("svg",M,[R,A,N])}));n("81e3");const G={};G.render=P,G.__scopeId="data-v-99508752";var H=G,Z=Object(j["L"])("data-v-916c9af2");Object(j["x"])("data-v-916c9af2");var J={xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-help",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},q=Object(j["h"])("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1),K=Object(j["h"])("circle",{cx:"12",cy:"12",r:"9"},null,-1),$=Object(j["h"])("line",{x1:"12",y1:"17",x2:"12",y2:"17.01"},null,-1),W=Object(j["h"])("path",{d:"M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"},null,-1);Object(j["v"])();var U=Z((function(e,t,n,r,c,a){return Object(j["u"])(),Object(j["d"])("svg",J,[q,K,$,W])})),V={};n("06c6");V.render=U,V.__scopeId="data-v-916c9af2";var Q=V,X=Object(j["L"])("data-v-c9754988");Object(j["x"])("data-v-c9754988");var Y={class:"icon icon-tabler icon-tabler-more",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},ee=Object(j["h"])("circle",{cx:"12",cy:"12",r:"1"},null,-1),te=Object(j["h"])("circle",{cx:"12",cy:"19",r:"1"},null,-1),ne=Object(j["h"])("circle",{cx:"12",cy:"5",r:"1"},null,-1);Object(j["v"])();var re=X((function(e,t,n,r,c,a){return Object(j["u"])(),Object(j["d"])("svg",Y,[ee,te,ne])}));n("ddb8");const ce={};ce.render=re,ce.__scopeId="data-v-c9754988";var ae=ce,oe={name:"NavigationBar",components:{TrafficLights:T,Settings:H,Help:Q,More:ae},computed:{home:function(){var e="/",t=localStorage.getItem("landkreis");return e=null===t?"/config":"/lkr/"+t,e}}};n("0f53");oe.render=x,oe.__scopeId="data-v-7de12dcc";var ie=oe,ue={components:{NavigationBar:ie},data:function(){return{showIntro:!1}}};n("9cdc");ue.render=v;var se=ue,le=(n("d3b7"),n("6c02"));function de(e,t,n,r,c,a){var o=Object(j["C"])("widget"),i=Object(j["C"])("config");return null!=c.selected?(Object(j["u"])(),Object(j["d"])(o,{key:0,objectId:c.selected},null,8,["objectId"])):(Object(j["u"])(),Object(j["d"])(i,{key:1}))}var be=n("6131"),fe=n.n(be),he=Object(j["L"])("data-v-d5f7798e");Object(j["x"])("data-v-d5f7798e");var Oe={class:"widget"},je={key:0},pe={key:1},ve={class:"bez"},ge={class:"bez-short"},me={class:"ort"},we={class:"cases"},ke=Object(j["h"])("img",{src:fe.a,class:"ampel"},null,-1),ye={class:"info"},xe=Object(j["h"])("small",null,[Object(j["h"])("span",{class:"inzidenz-short"},"Inzidenz"),Object(j["h"])("span",{class:"inzidenz-detailled"}," Fälle der letzten 7 Tage pro 100.000 Einwohner ")],-1),_e=Object(j["h"])("br",null,null,-1),Ce={class:"time"},Ie=Object(j["h"])("span",{class:"label"},"Stand: ",-1),Be={class:"data"},Ee={class:"source"},De=Object(j["g"])(", "),Se=Object(j["h"])("span",{class:"label"},"Datenquelle: ",-1),Le={class:"data"};Object(j["v"])();var ze=he((function(e,t,n,r,c,a){var o=Object(j["C"])("indicator-eq"),i=Object(j["C"])("indicator-inc"),u=Object(j["C"])("indicator-dec");return Object(j["u"])(),Object(j["d"])("div",Oe,[c.loading?(Object(j["u"])(),Object(j["d"])("div",je," Daten werden geladen ... ")):Object(j["e"])("",!0),c.error?(Object(j["u"])(),Object(j["d"])("div",pe,Object(j["F"])(c.error),1)):Object(j["e"])("",!0),c.data?(Object(j["u"])(),Object(j["d"])("div",{key:2,class:a.color(c.data.cases7_per_100k),"object-id":c.data.OBJECTID},[Object(j["h"])("h3",null,[Object(j["h"])("span",ve,Object(j["F"])(c.data.BEZ)+" ",1),Object(j["h"])("span",ge,Object(j["F"])(a.getBezShort(c.data.IBZ))+" ",1),Object(j["h"])("span",me,Object(j["F"])(c.data.GEN),1)]),Object(j["h"])("p",we,[ke,Object(j["g"])(" "+Object(j["F"])(a.rounded(c.data.cases7_per_100k))+" ",1),0===c.indicator?(Object(j["u"])(),Object(j["d"])(o,{key:0})):Object(j["e"])("",!0),1===c.indicator?(Object(j["u"])(),Object(j["d"])(i,{key:1})):Object(j["e"])("",!0),-1===c.indicator?(Object(j["u"])(),Object(j["d"])(u,{key:2})):Object(j["e"])("",!0)]),Object(j["h"])("div",ye,[xe,_e,Object(j["h"])("small",null,[Object(j["h"])("span",Ce,[Ie,Object(j["h"])("span",Be,Object(j["F"])(a.formatDate(c.data.last_update)),1)]),Object(j["h"])("span",Ee,[De,Se,Object(j["h"])("span",Le,[Object(j["h"])("a",{class:a.color(c.data.cases7_per_100k),target:"_blank",href:"https://experience.arcgis.com/experience/478220a4c454480e823b17327b2bf1d4/page/page_1/"},"RKI",2)])])])])],10,["object-id"])):Object(j["e"])("",!0)])})),Te=(n("a9e3"),n("b680"),n("ac1f"),n("96cf"),n("1da1")),Fe=n("bc3a"),Me=n.n(Fe),Re=n("d4ec"),Ae=n("bee2"),Ne=n("4dec"),Pe=new Ne["a"]("inzidenz"),Ge=function(){function e(){Object(Re["a"])(this,e),Pe.version(1).stores({inzidenz:"id,OBJECTID,last_update,cases7_per_100k,EWZ,BEZ,GEN,[OBJECTID+last_update]"})}return Object(Ae["a"])(e,[{key:"add",value:function(e){Pe.inzidenz.put(e,e.id)}},{key:"getData",value:function(){var e=Object(Te["a"])(regeneratorRuntime.mark((function e(t,n){var r,c,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new Date,r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0),c=new Date(r.setDate(r.getDate()+n)),e.next=8,Pe.inzidenz.where({OBJECTID:t,last_update:c.getTime()}).first().catch((function(e){console.error(e.stack||e)}));case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}(),He=new Ge,Ze=Object(j["L"])("data-v-b9f307cc");Object(j["x"])("data-v-b9f307cc");var Je={xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-arrow-up-right",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},qe=Object(j["h"])("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1),Ke=Object(j["h"])("line",{x1:"17",y1:"7",x2:"7",y2:"17"},null,-1),$e=Object(j["h"])("polyline",{points:"8 7 17 7 17 16"},null,-1);Object(j["v"])();var We=Ze((function(e,t,n,r,c,a){return Object(j["u"])(),Object(j["d"])("svg",Je,[qe,Ke,$e])}));n("a246");const Ue={};Ue.render=We,Ue.__scopeId="data-v-b9f307cc";var Ve=Ue,Qe=Object(j["L"])("data-v-49bc0bfa");Object(j["x"])("data-v-49bc0bfa");var Xe={xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-arrow-down-right",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},Ye=Object(j["h"])("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1),et=Object(j["h"])("line",{x1:"7",y1:"7",x2:"17",y2:"17"},null,-1),tt=Object(j["h"])("polyline",{points:"17 8 17 17 8 17"},null,-1);Object(j["v"])();var nt=Qe((function(e,t,n,r,c,a){return Object(j["u"])(),Object(j["d"])("svg",Xe,[Ye,et,tt])}));n("bfd4");const rt={};rt.render=nt,rt.__scopeId="data-v-49bc0bfa";var ct=rt,at=Object(j["L"])("data-v-3283bde8");Object(j["x"])("data-v-3283bde8");var ot={xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-arrow-right",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},it=Object(j["h"])("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1),ut=Object(j["h"])("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1),st=Object(j["h"])("line",{x1:"13",y1:"18",x2:"19",y2:"12"},null,-1),lt=Object(j["h"])("line",{x1:"13",y1:"6",x2:"19",y2:"12"},null,-1);Object(j["v"])();var dt=at((function(e,t,n,r,c,a){return Object(j["u"])(),Object(j["d"])("svg",ot,[it,ut,st,lt])}));n("ba96");const bt={};bt.render=dt,bt.__scopeId="data-v-3283bde8";var ft=bt,ht={name:"Widget",components:{IndicatorInc:Ve,IndicatorDec:ct,IndicatorEq:ft},props:{objectId:{type:String,required:!0}},data:function(){return{loading:!0,error:!1,data:null,indicator:null}},mounted:function(){var e=this;this.getData().then((function(t){e.data=t,t&&(t.last_update=e.getTimestamp(t.last_update),t.id=t.OBJECTID+"-"+e.formatDate(t.last_update),He.add(t),e.getIndicator(e.data)),e.loaded=!0}))},methods:{getData:function(){var e=this;return Object(Te["a"])(regeneratorRuntime.mark((function t(){var n,r,c,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=OBJECTID in ("+e.objectId+")&outFields=objectId,last_update,cases7_per_100k,EWZ,BEZ,GEN,IBZ&returnGeometry=false&f=json",r=Me.a.create({baseURL:n,timeout:1e4,headers:{"Content-Type":"application/json"}}),t.next=4,r.get();case 4:return c=t.sent,c.error?(console.error(c.error),e.error="Fehler beim Laden der Daten vom RKI-Server"):(console.log(c),e.loading=!1),a=c.data.features[0].attributes,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})))()},color:function(e){var t="";return e<35?t="widget-green":e>=35&&e<50?t="widget-yellow":e>=50&&e<100?t="widget-red":e>=100&&(t="widget-darkred"),t},rounded:function(e){return Number(e.toFixed(1))},getTimestamp:function(e){var t=/([\d]+)\.([\d]+)\.([\d]+), ([0-2]?[0-9]):([0-5][0-9])/g,n=t.exec(e);return new Date(n[3],n[2]-1,n[1],n[4],n[5]).getTime()},formatDate:function(e){var t=new Date(e);return t.toLocaleDateString("de-DE")},getIndicator:function(e){var t=this;He.getData(e.OBJECTID,-1).then((function(n){var r;return r=n?e.cases7_per_100k<n.cases7_per_100k?-1:e.cases7_per_100k>n.cases7_per_100k?1:0:null,t.indicator=r,r}))},getBezShort:function(e){switch(e){case 40:return"KS";case 41:return"SK";case 42:case 46:return"K";case 43:case 45:return"LK";default:return"BZ"}}}};n("564b");ht.render=ze,ht.__scopeId="data-v-d5f7798e";var Ot=ht,jt=n("57e3"),pt={name:"Home",metaInfo:{title:"Covid-19 Ampel-Widget",meta:[{vmid:"description",name:"description",content:"Das Covid-19 Ampel-Widget für iOS und Android. Behalte den Inzidenzwert deines Landkreises im Blick."}]},props:["id"],components:{Widget:Ot,Config:jt["a"]},data:function(){return{selected:null}},mounted:function(){this.id?(this.selected=this.id,localStorage.setItem("landkreis",this.selected)):this.selected=localStorage.getItem("landkreis"),this.selected&&this.$router.push("/lkr/"+this.selected)}};pt.render=de;var vt=pt,gt=[{path:"/",component:vt},{path:"/lkr/:id",component:vt,props:!0},{path:"/config",component:function(){return n.e("config").then(n.bind(null,"1071"))}},{path:"/help",component:function(){return n.e("help").then(n.bind(null,"c3ef"))}},{path:"/more",component:function(){return n.e("about").then(n.bind(null,"5dde"))}},{path:"/about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/imprint",component:function(){return n.e("about").then(n.bind(null,"5a7f"))}},{path:"/privacy",component:function(){return n.e("about").then(n.bind(null,"6f9f"))}},{path:"/:pathMatch(.*)",component:vt}],mt="/covid-ampel-widget/",wt=Object(le["a"])({history:Object(le["b"])(mt),routes:gt}),kt=wt,yt=(n("157a"),Object(j["c"])(se));yt.use(kt),yt.use(O["a"]),yt.use(h["a"]),yt.use(f["b"]),yt.use(b["a"]),yt.use(d["a"]),yt.use(l["b"]),yt.use(s["a"]),yt.use(u["b"]),yt.use(i["a"]),yt.use(o["a"]),yt.use(a["b"]),yt.use(c["a"]),yt.use(r["a"]),yt.mount("#app")},"57e3":function(e,t,n){"use strict";var r=n("7a23"),c={id:"config"},a=Object(r["h"])("p",null," Wählen sie bitte den gewünschten Landkreis aus: ",-1),o=Object(r["h"])("p",null," Diese Einstellung wird nur lokal im Browser gespeichert. ",-1);function i(e,t,n,i,u,s){var l=Object(r["C"])("landkreise");return Object(r["u"])(),Object(r["d"])("div",c,[a,o,Object(r["h"])(l)])}var u=Object(r["L"])("data-v-797c94f4");Object(r["x"])("data-v-797c94f4");var s=Object(r["g"])(" Lade ... ");Object(r["v"])();var l=u((function(e,t,n,c,a,o){var i=Object(r["C"])("van-loading"),l=Object(r["C"])("van-index-anchor"),d=Object(r["C"])("van-cell"),b=Object(r["C"])("van-index-bar");return Object(r["u"])(),Object(r["d"])("div",null,[a.isLoading?(Object(r["u"])(),Object(r["d"])(i,{key:0,size:"24px",color:"#1989fa",vertical:""},{default:u((function(){return[s]})),_:1})):Object(r["e"])("",!0),Object(r["h"])(b,{onSelect:o.onChange},{default:u((function(){return[(Object(r["u"])(!0),Object(r["d"])(r["a"],null,Object(r["A"])(a.data,(function(e){return Object(r["u"])(),Object(r["d"])("span",{key:e.OBJECTID},[e.index?(Object(r["u"])(),Object(r["d"])(l,{key:0,index:e.label},null,8,["index"])):(Object(r["u"])(),Object(r["d"])(d,{key:1,clickable:"","is-link":"",icon:"location-o",to:"/lkr/"+e.OBJECTID},{default:u((function(){return[Object(r["h"])("h4",null,Object(r["F"])(e.GEN),1),Object(r["h"])("p",null,Object(r["F"])(e.BEZ),1)]})),_:2},1032,["to"]))])})),128))]})),_:1},8,["onSelect"])])})),d=(n("4160"),n("159b"),n("96cf"),n("1da1")),b=n("bc3a"),f=n.n(b),h={name:"Landkreise",data:function(){return{isLoading:!1,data:[]}},created:function(){var e=this;this.getData().then((function(t){e.data=[];var n=null;t.forEach((function(t){t.attributes.GEN.charAt(0)!==n&&(n=t.attributes.GEN.charAt(0),e.data.push({OBJECTID:n,index:!0,label:n})),e.data.push(t.attributes)})),e.selectedValue=localStorage.getItem("landkreis")}))},methods:{getData:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,n="https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&units=esriSRUnit_Meter&returnGeodetic=false&outFields=objectId%2CBEZ%2CGEN&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=true&cacheHint=false&orderByFields=GEN&resultRecordCount=1000&returnZ=false&returnM=false&returnExceededLimitFeatures=false&quantizationParameters=&sqlFormat=none&f=pjson",r=f.a.create({baseURL:n,timeout:1e4,headers:{"Content-Type":"application/json"}}),t.next=5,r.get();case 5:return c=t.sent,c.error&&console.error(c.error),e.isLoading=!1,t.abrupt("return",c.data.features);case 9:case"end":return t.stop()}}),t)})))()},onChange:function(e){localStorage.setItem("landkreis",e)}}};n("7d4e");h.render=l,h.__scopeId="data-v-797c94f4";var O=h,j={name:"Config",components:{Landkreise:O}};j.render=i;t["a"]=j},"5d60":function(e,t,n){},6131:function(e,t,n){e.exports=n.p+"img/coronaampel.3fd2db0c.png"},"6dd8":function(e,t,n){},"7d4e":function(e,t,n){"use strict";n("0d30")},"81e3":function(e,t,n){"use strict";n("48b9")},"9cdc":function(e,t,n){"use strict";n("c701")},"9d46":function(e,t,n){},a246:function(e,t,n){"use strict";n("f0ec")},ba96:function(e,t,n){"use strict";n("c65e")},bfd4:function(e,t,n){"use strict";n("6dd8")},c65e:function(e,t,n){},c701:function(e,t,n){},ddb8:function(e,t,n){"use strict";n("34a8")},f0ec:function(e,t,n){}});
//# sourceMappingURL=app.968419a7.js.map