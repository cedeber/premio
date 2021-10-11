importScripts("sw-strategies.js");

/**
 * @type ServiceWorker
 */
const ctx = self;

/* --- Configuration --- */

const appCacheName = "cache-v1";
const preCacheFiles = [];

/* --- Manage requests --- */

ctx.addEventListener("fetch", (fetchEvent) => {
    const requestUrl = new URL(fetchEvent.request.url);

    console.log(requestUrl);

    if (fetchEvent.request.method === "POST") {
        fetchEvent.respondWith(networkOnly(fetchEvent));
    }

    // Apply SW strategies here
    if (/(.+)\.cache\.(.+)/.test(requestUrl.pathname)) {
        return fetchEvent.respondWith(cacheFirst(appCacheName, fetchEvent));
    }

    if (/(.+)\.ping\/(.+)/.test(requestUrl.pathname)) {
        const response = new Response(requestUrl.pathname);

        return fetchEvent.respondWith(response);
    }

    fetchEvent.respondWith(networkFirst(appCacheName, fetchEvent));
});

/* --- Pre-cache some files --- */

ctx.addEventListener("install", (extandableEvent) => {
    extandableEvent.waitUntil(
        caches.open(appCacheName).then((cache) => cache.addAll(preCacheFiles)),
    );
});

/* --- Clear all unused caches --- */

ctx.addEventListener("activate", (extandableEvent) => {
    extandableEvent.waitUntil(
        caches
            .keys()
            .then((cacheNames) =>
                cacheNames
                    .filter((cacheName) => cacheName !== appCacheName)
                    .map((cacheName) => caches.delete(cacheName)),
            ),
    );
});
