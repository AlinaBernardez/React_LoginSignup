// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCk2mpe3uV7C5FuZvo2VhI0vlPL_8RlOUg",
    authDomain: "login-firebase-5986e.firebaseapp.com",
    projectId: "login-firebase-5986e",
    storageBucket: "login-firebase-5986e.appspot.com",
    messagingSenderId: "578403132536",
    appId: "1:578403132536:web:ed6c4eaad397fd98a9398d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth }