// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq6maFdfRh9_7BJsx1TruZii3ZtK6bELM",
  authDomain: "coding-challenge-a46ed.firebaseapp.com",
  projectId: "coding-challenge-a46ed",
  storageBucket: "coding-challenge-a46ed.appspot.com",
  messagingSenderId: "461130461023",
  appId: "1:461130461023:web:660e37e4c8197abee610ea",
  measurementId: "G-DW8BC93110"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
