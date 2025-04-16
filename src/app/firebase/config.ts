'use client';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIySNV9A80C7ls6rezTJMMfSNozFhLHgE",
  authDomain: "k-apparel.firebaseapp.com",
  projectId: "k-apparel",
  storageBucket: "k-apparel.firebasestorage.app",
  messagingSenderId: "1075019119349",
  appId: "1:1075019119349:web:3159feedadf668cefaa3bc",
  measurementId: "G-YRDVLR7CE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);