// Service Worker para Confra JBSN — Cache Resiliente Offline
const CACHE_NAME = 'confra-jbsn-v2';
const ASSETS = [
  './',
  './index.html',
  './tela.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './sounds/countdown.wav',
  './sounds/countdown-3-2-1-go.mp3',
  './sounds/super-smash-bros-mario-luigi-victory.mp3',
  './sounds/naruto-sad-music-instant.mp3',
  './sounds/celebration.mp3',
  './sounds/whistle.wav',
  './sounds/buzzer.wav',
  './sounds/victory.wav',
  './sounds/airhorn.wav',
  './sounds/drumroll.wav',
  './sounds/errou.wav',
  './sounds/applause.wav',
  './sounds/tension.wav',
  'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,700&family=Noto+Sans:wght@400;500;600;700;800&display=swap'
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
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request).catch(() => caches.match('./index.html'));
    })
  );
});
