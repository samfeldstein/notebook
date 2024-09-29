// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers

const cacheVersion = "v1";

const coreAssets = [
  "/",
  "/index.html",
  "/tags/",
  "/fira-code.woff",
  "/fira-code.woff2",
  "/fira-code-bold.woff",
  "/fira-code-bold.woff2",
  "/site.webmanifest"
];

// On install, cache core assets
self.addEventListener("install", (event) => {
  // Cache core assets
  event.waitUntil(
    caches.open(cacheVersion).then((cache) => {
      for (const asset of coreAssets) {
        cache.add(new Request(asset));
      }
      return cache;
    })
  );
});

// On activate, clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== cacheVersion) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Listen for request events
self.addEventListener("fetch", (event) => {
  // Get the request
  const request = event.request;
  const url = new URL(request.url);

  // Bug fix
  // https://stackoverflow.com/a/49719964
  if (
    event.request.cache === "only-if-cached" &&
    event.request.mode !== "same-origin"
  ) {
    return;
  }

  // Network-first
  if (
    request.headers.get("Accept").includes("text/html") ||
    request.headers.get("Accept").includes("application/xml") ||
    request.headers.get("Accept").includes("text/xml") ||
    request.headers.get("Accept").includes("javascript")
  ) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Create a copy of the response and save it to the cache
          const copy = response.clone();
          event.waitUntil(
            caches.open(cacheVersion).then((cache) => {
              return cache.put(request, copy);
            })
          );

          // Return the response
          return response;
        })
        .catch((error) => {
          // If there's no item in cache, respond with a fallback
          return caches.match(request).then(async (response) => {
            return response || (await caches.match("/offline/"));
          });
        })
    );
  } else {
    // Get everything else from the cache
    event.respondWith(
      caches.match(request).then((response) => {
        return (
          response ||
          fetch(request).then((response) => {
            // Save a copy of it in cache
            const copy = response.clone();
            event.waitUntil(
              caches.open(cacheVersion).then((cache) => {
                return cache.put(request, copy);
              })
            );

            // Return the response
            return response;
          })
        );
      })
    );
  }
});
