// Service worker: caches the app shell so Notes & Reminders works with no
// network at all once it has been opened one time. Your note/reminder data
// itself lives in localStorage on your device, not in this cache.

var CACHE_NAME = "notes-reminders-shell-v1";
var SHELL_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(SHELL_FILES);
    }).then(function(){
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function(event){
  event.waitUntil(
    caches.keys().then(function(names){
      return Promise.all(
        names.filter(function(n){ return n !== CACHE_NAME; })
             .map(function(n){ return caches.delete(n); })
      );
    }).then(function(){
      return self.clients.claim();
    })
  );
});

// Cache-first for our own app-shell files; everything else (e.g. Google's
// sign-in script, Drive API calls) goes straight to the network untouched,
// since those only happen when you're actually online and using backup.
self.addEventListener("fetch", function(event){
  var url = new URL(event.request.url);
  if(url.origin !== self.location.origin){
    return; // let cross-origin requests (Google APIs) pass through normally
  }
  event.respondWith(
    caches.match(event.request).then(function(cached){
      if(cached) return cached;
      return fetch(event.request).then(function(response){
        if(response && response.status === 200){
          var copy = response.clone();
          caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, copy); });
        }
        return response;
      }).catch(function(){
        // offline and not cached — fall back to the app shell itself
        return caches.match("./index.html");
      });
    })
  );
});
