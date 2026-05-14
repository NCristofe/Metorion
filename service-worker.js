const CACHE = "metorion-v1";
const STATIC = [
    "/",
    "/index.html",
    "/scripts.js",
    "/style.css",
    "/manifest.json",
    "/img/metorion.png",
    "/img/weather.png",
    "/img/icon-climate.png",
    "/img/git-hub-icon.png"
];

self.addEventListener("install", e =>
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC)))
);

self.addEventListener("activate", e =>
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        )
    )
);

self.addEventListener("fetch", e => {
    if (!e.request.url.startsWith(self.location.origin)) return;
    e.respondWith(
        caches.match(e.request).then(cached => cached || fetch(e.request))
    );
});
