"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["C:/Users/saenz/Documents/React/build/index.html","e3770f388ad8674aa90611235c926d06"],["C:/Users/saenz/Documents/React/build/static/css/main.21f01f28.css","59beb408ba5b01c3150cc6d14ffbcd91"],["C:/Users/saenz/Documents/React/build/static/js/main.da0de6e3.js","d23196377dcac75c3dde1efb542a4ab0"],["C:/Users/saenz/Documents/React/build/static/media/adidas.8fc6b257.jpg","8fc6b25763cf4e2ec3c4c416acbbba41"],["C:/Users/saenz/Documents/React/build/static/media/albertofermani.325dd87a.jpg","325dd87a3a399734b43c99aecd60ef03"],["C:/Users/saenz/Documents/React/build/static/media/caterpillar.2d608a99.jpg","2d608a99b11154e16a8c957f997f2cd4"],["C:/Users/saenz/Documents/React/build/static/media/converse.340b6771.jpg","340b6771e42a46fb60c72565735d6497"],["C:/Users/saenz/Documents/React/build/static/media/gucci.c186502c.jpg","c186502c3bd1a49b4663f8acb74d3513"],["C:/Users/saenz/Documents/React/build/static/media/jordan.c2197811.jpg","c2197811413343163b392a1b041d9df5"],["C:/Users/saenz/Documents/React/build/static/media/negocio_0.1929d8ae.jpg","1929d8aeeb06d83c4a0618250a6bb656"],["C:/Users/saenz/Documents/React/build/static/media/newbalance.3fbd2222.jpg","3fbd22228f2c38b24e6de4f45dd2cb76"],["C:/Users/saenz/Documents/React/build/static/media/nike.c56217ad.jpg","c56217ada99f3846a1cdcc01febc20f8"],["C:/Users/saenz/Documents/React/build/static/media/producto_estrella_0.dbfde2c2.jpg","dbfde2c22be81544cb1e657b19fbbc19"],["C:/Users/saenz/Documents/React/build/static/media/puma.11f0e77c.jpg","11f0e77ceff082f7f88427026a0dcd30"],["C:/Users/saenz/Documents/React/build/static/media/reebok.0b75e334.jpg","0b75e334603a5c22776934eb77c615b9"],["C:/Users/saenz/Documents/React/build/static/media/skechers.7bc200a4.jpg","7bc200a4972ca5e85af02f1c1bb0de19"],["C:/Users/saenz/Documents/React/build/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["C:/Users/saenz/Documents/React/build/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["C:/Users/saenz/Documents/React/build/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["C:/Users/saenz/Documents/React/build/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["C:/Users/saenz/Documents/React/build/static/media/tu_logo_0.f139224a.jpg","f139224ae8e91db33468da82a0dcaf3f"],["C:/Users/saenz/Documents/React/build/static/media/underarmor.3f9838f0.jpg","3f9838f0c8e2c9976cca58f9e2c717cd"],["C:/Users/saenz/Documents/React/build/static/media/whatsapp.ec69d1fa.png","ec69d1fab1d1b2bd76ab53aab8e982e2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),s=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL("/react/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});