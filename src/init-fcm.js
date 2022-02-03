import firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAQiPqmIGfAgZI2EmAJ4iDtnNtTxcoCZag",
    authDomain: "airtimeflip-aafa9.firebaseapp.com",
    projectId: "airtimeflip-aafa9",
    storageBucket: "airtimeflip-aafa9.appspot.com",
    messagingSenderId: "734091444995",
    appId: "1:734091444995:web:9dbbec862b48e2aa321f36",
    measurementId: "G-48WBF6ZVW4",
});
const messaging = initializedFirebaseApp.messaging();
export { messaging };