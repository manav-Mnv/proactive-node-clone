import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDcmAzTfDarGw_D9-BQ-B6HFfs-AM6oWi0",
    authDomain: "linkusss.firebaseapp.com",
    databaseURL: "https://linkusss-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "linkusss",
    storageBucket: "linkusss.firebasestorage.app",
    messagingSenderId: "339517297996",
    appId: "1:339517297996:web:a6cd9dfef0fce35c686be9",
    measurementId: "G-LFP1FS4XB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Auth Providers
const googleProvider = new GoogleAuthProvider();

export { app, analytics, auth, db, googleProvider };
