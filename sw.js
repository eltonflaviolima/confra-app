// Service Worker para Confra JBSN — Cache Resiliente Offline
const CACHE_NAME = 'confra-jbsn-v7';
const ASSETS = [
  './',
  './index.html',
  './host.html',
  './tela.html',
  './styles.css',
  './app.js',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch(err => console.log('Cache parcial instalado:', err));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.url.includes('/api/') || e.request.method !== 'GET') {
    return;
  }

  // Network-First para HTML, CSS e JS para atualizações imediatas
  const isCodeAsset = e.request.mode === 'navigate' || 
                      e.request.url.endsWith('.html') || 
                      e.request.url.endsWith('.css') || 
                      e.request.url.endsWith('.js') ||
                      e.request.url.includes('.css?') ||
                      e.request.url.includes('.js?');

  if (isCodeAsset) {
    e.respondWith(
      fetch(e.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Cache-First para áudios, imagens e fontes
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
