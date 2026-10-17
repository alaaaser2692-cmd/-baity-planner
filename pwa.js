/* PWA glue: registers the offline cache and asks the browser to keep the data. */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').catch(function () {});
  });
}
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persist().catch(function () {});
}
