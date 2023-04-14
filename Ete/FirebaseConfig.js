// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat";
import 'firebase/auth';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZQaTm2XxcpVXHwYr_rb_e1y7pnR-MAR0",
    authDomain: "project-ete-625e5.firebaseapp.com",
    databaseURL: "https://project-ete-625e5-default-rtdb.firebaseio.com",
    projectId: "project-ete-625e5",
    storageBucket: "project-ete-625e5.appspot.com",
    messagingSenderId: "493967204091",
    appId: "1:493967204091:web:d4b18a3ff3da7eb4461a5e",
    measurementId: "G-ZFPSFD9ZDX"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()
const db = firebase.database()
export { db }
export { auth };