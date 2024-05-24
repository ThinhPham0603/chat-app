// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-3329e.firebaseapp.com",
  projectId: "chat-app-3329e",
  storageBucket: "chat-app-3329e.appspot.com",
  messagingSenderId: "797203906547",
  appId: "1:797203906547:web:5211007f326c7f932f9c86",
  measurementId: "G-HB7YCQMVR1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage();