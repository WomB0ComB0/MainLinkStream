const staticCacheName = "site-static-v1";
const dynamicCacheName = "site-dynamic-v1";
const cacheAssets = [
  "/",
  // Icons
  "index.html",
  // "src/assets/Images/logo512.png",
  // "src/assets/Images/logo.png",
  // "src/assets/Images/logo.png",
  // "src/assets/Images/logo.png",
  // "src/assets/Images/logo.png",
  // "src/assets/Images/logo.png",
  // "src/assets/Images/logo.png",
  // "src/assets/Images/logo.png",
];
self.addEventListener("install", (event) => { // Reinstalled whenever the file is changed and saved
  console.log("Service Worker: installed");
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("Service Worker: caching files");
      cache.addAll(cacheAssets);
    })
  );
});
writeToConsole = false; //for debugging
consoleLog = function (message) {
  if (writeToConsole) {
    console.log(message);
  }
};

const limitCacheSize = (name, size) => { // limit caches 
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};
self.addEventListener("activate", (event) => { 
  console.log("Service Worker: activated");
  const cacheWhitelist = [];
  cacheWhitelist.push(staticCacheName);
  cacheWhitelist.push(dynamicCacheName);
  event.waitUntil(
    clients.claim(), // This method allows an active service worker to set itself as the controller for all clients within its scope.
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (!cacheWhitelist.includes(cacheName)) {
          return caches.delete(cacheName);
        }
      })
    ))
  );
});
self.addEventListener("fetch", (event) => {
  console.log("Service Worker: fetching");
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      return cacheRes || fetch(event.request).then((fetchRes) => {
        return caches.open(dynamicCacheName).then((cache) => {
          cache.put(event.request.url, fetchRes.clone());
          limitCacheSize(dynamicCacheName, 15); // Limit cache size
          return fetchRes;
        });
      });
    })
  );
});

self.addEventListener("install", (event) => { // Call install event
  // console.log("Service Worker: installed");
  event.waitUntil(
    caches
      .open(staticCacheName)
      .then(cache => {
        // console.log("Service Worker: caching files");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});