"use strict";(self["webpackChunkcovid_ampel"]=self["webpackChunkcovid_ampel"]||[]).push([[497],{2360:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(6252);const i=e=>((0,a.dD)("data-v-cfe782c0"),e=e(),(0,a.Cn)(),e),l={id:"config-view"},r={class:"container"},s={class:"head"},c=i((()=>(0,a._)("p",null," Wählen sie bitte den gewünschten Landkreis aus: ",-1))),o=i((()=>(0,a._)("p",null," Diese Einstellung wird nur lokal im Browser gespeichert. ",-1)));function d(e,t,n,i,d,u){const k=(0,a.up)("doc-head"),h=(0,a.up)("van-nav-bar"),g=(0,a.up)("van-sticky"),v=(0,a.up)("landkreise");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(k,{"meta-info":d.metaInfo},null,8,["meta-info"]),(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,{title:"Einstellungen","left-text":"Zurück","left-arrow":"",onClickLeft:u.onClickLeft},null,8,["onClickLeft"])])),_:1}),(0,a._)("div",r,[(0,a._)("div",s,[c,o,(0,a.Wm)(v)])])])}n(7658);var u=n(6400),k=n(3577);const h={class:"landkreise"},g={key:1,class:"error"},v={class:"custom-title"};function p(e,t,n,i,l,r){const s=(0,a.up)("van-loading"),c=(0,a.up)("van-icon"),o=(0,a.up)("van-index-anchor"),d=(0,a.up)("incidence-label"),u=(0,a.up)("van-cell"),p=(0,a.up)("van-index-bar");return(0,a.wg)(),(0,a.iD)("div",h,[l.isLoading?((0,a.wg)(),(0,a.j4)(s,{key:0,size:"24px",color:"#1989fa",vertical:""},{default:(0,a.w5)((()=>[(0,a.Uk)(" Lade Daten … ")])),_:1})):(0,a.kq)("",!0),l.error?((0,a.wg)(),(0,a.iD)("div",g,[(0,a.Wm)(c,{name:"warning-o"}),(0,a.Uk)(" "+(0,k.zw)(l.error),1)])):((0,a.wg)(),(0,a.j4)(p,{key:2,class:"landkreise--list"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.data,(e=>((0,a.wg)(),(0,a.iD)(a.HY,{key:e.OBJECTID},[e.index?((0,a.wg)(),(0,a.j4)(o,{key:0,index:e.label},null,8,["index"])):((0,a.wg)(),(0,a.j4)(u,{key:1,clickable:"","is-link":"",icon:"location-o",class:(0,k.C_)(r.selectedClass(e.OBJECTID)),onClick:t=>r.onClick(e.OBJECTID)},{title:(0,a.w5)((()=>[(0,a._)("h4",v,(0,k.zw)(e.GEN),1),(0,a._)("p",null,(0,k.zw)(e.BEZ),1)])),default:(0,a.w5)((()=>[(0,a.Wm)(d,{"object-id":e.OBJECTID},null,8,["object-id"])])),_:2},1032,["class","onClick"]))],64)))),128))])),_:1}))])}var m=n(3620);const f={class:"inzidenz"};function w(e,t,n,i,l,r){const s=(0,a.up)("van-tag");return(0,a.wg)(),(0,a.iD)("span",f,[l.incidence?((0,a.wg)(),(0,a.j4)(s,{key:0,textContent:(0,k.zw)(r.rounded(l.incidence))},null,8,["textContent"])):(0,a.kq)("",!0)])}var _={name:"IncidenceLabel",props:{objectId:{type:Number,required:!0}},data(){return{error:!1,incidence:null}},mounted(){this.getData()},methods:{getData(){m.R.getIncidence(this.objectId).then((e=>{const t=e.features[0].attributes;this.incidence=t.cases7_per_100k})).catch((e=>{console.error(e),this.error="Fehler beim Laden der Daten vom RKI-Server"}))},rounded(e){return Number(e.toFixed(1))}}},b=n(3744);const C=(0,b.Z)(_,[["render",w]]);var D=C,I={name:"Landkreise",components:{IncidenceLabel:D},data(){return{isLoading:!1,error:null,data:[],selectedValue:null}},mounted(){this.isLoading=!0,m.R.getAreas().then((e=>{this.data=[];let t=null;e.forEach((e=>{e.attributes.GEN.charAt(0)!==t&&(t=e.attributes.GEN.charAt(0),this.data.push({OBJECTID:t,index:!0,label:t})),this.data.push(e.attributes)})),this.selectedValue=localStorage.getItem("landkreis")})).catch((e=>{console.log(e),this.error="Fehler beim Laden der Daten vom RKI-Server"})).finally((()=>{this.track(),this.isLoading=!1}))},methods:{onClick(e){localStorage.setItem("landkreis",e),this.trackSelection(e),this.$router.push(`/lkr/${e}`)},selectedClass(e){return this.selectedValue===e?"van-cell--selected ":""},trackSelection(e){this.$gtag.event("api_request",{event_category:"lkr_select",event_label:`${e}`})},track(){this.$gtag.event("api_request",{event_category:"lkr_load",event_label:"lkr_load"})}}};const L=(0,b.Z)(I,[["render",p]]);var E=L,y={name:"ConfigView",components:{DocHead:u.Z,Landkreise:E},data(){return{metaInfo:{title:"Einstellungen | Covid-19 Ampel"}}},methods:{onClickLeft(){this.$router.push("/")}}};const x=(0,b.Z)(y,[["render",d],["__scopeId","data-v-cfe782c0"]]);var j=x}}]);
//# sourceMappingURL=config.aac7e5d5.js.map