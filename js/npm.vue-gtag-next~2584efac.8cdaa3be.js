(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.vue-gtag-next~2584efac"],{f7e2:function(e,n,a){"use strict";a.d(n,"b",(function(){return C}));var t=a("7a23"),o=function(){return"undefined"!==typeof document&&"undefined"!==typeof window},r=function(e,n){return new Promise((function(a,t){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("script");if(r.async=!0,r.src=e,r.charset="utf-8",n){var u=document.createElement("link");u.href=n,u.rel="preconnect",o.appendChild(u)}o.appendChild(r),r.onload=a,r.onerror=t}))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(n).forEach((function(a){e[a]=n[a]}))},i=Object(t["reactive"])({property:null,isEnabled:!0,disableScriptLoader:!1,useDebugger:!1,globalObjectName:"gtag",dataLayerName:"dataLayer",resourceURL:"https://www.googletagmanager.com/gtag/js",preconnectOrigin:"https://www.googletagmanager.com",customResource:null,appName:null,appId:null,appVersion:null}),c=function(){return Object(t["toRefs"])(i)},l=Object(t["computed"])((function(){var e=c(),n=e.property;if(n.value)return Array.isArray(n.value)?n.value.find((function(e){return!0===e["default"]}))||n.value[0]:n.value})),v=Object(t["computed"])((function(){var e=c(),n=e.property;return Boolean(n.value&&null!==n.value.id)})),p=Object(t["computed"])((function(){var e=c(),n=e.property;return Array.isArray(n.value)?n.value:[n.value]})),f=Object(t["computed"])((function(){var e=c(),n=e.isEnabled,a=l.value;return Boolean(a&&a.id&&n.value)})),d=function(){var e;if(o()){for(var n=c(),a=n.globalObjectName,t=n.useDebugger,r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];t.value&&console.warn("[vue-gtag] Debugger:",u),(e=window)[a.value].apply(e,u)}},g=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];p.value.forEach((function(e){d.apply(void 0,["config",e.id].concat(n))}))},s=function(e){g({custom_map:e})},w=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];o()&&p.value.forEach((function(n){window["ga-disable-".concat(n.id)]=e}))},h=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object.assign({},n);!a.send_to&&p.value.length>1&&(a.send_to=p.value.map((function(e){return e.id}))),d("event",e,a)},m=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];h.apply(void 0,["exception"].concat(n))},y=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];g.apply(void 0,["linker"].concat(n))},b=function(e){var n={};n="string"===typeof e?{page_path:e,page_location:window.location.href}:e,"undefined"===typeof n.send_page_view&&(n.send_page_view=!0),h("page_view",n)},_=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];h.apply(void 0,["purchase"].concat(n))},j=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];h.apply(void 0,["refund"].concat(n))},O=function(){for(var e=c(),n=e.appName,a=e.appId,t=e.appVersion,o=arguments.length,r=new Array(o),u=0;u<o;u++)r[u]=arguments[u];var i=r[0],l={};l="string"===typeof i?{screen_name:i}:i,null==l.app_name&&null!=n.value&&(l.app_name=n.value),null==l.app_id&&null!=a.value&&(l.app_id=a.value),null==l.app_version&&null!=t.value&&(l.app_version=t.value),h("screen_view",l)},A=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];d.apply(void 0,["set"].concat(n))},k=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];h.apply(void 0,["timing_complete"].concat(n))},E=Object.freeze({__proto__:null,config:g,customMap:s,disable:w,event:h,exception:m,linker:y,pageview:b,purchase:_,query:d,refund:j,screenview:O,set:A,time:k}),N=Object(t["ref"])(!1),L=Object(t["ref"])(!1),R=function(){var e=c(),n=e.disableScriptLoader,a=e.preconnectOrigin,t=e.resourceURL,u=e.dataLayerName;if(o()&&v.value&&!L.value)if(L.value=!0,p.value.forEach((function(e){var n=Object.assign({send_page_view:!1},e.params);d("config",e.id,n)})),n.value)N.value=!0;else{var i="".concat(t.value,"?id=").concat(l.value.id,"&l=").concat(u.value);r(i,a.value).then((function(){N.value=!0}))}},S=function(){Object(t["watch"])((function(){return f.value}),(function(e){return e&&R()}),{immediate:!0})},x=function(){if(o()){var e=c(),n=e.globalObjectName,a=e.dataLayerName;null==window[n.value]&&(window[a.value]=window[a.value]||[],window[n.value]=function(){window[a.value].push(arguments)}),window[n.value]("js",new Date)}},D=Object(t["reactive"])({template:null,useScreenview:!1,skipSamePath:!0}),P=function(){return Object(t["toRefs"])(D)},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=P(),t=a.template,o=a.useScreenview,r=t.value?t.value(e,n):null;return r||(o.value?{screen_name:e.name}:{page_title:e.name,page_path:e.path,page_location:window.location.href})},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=P(),t=a.useScreenview,o=a.skipSamePath;if(!o.value||e.path!==n.path){var r=B(e,n);t.value?O(r):b(r)}},C=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u(D,n),Object(t["watch"])((function(){return f.value}),(function(n){n&&e.isReady().then((function(){Object(t["nextTick"])((function(){T(e.currentRoute.value)})),e.afterEach((function(e,n){Object(t["nextTick"])((function(){T(e,n)}))}))}))}),{immediate:!0})},I={install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u(i,n),x(),S(),e.config.globalProperties.$gtag=E}};n["a"]=I}}]);
//# sourceMappingURL=npm.vue-gtag-next~2584efac.8cdaa3be.js.map