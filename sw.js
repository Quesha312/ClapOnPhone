const CACHE = 'clapfind-v1';
const ASSETS = [
  '/clap-find-my-phone/',
  '/clap-find-my-phone/index.html',
  '/clap-find-my-phone/manifest.json',
];

self.addEventListener('install', e =>
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)))
);

self.addEventListener('fetch', e =>
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  )
);
