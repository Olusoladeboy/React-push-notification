/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
const firebaseConfig = {
    apiKey: "AIzaSyAQiPqmIGfAgZI2EmAJ4iDtnNtTxcoCZag",
    authDomain: "airtimeflip-aafa9.firebaseapp.com",
    projectId: "airtimeflip-aafa9",
    storageBucket: "airtimeflip-aafa9.appspot.com",
    messagingSenderId: "734091444995",
    appId: "1:734091444995:web:9dbbec862b48e2aa321f36",
    measurementId: "G-48WBF6ZVW4"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
     const promiseChain = clients
          .matchAll({
               type: "window",
               includeUncontrolled: true,
          })
          .then((windowClients) => {
               for (let i = 0; i < windowClients.length; i++) {
                    const windowClient = windowClients[i];
                    windowClient.postMessage(payload);
               }
          })
          .then(() => {
               return registration.showNotification("my notification title");
          });
     return promiseChain;
});
self.addEventListener("notificationclick", function(event) {
     console.log(event);
});