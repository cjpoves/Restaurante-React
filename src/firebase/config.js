// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZwo9dpJHFX7m47zqmmo82h85lbhwMF1c",
  authDomain: "web-restaurante-react.firebaseapp.com",
  projectId: "web-restaurante-react",
  storageBucket: "web-restaurante-react.firebasestorage.app",
  messagingSenderId: "561913248683",
  appId: "1:561913248683:web:2f42d54cf47a7b6948b0ee",
  measurementId: "G-YK4V5MSW0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)