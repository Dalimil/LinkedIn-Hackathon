"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/LinkedIn-Hackathon/index.html","89345ad69bc6a331653289eadcf723b6"],["/LinkedIn-Hackathon/static/css/main.3b73f7f9.css","c39005971ebbe22f0cf340b2d1687a10"],["/LinkedIn-Hackathon/static/js/main.ab3c0877.js","3849584ac7efc6e5f3b87041f87afc4e"],["/LinkedIn-Hackathon/static/media/5.1234cd22.jpg","1234cd224e9debdc7038146b9715711a"],["/LinkedIn-Hackathon/static/media/6.f62fff0c.jpg","f62fff0c7747189540a70539e640ef6e"],["/LinkedIn-Hackathon/static/media/connect_active.fb6d8c8e.png","fb6d8c8e3e88d4ab573b26da0098b51c"],["/LinkedIn-Hackathon/static/media/floor-logo.00e95ac1.png","00e95ac1b5d627bbec248347c302f3be"],["/LinkedIn-Hackathon/static/media/floor-plan.e2b5e79d.png","e2b5e79d2d8247416306dff3b08a48ab"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/LinkedIn-Hackathon/index.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});