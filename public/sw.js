if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-e032be30"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"tks0SWzSqdRNzzMcWEQoq"},{url:"/_next/static/chunks/16b04188c12afe7b9634c8d42f0146af07354898.c970a213c52d37dfe440.js",revision:"2bd887dd78d7eaaa9532fb60dba09f3c"},{url:"/_next/static/chunks/332797ce5385081fd93315f05e422b67db0865cf.329513c96ef2b93dc0e8.js",revision:"3d54ba565c2a07a299ef8ea2e3883bd0"},{url:"/_next/static/chunks/ad15fc9594b5b748459dda686f9c5f7217940668.4c2501f4210a9ffbeb38.js",revision:"d07f9aac424d1afc9e71ce19466aaaa9"},{url:"/_next/static/chunks/be02f058de42dc9a100d2182afe1bf5dd0559d9e.770a6e9d86290eb856c0.js",revision:"2c5cc5c44687790e0af06279771e19a1"},{url:"/_next/static/chunks/c09f368664461a2e936bb5164708ca8df2a16b98.235802bd208b718e733f.js",revision:"e348a71df0706dc0e7e0e724de226b5c"},{url:"/_next/static/chunks/framework.d4c2dabb14a39843ff12.js",revision:"5e1e609a83432858171b7f9cefb68eaf"},{url:"/_next/static/css/1a0a2c47bba9f5613022.css",revision:"d3e3345f9592736f542af710583310cd"},{url:"/_next/static/runtime/main-15b646bbf6dac45cef20.js",revision:"4150eece74a0b1f1a328b2a7e3c12d95"},{url:"/_next/static/runtime/polyfills-bbde86c098966bdf3010.js",revision:"2da43772c291559dc708eca3312ebaa0"},{url:"/_next/static/runtime/webpack-b65cab0b00afd201cbda.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/_next/static/tks0SWzSqdRNzzMcWEQoq/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/tks0SWzSqdRNzzMcWEQoq/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/tks0SWzSqdRNzzMcWEQoq/pages/404.js",revision:"4c19d6aad2279bafd4fd7fca1a7e9a8f"},{url:"/_next/static/tks0SWzSqdRNzzMcWEQoq/pages/_app.js",revision:"12f11bd4225ffac39a2cb1325ba082b0"},{url:"/_next/static/tks0SWzSqdRNzzMcWEQoq/pages/_error.js",revision:"c0d9a9eae2c179a5a392824646b8dd73"},{url:"/_next/static/tks0SWzSqdRNzzMcWEQoq/pages/download.js",revision:"362bf9a5665fe4ea608d235eee61f45c"},{url:"/_next/static/tks0SWzSqdRNzzMcWEQoq/pages/game.js",revision:"4070eead23c4b180a4a8c5f4f637596d"},{url:"/_next/static/tks0SWzSqdRNzzMcWEQoq/pages/game/[slug].js",revision:"68137392f0477cbd9b3de6e4a2c43f01"},{url:"/_next/static/tks0SWzSqdRNzzMcWEQoq/pages/how-to-download.js",revision:"37e61445a2a8d256a3c3e2448c70f5c6"},{url:"/_next/static/tks0SWzSqdRNzzMcWEQoq/pages/index.js",revision:"ea31bba1453f5d1d8021f0d7bf68b6a2"},{url:"/icons/favicon-16x16.png",revision:"79beb14616a75648eab288f847231610"},{url:"/icons/favicon-32x32.png",revision:"628af2c23bac985f168cf3d460be016a"},{url:"/icons/favicon.ico",revision:"940cc6bd3bb401fc3be83df3dfd09488"},{url:"/icons/icon-128x128.png",revision:"db7481a04968b3ad4716436d30b3e409"},{url:"/icons/icon-144x144.png",revision:"689a1926530ed6ca26db537029c1dfd7"},{url:"/icons/icon-152x152.png",revision:"98af072da209b3b297308717b06ea86c"},{url:"/icons/icon-192x192.png",revision:"7ab8c82581552c7558c5b009ffcb3cd2"},{url:"/icons/icon-384x384.png",revision:"aae6d1f552c78e06bf42aae2462a98fa"},{url:"/icons/icon-512x512.png",revision:"837ab4469c705c188326cec571ecb227"},{url:"/icons/icon-72x72.png",revision:"cb6e3fb9db7db52f0986da1ff9bab188"},{url:"/icons/icon-96x96.png",revision:"7d8348b60cdd985bd24b48cb56855c1a"},{url:"/images/download-background.png",revision:"4290552c1f410988b1fe0312b4a567ce"},{url:"/launcher.txt",revision:"f934135a6a8c40943cdc874fdf491f1b"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
