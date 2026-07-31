const CACHE = 'p4-exercises-v1';
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/exercises/straight-leg-raise.webp",
  "./assets/exercises/hip-abduction-sidelying.webp",
  "./assets/exercises/long-arc-quad.webp",
  "./assets/exercises/clamshell.webp",
  "./assets/exercises/hip-abduction-standing.webp",
  "./assets/exercises/sit-to-stand.webp",
  "./assets/exercises/hip-abduction-counter.webp",
  "./assets/exercises/single-knee-to-chest.webp",
  "./assets/exercises/hip-extension.webp",
  "./assets/exercises/hip-adduction-squeeze.webp",
  "./assets/exercises/single-leg-stance.webp",
  "./assets/exercises/standing-hamstring-curls.webp"
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./index.html'))));
});
