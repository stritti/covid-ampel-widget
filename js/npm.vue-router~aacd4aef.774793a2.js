(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.vue-router~aacd4aef"],{"6c02":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Ze})),n.d(t,"b",(function(){return V}));var r=n("7a23");
/*!
  * vue-router v4.0.3
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const o="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,a=e=>o?Symbol(e):"_vr_"+e,c=a("rvlm"),s=a("rvd"),l=a("r"),i=a("rl"),u=a("rvl"),f="undefined"!==typeof window;function p(e){return e.__esModule||o&&"Module"===e[Symbol.toStringTag]}const h=Object.assign;function d(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}let m=()=>{};const g=/\/$/,v=e=>e.replace(g,"");function b(e,t,n="/"){let r,o={},a="",c="";const s=t.indexOf("?"),l=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),a=t.slice(s+1,l>-1?l:t.length),o=e(a)),l>-1&&(r=r||t.slice(0,l),c=t.slice(l,t.length)),r=R(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+c,path:r,query:o,hash:c}}function y(e,t){let n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function w(e,t){return!t||e.toLowerCase().indexOf(t.toLowerCase())?e:e.slice(t.length)||"/"}function O(e,t,n){let r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&j(t.matched[r],n.matched[o])&&E(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function j(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function E(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(!k(e[n],t[n]))return!1;return!0}function k(e,t){return Array.isArray(e)?A(e,t):Array.isArray(t)?A(t,e):e===t}function A(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function R(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,c=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],1!==c&&"."!==a){if(".."!==a)break;c--}return n.slice(0,c).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var x,P;(function(e){e["pop"]="pop",e["push"]="push"})(x||(x={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(P||(P={}));function C(e){if(!e)if(f){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}const $=/^[^#]+#/;function S(e,t){return e.replace($,"#")+t}function q(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const B=()=>({left:window.pageXOffset,top:window.pageYOffset});function L(e){let t;if("el"in e){let n=e.el;const r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=q(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function M(e,t){const n=history.state?history.state.position-t:-1;return n+e}const _=new Map;function G(e,t){_.set(e,t)}function I(e){const t=_.get(e);return _.delete(e),t}let K=()=>location.protocol+"//"+location.host;function T(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let e=o.slice(1);return"/"!==e[0]&&(e="/"+e),w(e,"")}const c=w(n,e);return c+r+o}function U(e,t,n,r){let o=[],a=[],c=null;const s=({state:a})=>{const s=T(e,location),l=n.value,i=t.value;let u=0;if(a){if(n.value=s,t.value=a,c&&c===l)return void(c=null);u=i?a.position-i.position:0}else r(s);o.forEach(e=>{e(n.value,l,{delta:u,type:x.pop,direction:u?u>0?P.forward:P.back:P.unknown})})};function l(){c=n.value}function i(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(h({},e.state,{scroll:B()}),"")}function f(){for(const e of a)e();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:i,destroy:f}}function F(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?B():null}}function D(e){const{history:t,location:n}=window;let r={value:T(e,n)},o={value:t.state};function a(r,a,c){const s=e.indexOf("#"),l=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+r:K()+e+r;try{t[c?"replaceState":"pushState"](a,"",l),o.value=a}catch(i){console.error(i),n[c?"replace":"assign"](l)}}function c(e,n){const c=h({},t.state,F(o.value.back,e,o.value.forward,!0),n,{position:o.value.position});a(e,c,!0),r.value=e}function s(e,n){const c=h({},o.value,t.state,{forward:e,scroll:B()});a(c.current,c,!0);const s=h({},F(r.value,e,null),{position:c.position+1},n);a(e,s,!1),r.value=e}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:s,replace:c}}function V(e){e=C(e);const t=D(e),n=U(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const o=h({location:"",base:e,go:r,createHref:S.bind(null,e)},t,n);return Object.defineProperty(o,"location",{get:()=>t.location.value}),Object.defineProperty(o,"state",{get:()=>t.state.value}),o}function W(e){return"string"===typeof e||e&&"object"===typeof e}function H(e){return"string"===typeof e||"symbol"===typeof e}const z={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},J=a("nf");var Q;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Q||(Q={}));function X(e,t){return h(new Error,{type:e,[J]:!0},t)}function Y(e,t){return e instanceof Error&&J in e&&(null==t||!!(e.type&t))}const N="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=h({},Z,t);let r=[],o=n.start?"^":"";const a=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let t=0;t<u.length;t++){const r=u[t];let c=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(ee,"\\$&"),c+=40;else if(1===r.type){const{value:e,repeatable:n,optional:s,regexp:l}=r;a.push({name:e,repeatable:n,optional:s});const u=l||N;if(u!==N){c+=10;try{new RegExp(`(${u})`)}catch(i){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+i.message)}}let f=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(f=s?`(?:/${f})`:"/"+f),s&&(f+="?"),o+=f,c+=20,s&&(c+=-8),n&&(c+=-20),".*"===u&&(c+=-50)}e.push(c)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const c=new RegExp(o,n.sensitive?"":"i");function s(e){const t=e.match(c),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=a[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n}function l(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:a,optional:c}=e,s=o in t?t[o]:"";if(Array.isArray(s)&&!a)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(s)?s.join("/"):s;if(!l){if(!c)throw new Error(`Missing required param "${o}"`);n.endsWith("/")?n=n.slice(0,-1):r=!0}n+=l}}return n}return{re:c,score:r,keys:a,parse:s,stringify:l}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let n=0;const r=e.score,o=t.score;while(n<r.length&&n<o.length){const e=ne(r[n],o[n]);if(e)return e;n++}return o.length-r.length}const oe={type:0,value:""},ae=/[a-zA-Z0-9_]/;function ce(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${i}": ${e}`)}let n=0,r=n;const o=[];let a;function c(){a&&o.push(a),a=[]}let s,l=0,i="",u="";function f(){i&&(0===n?a.push({type:0,value:i}):1===n||2===n||3===n?(a.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:i,regexp:u,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),i="")}function p(){i+=s}while(l<e.length)if(s=e[l++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(i&&f(),c()):":"===s?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===s?n=2:ae.test(s)?p():(f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--);break;case 2:")"===s?"\\"==u[u.length-1]?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${i}"`),f(),c(),o}function se(e,t,n){const r=te(ce(e.path),n);const o=h(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function le(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function a(e,n,r){let o=!r,s=ue(e);s.aliasOf=r&&r.record;const i=de(t,e),u=[s];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(h({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s}))}let f,p;for(const t of u){let{path:u}=t;if(n&&"/"!==u[0]){let e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=se(t,n,i),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),o&&e.name&&!pe(f)&&c(e.name)),"children"in s){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],f,r&&r.children[t])}r=r||f,l(f)}return p?()=>{c(p)}:m}function c(e){if(H(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(c),t.alias.forEach(c))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(c),e.alias.forEach(c))}}function s(){return n}function l(e){let t=0;while(t<n.length&&re(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!pe(e)&&r.set(e.record.name,e)}function i(e,t){let o,a,c,s={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw X(1,{location:e});c=o.record.name,s=h(ie(t.params,o.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),a=o.stringify(s)}else if("path"in e)a=e.path,o=n.find(e=>e.re.test(a)),o&&(s=o.parse(a),c=o.record.name);else{if(o=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!o)throw X(1,{location:e,currentLocation:t});c=o.record.name,s=h({},t.params,e.params),a=o.stringify(s)}const l=[];let i=o;while(i)l.unshift(i.record),i=i.parent;return{name:c,path:a,params:s,matched:l,meta:he(l)}}return t=de({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>a(e)),{addRoute:a,resolve:i,removeRoute:c,getRoutes:s,getRecordMatcher:o}}function ie(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function ue(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:fe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function fe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(let r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function pe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function he(e){return e.reduce((e,t)=>h(e,t.meta),{})}function de(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}const me=/#/g,ge=/&/g,ve=/\//g,be=/=/g,ye=/\?/g,we=/\+/g,Oe=/%5B/g,je=/%5D/g,Ee=/%5E/g,ke=/%60/g,Ae=/%7B/g,Re=/%7C/g,xe=/%7D/g,Pe=/%20/g;function Ce(e){return encodeURI(""+e).replace(Re,"|").replace(Oe,"[").replace(je,"]")}function $e(e){return Ce(e).replace(Ae,"{").replace(xe,"}").replace(Ee,"^")}function Se(e){return Ce(e).replace(we,"%2B").replace(Pe,"+").replace(me,"%23").replace(ge,"%26").replace(ke,"`").replace(Ae,"{").replace(xe,"}").replace(Ee,"^")}function qe(e){return Se(e).replace(be,"%3D")}function Be(e){return Ce(e).replace(me,"%23").replace(ye,"%3F")}function Le(e){return Be(e).replace(ve,"%2F")}function Me(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function _e(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const e=r[o].replace(we," ");let n=e.indexOf("="),a=Me(n<0?e:e.slice(0,n)),c=n<0?null:Me(e.slice(n+1));if(a in t){let e=t[a];Array.isArray(e)||(e=t[a]=[e]),e.push(c)}else t[a]=c}return t}function Ge(e){let t="";for(let n in e){t.length&&(t+="&");const r=e[n];if(n=qe(n),null==r){void 0!==r&&(t+=n);continue}let o=Array.isArray(r)?r.map(e=>e&&Se(e)):[r&&Se(r)];for(let e=0;e<o.length;e++)t+=(e?"&":"")+n,null!=o[e]&&(t+="="+o[e])}return t}function Ie(e){const t={};for(let n in e){let r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Ke(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Te(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((c,s)=>{const l=e=>{!1===e?s(X(4,{from:n,to:t})):e instanceof Error?s(e):W(e)?s(X(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"===typeof e&&a.push(e),c())},i=e.call(r&&r.instances[o],t,n,l);let u=Promise.resolve(i);e.length<3&&(u=u.then(l)),u.catch(e=>s(e))})}function Ue(e,t,n,r){const o=[];for(const a of e)for(const e in a.components){let c=a.components[e];if("beforeRouteEnter"===t||a.instances[e])if(Fe(c)){let s=c.__vccOpts||c;const l=s[t];l&&o.push(Te(l,n,r,a,e))}else{let s=c();s=s.catch(console.error),o.push(()=>s.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${a.path}"`));const c=p(o)?o.default:o;a.components[e]=c;const s=c[t];return s&&Te(s,n,r,a,e)()}))}}return o}function Fe(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function De(e){const t=Object(r["n"])(l),n=Object(r["n"])(i),o=Object(r["d"])(()=>t.resolve(Object(r["K"])(e.to))),a=Object(r["d"])(()=>{let{matched:e}=o.value,{length:t}=e;const r=e[t-1];let a=n.matched;if(!r||!a.length)return-1;let c=a.findIndex(j.bind(null,r));if(c>-1)return c;let s=Je(e[t-2]);return t>1&&Je(r)===s&&a[a.length-1].path!==s?a.findIndex(j.bind(null,e[t-2])):c}),c=Object(r["d"])(()=>a.value>-1&&ze(n.params,o.value.params)),s=Object(r["d"])(()=>a.value>-1&&a.value===n.matched.length-1&&E(n.params,o.value.params));function u(n={}){return He(n)?t[Object(r["K"])(e.replace)?"replace":"push"](Object(r["K"])(e.to)):Promise.resolve()}return{route:o,href:Object(r["d"])(()=>o.value.href),isActive:c,isExactActive:s,navigate:u}}const Ve=Object(r["k"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},setup(e,{slots:t,attrs:n}){const o=Object(r["A"])(De(e)),{options:a}=Object(r["n"])(l),c=Object(r["d"])(()=>({[Qe(e.activeClass,a.linkActiveClass,"router-link-active")]:o.isActive,[Qe(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const a=t.default&&t.default(o);return e.custom?a:Object(r["m"])("a",h({"aria-current":o.isExactActive?e.ariaCurrentValue:null,onClick:o.navigate,href:o.href},n,{class:c.value}),a)}}}),We=Ve;function He(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ze(e,t){for(let n in t){let r=t[n],o=e[n];if("string"===typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some((e,t)=>e!==o[t]))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qe=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=Object(r["k"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const o=Object(r["n"])(u),a=Object(r["d"])(()=>e.route||o.value),l=Object(r["n"])(s,0),i=Object(r["d"])(()=>a.value.matched[l]);Object(r["y"])(s,l+1),Object(r["y"])(c,i),Object(r["y"])(u,a);const f=Object(r["B"])();return Object(r["M"])(()=>[f.value,i.value,e.name],([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards=o.leaveGuards,t.updateGuards=o.updateGuards)),!e||!t||o&&j(t,o)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const o=a.value,c=i.value,s=c&&c.components[e.name],l=e.name;if(!s)return Ye(n.default,{Component:s,route:o});const u=c.props[e.name],p=u?!0===u?o.params:"function"===typeof u?u(o):u:null,d=e=>{e.component.isUnmounted&&(c.instances[l]=null)},m=Object(r["m"])(s,h({},p,t,{onVnodeUnmounted:d,ref:f}));return Ye(n.default,{Component:m,route:o})||m}}});function Ye(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ne=Xe;function Ze(e){const t=le(e.routes,e);let n=e.parseQuery||_e,o=e.stringifyQuery||Ge,a=e.history;const c=Ke(),s=Ke(),p=Ke(),g=Object(r["H"])(z);let v=z;f&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=d.bind(null,e=>""+e),j=d.bind(null,Le),E=d.bind(null,Me);function k(e,n){let r,o;return H(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)}function A(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function R(){return t.getRoutes().map(e=>e.record)}function x(e){return!!t.getRecordMatcher(e)}function P(e,r){if(r=h({},r||g.value),"string"===typeof e){let o=b(n,e,r.path),c=t.resolve({path:o.path},r),s=a.createHref(o.fullPath);return h(o,c,{params:E(c.params),hash:Me(o.hash),redirectedFrom:void 0,href:s})}let c;"path"in e?c=h({},e,{path:b(n,e.path,r.path).path}):(c=h({},e,{params:j(e.params)}),r.params=j(r.params));let s=t.resolve(c,r);const l=e.hash||"";s.params=w(E(s.params));const i=y(o,h({},e,{hash:$e(l),path:s.path}));let u=a.createHref(i);return h({fullPath:i,hash:l,query:o===Ge?Ie(e.query):e.query},s,{redirectedFrom:void 0,href:u})}function C(e){return"string"===typeof e?b(n,e,g.value.path):h({},e)}function $(e,t){if(v!==e)return X(8,{from:t,to:e})}function S(e){return K(e)}function q(e){return S(h(C(e),{replace:!0}))}function _(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.indexOf("?")>-1||r.indexOf("#")>-1?r=C(r):{path:r}),h({query:e.query,hash:e.hash,params:e.params},r)}}function K(e,t){const n=v=P(e),r=g.value,a=e.state,c=e.force,s=!0===e.replace,l=_(n);if(l)return K(h(C(l),{state:a,force:c,replace:s}),t||n);const i=n;let u;return i.redirectedFrom=t,!c&&O(o,r,n)&&(u=X(16,{to:i,from:r}),ne(r,r,!0,!1)),(u?Promise.resolve(u):U(i,r)).catch(e=>Y(e)?e:Z(e)).then(e=>{if(e){if(Y(e,2))return K(h(C(e.to),{state:a,force:c,replace:s}),t||i)}else e=D(i,r,!0,s,a);return F(i,r,e),e})}function T(e,t){const n=$(e,t);return n?Promise.reject(n):Promise.resolve()}function U(e,t){let n;const[r,o,a]=tt(e,t);n=Ue(r.reverse(),"beforeRouteLeave",e,t);for(const c of r)c.leaveGuards.forEach(r=>{n.push(Te(r,e,t))});const l=T.bind(null,e,t);return n.push(l),et(n).then(()=>{n=[];for(const r of c.list())n.push(Te(r,e,t));return n.push(l),et(n)}).then(()=>{n=Ue(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach(r=>{n.push(Te(r,e,t))});return n.push(l),et(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&t.matched.indexOf(r)<0)if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(Te(o,e,t));else n.push(Te(r.beforeEnter,e,t));return n.push(l),et(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Ue(a,"beforeRouteEnter",e,t),n.push(l),et(n))).then(()=>{n=[];for(const r of s.list())n.push(Te(r,e,t));return n.push(l),et(n)}).catch(e=>Y(e,8)?e:Promise.reject(e))}function F(e,t,n){for(const r of p.list())r(e,t,n)}function D(e,t,n,r,o){const c=$(e,t);if(c)return c;const s=t===z,l=f?history.state:{};n&&(r||s?a.replace(e.fullPath,h({scroll:s&&l&&l.scroll},o)):a.push(e.fullPath,o)),g.value=e,ne(e,t,n,s),te()}let V;function W(){V=a.listen((e,t,n)=>{let r=P(e);const o=_(r);if(o)return void K(h(o,{replace:!0}),r).catch(m);v=r;const c=g.value;f&&G(M(c.fullPath,n.delta),B()),U(r,c).catch(e=>Y(e,12)?e:Y(e,2)?(K(e.to,r).catch(m),Promise.reject()):(n.delta&&a.go(-n.delta,!1),Z(e))).then(e=>{e=e||D(r,c,!1),e&&n.delta&&a.go(-n.delta,!1),F(r,c,e)}).catch(m)})}let J,Q=Ke(),N=Ke();function Z(e){return te(e),N.list().forEach(t=>t(e)),Promise.reject(e)}function ee(){return J&&g.value!==z?Promise.resolve():new Promise((e,t)=>{Q.add([e,t])})}function te(e){J||(J=!0,W(),Q.list().forEach(([t,n])=>e?n(e):t()),Q.reset())}function ne(t,n,o,a){const{scrollBehavior:c}=e;if(!f||!c)return Promise.resolve();let s=!o&&I(M(t.fullPath,0))||(a||!o)&&history.state&&history.state.scroll||null;return Object(r["q"])().then(()=>c(t,n,s)).then(e=>e&&L(e)).catch(Z)}const re=e=>a.go(e);let oe;const ae=new Set,ce={currentRoute:g,addRoute:k,removeRoute:A,hasRoute:x,getRoutes:R,resolve:P,options:e,push:S,replace:q,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:c.add,beforeResolve:s.add,afterEach:p.add,onError:N.add,isReady:ee,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",Ne),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{get:()=>Object(r["K"])(g)}),f&&!oe&&g.value===z&&(oe=!0,S(a.location).catch(e=>{0}));const n={};for(let a in z)n[a]=Object(r["d"])(()=>g.value[a]);e.provide(l,t),e.provide(i,Object(r["A"])(n)),e.provide(u,g);let o=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(V(),g.value=z,oe=!1,J=!1),o.call(this,arguments)}}};return ce}function et(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function tt(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let c=0;c<a;c++){const a=t.matched[c];a&&(e.matched.indexOf(a)<0?n.push(a):r.push(a));const s=e.matched[c];s&&t.matched.indexOf(s)<0&&o.push(s)}return[n,r,o]}}).call(this,n("c8ba"))}}]);
//# sourceMappingURL=npm.vue-router~aacd4aef.774793a2.js.map