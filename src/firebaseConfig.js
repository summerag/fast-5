import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyALmBMDzE_umoNJhBipjNhAjHrZIelO-0A",
    authDomain: "fast-5.firebaseapp.com",
    projectId: "fast-5",
    storageBucket: "fast-5.appspot.com",
    messagingSenderId: "4016694933",
    appId: "1:4016694933:web:78787f1b95866010c5dd9c",
    measurementId: "G-S2660BD62H"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

export { db }