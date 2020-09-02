// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

const isLocalhost = Boolean(
<<<<<<< HEAD
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
=======
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
>>>>>>> 9b458223dd68c02568cbd31842ddb4e6ec90fdf9
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export default function register() {
<<<<<<< HEAD
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
=======
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
>>>>>>> 9b458223dd68c02568cbd31842ddb4e6ec90fdf9
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
      return;
    }

<<<<<<< HEAD
    window.addEventListener('load', () => {
=======
    window.addEventListener("load", () => {
>>>>>>> 9b458223dd68c02568cbd31842ddb4e6ec90fdf9
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log(
<<<<<<< HEAD
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://goo.gl/SC7cgQ'
=======
            "This web app is being served cache-first by a service " +
              "worker. To learn more, visit https://goo.gl/SC7cgQ"
>>>>>>> 9b458223dd68c02568cbd31842ddb4e6ec90fdf9
          );
        });
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
<<<<<<< HEAD
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
=======
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed") {
>>>>>>> 9b458223dd68c02568cbd31842ddb4e6ec90fdf9
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and
              // the fresh content will have been added to the cache.
              // It's the perfect time to display a "New content is
              // available; please refresh." message in your web app.
<<<<<<< HEAD
              console.log('New content is available; please refresh.');
=======
              console.log("New content is available; please refresh.");
>>>>>>> 9b458223dd68c02568cbd31842ddb4e6ec90fdf9
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
<<<<<<< HEAD
              console.log('Content is cached for offline use.');
=======
              console.log("Content is cached for offline use.");
>>>>>>> 9b458223dd68c02568cbd31842ddb4e6ec90fdf9
            }
          }
        };
      };
    })
<<<<<<< HEAD
    .catch(error => {
      console.error('Error during service worker registration:', error);
=======
    .catch((error) => {
      console.error("Error during service worker registration:", error);
>>>>>>> 9b458223dd68c02568cbd31842ddb4e6ec90fdf9
    });
}

function checkValidServiceWorker(swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
<<<<<<< HEAD
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      if (
        response.status === 404 ||
        response.headers.get('content-type').indexOf('javascript') === -1
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
=======
    .then((response) => {
      // Ensure service worker exists, and that we really are getting a JS file.
      if (
        response.status === 404 ||
        response.headers.get("content-type").indexOf("javascript") === -1
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then((registration) => {
>>>>>>> 9b458223dd68c02568cbd31842ddb4e6ec90fdf9
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log(
<<<<<<< HEAD
        'No internet connection found. App is running in offline mode.'
=======
        "No internet connection found. App is running in offline mode."
>>>>>>> 9b458223dd68c02568cbd31842ddb4e6ec90fdf9
      );
    });
}

export function unregister() {
<<<<<<< HEAD
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
=======
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
>>>>>>> 9b458223dd68c02568cbd31842ddb4e6ec90fdf9
      registration.unregister();
    });
  }
}
