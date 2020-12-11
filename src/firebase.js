// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase in your app
var firebaseConfig = {
    apiKey: "AIzaSyDc3mk2YGkXm5Mw2C2dB2m4MeM4agnaFro",
    authDomain: "fipugram-3bffe.firebaseapp.com",
    projectId: "fipugram-3bffe",
    storageBucket: "fipugram-3bffe.appspot.com",
    messagingSenderId: "725758379747",
    appId: "1:725758379747:web:b732d3c2c6f2ccb69c27d6"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {
    firebase
};