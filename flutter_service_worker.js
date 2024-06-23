'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "253d19282a451707cc3eac6d632b1b84",
"assets/AssetManifest.bin.json": "dd62b5d90a1d449c77a86de2600aba8c",
"assets/AssetManifest.json": "8d5a6d2eb25a2a43ff4640d7b5bcfea0",
"assets/assets/gallery/image%2520(1).png": "300f481b606e9a329987cfb7248cd4c1",
"assets/assets/gallery/image%2520(10).png": "300f481b606e9a329987cfb7248cd4c1",
"assets/assets/gallery/image%2520(11).png": "300f481b606e9a329987cfb7248cd4c1",
"assets/assets/gallery/image%2520(12).png": "300f481b606e9a329987cfb7248cd4c1",
"assets/assets/gallery/image%2520(2).png": "300f481b606e9a329987cfb7248cd4c1",
"assets/assets/gallery/image%2520(3).png": "300f481b606e9a329987cfb7248cd4c1",
"assets/assets/gallery/image%2520(4).png": "300f481b606e9a329987cfb7248cd4c1",
"assets/assets/gallery/image%2520(5).png": "300f481b606e9a329987cfb7248cd4c1",
"assets/assets/gallery/image%2520(6).png": "300f481b606e9a329987cfb7248cd4c1",
"assets/assets/gallery/image%2520(7).png": "300f481b606e9a329987cfb7248cd4c1",
"assets/assets/gallery/image%2520(8).png": "300f481b606e9a329987cfb7248cd4c1",
"assets/assets/gallery/image%2520(9).png": "300f481b606e9a329987cfb7248cd4c1",
"assets/assets/icon.png": "c6c9a03f346048c0ab17efcbbd733ecd",
"assets/assets/idioms_icons/en.png": "cfcc8b873f0b3c36420f00afd0c837fb",
"assets/assets/idioms_icons/es.png": "4e61d7204ee8b77058e423adb6066a8d",
"assets/assets/images/i_5_8c1.png": "300f481b606e9a329987cfb7248cd4c1",
"assets/assets/images/i_5_8c2.png": "dbebe38061e53c2ad6dc1cb56e873eb7",
"assets/assets/images/i_5_8c3.png": "05cd19480af2d27dfd4e4d967e7ddd88",
"assets/assets/images/i_5_8c4.png": "d9abe45ee29d3c38b335a8e9767f087f",
"assets/assets/images/i_5_8c5.png": "87277c3e0ccfb66185744cee99bf241a",
"assets/assets/images/i_8_1c1.png": "c5e2d7f0d03b8dc08a41b67ec7e2c691",
"assets/assets/images/i_8_1c10.png": "dd3659a8d33df840b35e45d8dcf9e7b9",
"assets/assets/images/i_8_1c11.png": "7d5cdc754ab468e82bd3de623a14cd1a",
"assets/assets/images/i_8_1c12.png": "cf65deb97a6feb88b7c35c07af5f140b",
"assets/assets/images/i_8_1c13.png": "f216c804f1ef21280bfc46fcca7caadc",
"assets/assets/images/i_8_1c14.png": "f5424d9857da4b6000e044f081082c21",
"assets/assets/images/i_8_1c15.png": "3cf3dfb58223f8f90c02bb8243b83efc",
"assets/assets/images/i_8_1c2.png": "e3c3cd61d1519df3199354b50359fcde",
"assets/assets/images/i_8_1c3.png": "96d5bf190caed8429521c3062cd6a64b",
"assets/assets/images/i_8_1c4.png": "43bf89823b8a0c22f31f7dfdd0a71d0d",
"assets/assets/images/i_8_1c5.png": "3a49898fc8a7369d19b4133fb0dd8783",
"assets/assets/images/i_8_1c6.png": "424c8b75e6c19bb79819d5c461630c83",
"assets/assets/images/i_8_1c7.png": "34e1ae95a5eacd20370a6e62cab720d1",
"assets/assets/images/i_8_1c8.png": "c46511bf2d50d76fd6f8c35ffa2deecf",
"assets/assets/images/i_8_1c9.png": "f892996e00e37a387223af02a238ebe4",
"assets/assets/portada.jpg": "28fa6a76da81856e57e7d512f97b6a73",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f02f2b906ffa541f66fc173efd981f6a",
"assets/NOTICES": "32a90e19d3c6632a66e61597b7e53e97",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "408835f8460b41c5b97534f1504b4977",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c77fd02c403571caa23fc11f6412aadf",
"/": "c77fd02c403571caa23fc11f6412aadf",
"main.dart.js": "01f42ab206db943162724bc172b907b1",
"manifest.json": "24916695f0a2233b43b7b2fbbbd784cd",
"version.json": "bcbea426186f6f7a4cacc385b8366530"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
