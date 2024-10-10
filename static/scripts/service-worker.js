// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers

const cacheVersion = "v1";

const coreAssets = [
  "fira-code.woff",
  "fira-code.woff2",
  "fira-code-bold.woff",
  "fira-code-bold.woff2",
  "pagefind/pagefind-ui.css",
  "site.webmanifest",
];

// Cache assets on install
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(cacheVersion).then((cache) => {
    return cache.addAll(coreAssets);
  }));
});

// Served cached assets from the cache
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const cachedRequest = coreAssets.includes(url.pathname);

  if (cachedRequest) {
    // Grab the precached asset from the cache
    event.respondWith(caches.open(cacheVersion).then((cache) => {
      return cache.match(event.request.url);
    }));
  } else {
    // Go to the network
    return;
  }
});