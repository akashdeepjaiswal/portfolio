/* =============================================
   SERVICE WORKER — Offline Caching & PWA
   ============================================= */

const CACHE_NAME = 'aj-portfolio-v3';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './icons/tech/html5.svg',
    './icons/tech/css3.svg',
    './icons/tech/javascript.svg',
    './icons/tech/react.svg',
    './icons/tech/vuejs.svg',
    './icons/tech/git.svg',
    './icons/tech/webpack.svg',
    './icons/tech/bootstrap.svg',
    './images/profile.jpg'
];

// Install — cache core assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys
                    .filter((key) => key !== CACHE_NAME)
                    .map((key) => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

// Fetch — network-first for HTML, cache-first for static assets & fonts
self.addEventListener('fetch', (event) => {
    const { request } = event;

    // Skip non-GET requests
    if (request.method !== 'GET') return;

    // HTML: network-first, fallback to cache
    if (request.headers.get('accept')?.includes('text/html')) {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
                    return response;
                })
                .catch(() => caches.match(request) || caches.match('./index.html'))
        );
        return;
    }

    // Static Assets & CDNs: cache-first, fallback to network
    event.respondWith(
        caches.match(request).then((cached) => {
            if (cached) return cached;

            return fetch(request).then((response) => {
                if (response.ok && (request.url.startsWith(self.location.origin) || request.url.includes('fonts'))) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
                }
                return response;
            });
        })
    );
});
