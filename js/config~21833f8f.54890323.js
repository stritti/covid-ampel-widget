(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["config~21833f8f"],{1071:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a={id:"config-view"},i={class:"container"},r=Object(c["j"])("p",null," Wählen sie bitte den gewünschten Landkreis aus: ",-1),l=Object(c["j"])("p",null," Diese Einstellung wird nur lokal im Browser gespeichert. ",-1);function o(e,t,n,o,u,s){var d=Object(c["E"])("doc-head"),b=Object(c["E"])("van-nav-bar"),f=Object(c["E"])("van-sticky"),j=Object(c["E"])("landkreise");return Object(c["w"])(),Object(c["f"])("div",a,[Object(c["j"])(d,{"meta-info":u.metaInfo},null,8,["meta-info"]),Object(c["j"])(f,null,{default:Object(c["M"])((function(){return[Object(c["j"])(b,{title:"Einstellungen","left-text":"Zurück","left-arrow":"",onClickLeft:s.onClickLeft},null,8,["onClickLeft"])]})),_:1}),Object(c["j"])("div",i,[r,l,Object(c["j"])(j)])])}var u=n("f01e"),s=Object(c["i"])(" Lade Daten ... "),d={class:"custom-title"};function b(e,t,n,a,i,r){var l=Object(c["E"])("van-loading"),o=Object(c["E"])("van-index-anchor"),u=Object(c["E"])("incidence-label"),b=Object(c["E"])("van-cell"),f=Object(c["E"])("van-index-bar");return Object(c["w"])(),Object(c["f"])("div",null,[i.isLoading?(Object(c["w"])(),Object(c["f"])(l,{key:0,size:"24px",color:"#1989fa",vertical:""},{default:Object(c["M"])((function(){return[s]})),_:1})):Object(c["g"])("",!0),Object(c["j"])(f,{class:"landkreise"},{default:Object(c["M"])((function(){return[(Object(c["w"])(!0),Object(c["f"])(c["a"],null,Object(c["C"])(i.data,(function(e){return Object(c["w"])(),Object(c["f"])("span",{key:e.OBJECTID},[e.index?(Object(c["w"])(),Object(c["f"])(o,{key:0,index:e.label},null,8,["index"])):(Object(c["w"])(),Object(c["f"])(b,{key:1,clickable:"","is-link":"",icon:"location-o",class:r.selectedClass(e.OBJECTID),onClick:function(t){return r.onClick(e.OBJECTID)}},{title:Object(c["M"])((function(){return[Object(c["j"])("h4",d,Object(c["H"])(e.GEN),1),Object(c["j"])("p",null,Object(c["H"])(e.BEZ),1)]})),default:Object(c["M"])((function(){return[Object(c["j"])(u,{"object-id":e.OBJECTID},null,8,["object-id"])]})),_:2},1032,["class","onClick"]))])})),128))]})),_:1})])}n("4160"),n("d3b7"),n("159b");var f=n("7957"),j={class:"inzidenz"};function O(e,t,n,a,i,r){var l=Object(c["E"])("van-tag");return Object(c["w"])(),Object(c["f"])("span",j,[i.incidence?(Object(c["w"])(),Object(c["f"])(l,{key:0,textContent:Object(c["H"])(r.rounded(i.incidence))},null,8,["textContent"])):Object(c["g"])("",!0)])}n("a9e3"),n("b680");var k={name:"IncidenceLabel",props:{objectId:{type:Number,required:!0}},data:function(){return{error:!1,incidence:null}},mounted:function(){this.getData()},methods:{getData:function(){var e=this;f["a"].getIncidence(this.objectId).then((function(t){var n=t.features[0].attributes;e.incidence=n.cases7_per_100k})).catch((function(t){console.error(t),e.error="Fehler beim Laden der Daten vom RKI-Server"}))},rounded:function(e){return Number(e.toFixed(1))}}};k.render=O;var v=k,h={name:"Landkreise",components:{IncidenceLabel:v},data:function(){return{isLoading:!1,data:[],selectedValue:null}},mounted:function(){var e=this;this.isLoading=!0,f["a"].getAreas().then((function(t){e.data=[];var n=null;t.forEach((function(t){t.attributes.GEN.charAt(0)!==n&&(n=t.attributes.GEN.charAt(0),e.data.push({OBJECTID:n,index:!0,label:n})),e.data.push(t.attributes)})),e.selectedValue=localStorage.getItem("landkreis")})).finally((function(){e.track(),e.isLoading=!1}))},methods:{onClick:function(e){localStorage.setItem("landkreis",e),this.trackSelection(e),this.$router.push("/lkr/".concat(e))},selectedClass:function(e){return this.selectedValue===e?"van-cell--selected ":""},trackSelection:function(e){this.$gtag.event("api_request",{event_category:"lkr_select",event_label:"".concat(e)})},track:function(){this.$gtag.event("api_request",{event_category:"lkr_load",event_label:"lkr_load"})}}};n("d6db");h.render=b;var g=h,p={name:"ConfigView",components:{DocHead:u["a"],Landkreise:g},data:function(){return{metaInfo:{title:"Einstellungen | Covid-19 Ampel-Widget"}}},methods:{onClickLeft:function(){this.$router.push("/")}}};p.render=o;t["default"]=p},d6db:function(e,t,n){"use strict";n("f2b5")},f2b5:function(e,t,n){}}]);
//# sourceMappingURL=config~21833f8f.54890323.js.map