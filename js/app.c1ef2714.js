(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({about:"about",config:"config"}[e]||e)+"."+{about:"87c0a724",config:"df9199c1"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",config:"config"}[e]||e)+"."+{about:"1a774888",config:"31d6cfe0"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/covid-ampel-widget/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4fdf":function(e,t,n){"use strict";n("e436")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"view"},o={key:0},c=Object(r["h"])("🚦"),i=Object(r["h"])(" | "),u=Object(r["h"])("Impressum"),s=Object(r["h"])(" | "),l=Object(r["h"])("Datenschutz"),d=Object(r["h"])(" | "),f=Object(r["h"])("Über"),b=Object(r["h"])(" | "),p=Object(r["h"])("Einstellungen");function h(e,t,n,h,m,O){var j=Object(r["y"])("router-view"),g=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["e"])("div",a,[Object(r["i"])(j),Object(r["i"])(r["b"],{name:"fade"},{default:Object(r["F"])((function(){return[m.showNavigation?(Object(r["r"])(),Object(r["e"])("nav",o,[Object(r["i"])(g,{to:O.home},{default:Object(r["F"])((function(){return[c]})),_:1},8,["to"]),i,Object(r["i"])(g,{to:"/imprint"},{default:Object(r["F"])((function(){return[u]})),_:1}),s,Object(r["i"])(g,{to:"/privacy"},{default:Object(r["F"])((function(){return[l]})),_:1}),d,Object(r["i"])(g,{to:"/about"},{default:Object(r["F"])((function(){return[f]})),_:1}),b,Object(r["i"])(g,{to:"/config"},{default:Object(r["F"])((function(){return[p]})),_:1})])):Object(r["f"])("",!0)]})),_:1})])}var m={data:function(){return{showNavigation:!1}},computed:{home:function(){var e="/",t=localStorage.getItem("landkreis");return e=null===t?"/config":"/lkr/"+t,e}},mounted:function(){window.addEventListener("scroll",this.onScroll),document.addEventListener("touchmove",this.onScroll),document.addEventListener("mousemove",this.onScroll)},beforeUnmount:function(){window.removeEventListener("scroll",this.onScroll),document.removeEventListener("touchmove",this.onScroll),document.removeEventListener("mousemove",this.onScroll)},methods:{onScroll:function(){var e=this;this.showNavigation=!0,setTimeout((function(){return e.showNavigation=!1}),5e3)}}};n("64be");m.render=h;var O=m,j=(n("d3b7"),n("6c02"));function g(e,t,n,a,o,c){var i=Object(r["y"])("widget"),u=Object(r["y"])("config");return null!=o.selected?(Object(r["r"])(),Object(r["e"])(i,{key:0,objectId:o.selected},null,8,["objectId"])):(Object(r["r"])(),Object(r["e"])(u,{key:1}))}var v=n("6131"),y=n.n(v),w=Object(r["H"])("data-v-ce49ecca");Object(r["u"])("data-v-ce49ecca");var k={class:"widget"},_={key:0},E={key:1},S={class:"cases"},I=Object(r["i"])("img",{src:y.a,class:"ampel"},null,-1),C={class:"info"},x=Object(r["i"])("small",null," Fälle der letzten 7 Tage pro 100.000 Einwohner ",-1),L=Object(r["i"])("br",null,null,-1);Object(r["s"])();var A=w((function(e,t,n,a,o,c){return Object(r["r"])(),Object(r["e"])("div",k,[o.loading?(Object(r["r"])(),Object(r["e"])("div",_,"Daten werden geladen ...")):Object(r["f"])("",!0),o.error?(Object(r["r"])(),Object(r["e"])("div",E,Object(r["A"])(this.error))):Object(r["f"])("",!0),(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(o.data,(function(e,t){return Object(r["r"])(),Object(r["e"])("div",{class:c.color(e.attributes.cases7_per_100k),key:e.attributes.OBJECTID,name:t,"object-id":e.attributes.OBJECTID},[Object(r["i"])("h3",null,Object(r["A"])(e.attributes.BEZ)+" "+Object(r["A"])(e.attributes.GEN),1),Object(r["i"])("p",S,[I,Object(r["h"])(" "+Object(r["A"])(c.rounded(e.attributes.cases7_per_100k)),1)]),Object(r["i"])("div",C,[x,L,Object(r["i"])("small",null,[Object(r["h"])(" Stand: "+Object(r["A"])(e.attributes.last_update)+", Datenquelle: ",1),Object(r["i"])("a",{class:c.color(e.attributes.cases7_per_100k),target:"_blank",href:"https://experience.arcgis.com/experience/478220a4c454480e823b17327b2bf1d4/page/page_1/"},"RKI",2)])])],10,["name","object-id"])})),128))])})),B=(n("a9e3"),n("b680"),n("96cf"),n("1da1")),D=n("bc3a"),F=n.n(D),T={name:"Widget",props:{objectId:{type:String,required:!0}},data:function(){return{loading:!0,error:!1,data:null}},created:function(){var e=this;this.getData().then((function(t){e.data=t,e.loaded=!0}))},methods:{getData:function(){var e=this;return Object(B["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=OBJECTID in ("+e.objectId+")&outFields=objectId,death_rate,cases,deaths,cases_per_100k,cases_per_population,last_update,cases7_per_100k,EWZ,BEZ,GEN&returnGeometry=false&f=json",r=F.a.create({baseURL:n,timeout:1e4,headers:{"Content-Type":"application/json"}}),t.next=4,r.get();case 4:return a=t.sent,a.error?(console.error(a.error),e.error="Fehler beim Laden der Daten vom RKI-Server"):e.loading=!1,t.abrupt("return",a.data.features);case 7:case"end":return t.stop()}}),t)})))()},color:function(e){var t="";return e<35?t="widget-green":e>=35&&e<50?t="widget-yellow":e>=50&&e<100?t="widget-red":e>=100&&(t="widget-darkred"),t},rounded:function(e){return Number(e.toFixed(1))}}};n("4fdf");T.render=A,T.__scopeId="data-v-ce49ecca";var R=T,N=n("57e3"),P={name:"Home",metaInfo:{title:"Covid-19 Ampel-Widget",meta:[{vmid:"description",name:"description",content:"Das Covid-19 Ampel-Widget für iOS und Android. Behalte den Inzidenzwert deines Landkreises im Blick."}]},props:["id"],components:{Widget:R,Config:N["a"]},data:function(){return{selected:null}},mounted:function(){this.id?(this.selected=this.id,localStorage.setItem("landkreis",this.selected)):this.selected=localStorage.getItem("landkreis"),this.selected&&this.$router.push("/lkr/"+this.selected)}};P.render=g;var G=P,q=[{path:"/",component:G},{path:"/lkr/:id",component:G,props:!0},{path:"/config",component:function(){return n.e("config").then(n.bind(null,"1071"))}},{path:"/about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/imprint",component:function(){return n.e("about").then(n.bind(null,"5a7f"))}},{path:"/privacy",component:function(){return n.e("about").then(n.bind(null,"6f9f"))}},{path:"/:pathMatch(.*)",component:G}],Z="/covid-ampel-widget/",J=Object(j["a"])({history:Object(j["b"])(Z),routes:q}),K=J,M=Object(r["d"])(O);M.use(K),M.mount("#app")},"57e3":function(e,t,n){"use strict";var r=n("7a23"),a={id:"config"},o=Object(r["i"])("p",null," Wählen sie bitte den gewünschten Landkreis aus: ",-1),c=Object(r["i"])("p",null," Diese Einstellung wird nur lokal im Browser gespeichert. ",-1);function i(e,t,n,i,u,s){var l=Object(r["y"])("landkreise");return Object(r["r"])(),Object(r["e"])("div",a,[o,Object(r["i"])("p",null,[Object(r["i"])(l)]),c])}var u=Object(r["H"])("data-v-6d87fe67"),s=u((function(e,t,n,a,o,c){return Object(r["r"])(),Object(r["e"])("div",null,[Object(r["i"])("form",null,[Object(r["G"])(Object(r["i"])("select",{class:"select-lkr","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.selectedValue=e}),onChange:t[2]||(t[2]=function(e){return c.onChange(e)})},[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(o.data,(function(e){return Object(r["r"])(),Object(r["e"])("option",{key:e.attributes.OBJECTID,value:e.attributes.OBJECTID},Object(r["A"])(e.attributes.GEN)+" ("+Object(r["A"])(e.attributes.BEZ)+") ",9,["value"])})),128))],544),[[r["C"],o.selectedValue]])])])})),l=(n("96cf"),n("1da1")),d=n("bc3a"),f=n.n(d),b={name:"Landkreise",data:function(){return{selectedValue:null,data:[]}},created:function(){var e=this;this.getData().then((function(t){e.data=t,e.selectedValue=localStorage.getItem("landkreis")}))},methods:{getData:function(){return Object(l["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&units=esriSRUnit_Meter&returnGeodetic=false&outFields=objectId%2CBEZ%2CGEN&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=true&cacheHint=false&orderByFields=GEN&resultRecordCount=1000&returnZ=false&returnM=false&returnExceededLimitFeatures=false&quantizationParameters=&sqlFormat=none&f=pjson",n=f.a.create({baseURL:t,timeout:1e4,headers:{"Content-Type":"application/json"}}),e.next=4,n.get();case 4:return r=e.sent,r.error&&console.error(r.error),e.abrupt("return",r.data.features);case 7:case"end":return e.stop()}}),e)})))()},onChange:function(e){localStorage.setItem("landkreis",e.target.value),this.$router.go(0)}}};n("8536");b.render=s,b.__scopeId="data-v-6d87fe67";var p=b,h={name:"Config",components:{Landkreise:p}};h.render=i;t["a"]=h},6131:function(e,t,n){e.exports=n.p+"img/coronaampel.3fd2db0c.png"},"64be":function(e,t,n){"use strict";n("c894")},8536:function(e,t,n){"use strict";n("f963")},c894:function(e,t,n){},e436:function(e,t,n){},f963:function(e,t,n){}});
//# sourceMappingURL=app.c1ef2714.js.map