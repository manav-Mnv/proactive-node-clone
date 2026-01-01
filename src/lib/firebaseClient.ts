import { initializeApp } from "firebase/app";
import { getMessaging, Messaging } from "firebase/messaging";
import { getAuth, Auth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "linkus-e89c8.firebaseapp.com",
    projectId: "linkus-e89c8",
    storageBucket: "linkus-e89c8.firebasestorage.app",
    messagingSenderId: "534602428026",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
// We export these so they can be imported and used in other components
export const auth: Auth = getAuth(app);
export const messaging: Messaging = getMessaging(app);

export default app;
