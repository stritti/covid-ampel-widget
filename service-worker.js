if(!self.define){let e,i={};const d=(d,l)=>(d=new URL(d+".js",l).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(l,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const a=e=>d(e,o),r={module:{uri:o},exports:s,require:a};i[o]=Promise.all(l.map((e=>r[e]||a(e)))).then((e=>(c(...e),s)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"covid-ampel"}),self.skipWaiting(),e.precacheAndRoute([{url:"/covid-ampel-widget/apple-touch-icon-180x180-precomposed.png",revision:"882d44c1158aad7c26190818517c3735"},{url:"/covid-ampel-widget/apple-touch-icon-180x180.png",revision:"7a4f79fa82731c3dfa1ca2f7dd2d7ddd"},{url:"/covid-ampel-widget/apple-touch-icon-precomposed.png",revision:"882d44c1158aad7c26190818517c3735"},{url:"/covid-ampel-widget/apple-touch-icon.png",revision:"ea001489141b83721599b91f1456c2b7"},{url:"/covid-ampel-widget/browserconfig.xml",revision:"47567df77cb0c34606bf4c855cba68cb"},{url:"/covid-ampel-widget/css/about.193f6a5b.css",revision:null},{url:"/covid-ampel-widget/css/app.7af73551.css",revision:null},{url:"/covid-ampel-widget/css/chunk-vendors.403a1bdd.css",revision:null},{url:"/covid-ampel-widget/css/config.4fdfd6a8.css",revision:null},{url:"/covid-ampel-widget/css/help.649c4746.css",revision:null},{url:"/covid-ampel-widget/css/map.471be6cf.css",revision:null},{url:"/covid-ampel-widget/css/vaccination.ff89667d.css",revision:null},{url:"/covid-ampel-widget/google0a43feae4594cb30.html",revision:"fac8edb85225c36d45ed384f5bd8ca37"},{url:"/covid-ampel-widget/help/IMG_6911.jpg",revision:"a39924373c67176712f25013acca2318"},{url:"/covid-ampel-widget/help/IMG_6912.jpg",revision:"88a6ddbd0cb241a7eac309d4977b0e70"},{url:"/covid-ampel-widget/help/IMG_6915.jpg",revision:"a6a4399b81443c303e5249099a559402"},{url:"/covid-ampel-widget/help/IMG_6916.jpg",revision:"f5aebe4691612d8c83b37d59d937e09b"},{url:"/covid-ampel-widget/help/IMG_6917.jpg",revision:"0e8b41e9c50e0b92a4697eba5ffc69a3"},{url:"/covid-ampel-widget/help/android-configure-1.png",revision:"bc5487b7f541ca207bc641f2fdb72c73"},{url:"/covid-ampel-widget/help/android-configure-2.png",revision:"bc5487b7f541ca207bc641f2fdb72c73"},{url:"/covid-ampel-widget/help/android-configure-3.png",revision:"bc5487b7f541ca207bc641f2fdb72c73"},{url:"/covid-ampel-widget/help/android-web-widget.png",revision:"1d15116551dd65ed4c9d486fe34da7c5"},{url:"/covid-ampel-widget/help/ios-glimpse-settings.jpeg",revision:"b987d220c3f50f588f81798f64404a67"},{url:"/covid-ampel-widget/img/coronaampel.bfb4dc9b.png",revision:null},{url:"/covid-ampel-widget/img/ios-add-to-glimpse.c8529bd0.jpg",revision:null},{url:"/covid-ampel-widget/img/ios-app-glimpse.0629000d.jpg",revision:null},{url:"/covid-ampel-widget/img/ios-covid-19-ampel-widget.b1291fd3.jpg",revision:null},{url:"/covid-ampel-widget/img/ios-glimpse-add-widget.95718498.jpg",revision:null},{url:"/covid-ampel-widget/img/ios-glimpse-settings.e44c3dad.jpg",revision:null},{url:"/covid-ampel-widget/img/ios-share.0f7f6b5f.jpg",revision:null},{url:"/covid-ampel-widget/index.css",revision:"3af2560492d49db6bf3a4ac8ef8753c1"},{url:"/covid-ampel-widget/index.html",revision:"7fb55050f4094fd88dc8ef35d841ea1d"},{url:"/covid-ampel-widget/js/about.55754f51.js",revision:null},{url:"/covid-ampel-widget/js/app.c3c3e826.js",revision:null},{url:"/covid-ampel-widget/js/chunk-vendors.e1155f50.js",revision:null},{url:"/covid-ampel-widget/js/config.aac7e5d5.js",revision:null},{url:"/covid-ampel-widget/js/help.c0343bf6.js",revision:null},{url:"/covid-ampel-widget/js/map.9210f93a.js",revision:null},{url:"/covid-ampel-widget/js/vaccination.6e5fc0c6.js",revision:null},{url:"/covid-ampel-widget/manifest.json",revision:"263ae87dc0f50891fbc76e8c1e629f0a"},{url:"/covid-ampel-widget/reset.css",revision:"a8b1a53a286c334097a7f22020b3baf7"},{url:"/covid-ampel-widget/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/covid-ampel-widget/site.webmanifest",revision:"3e43b84f82b8d964c40ba63016e59269"},{url:"/covid-ampel-widget/thumb.png",revision:"3fd2db0cf2ad23d3d61e5a10f9182b40"}],{})}));
//# sourceMappingURL=service-worker.js.map
