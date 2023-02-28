// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAUwhixBLN-DBn8YVXiGcQ6Q0hb1_AAFWg",
  authDomain: "filmyverse-b7ed0.firebaseapp.com",
  projectId: "filmyverse-b7ed0",
  storageBucket: "filmyverse-b7ed0.appspot.com",
  messagingSenderId: "65254441227",
  appId: "1:65254441227:web:cf89c97a6b6e3b2126e20e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export default app;