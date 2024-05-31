// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMxH86GoI95f5NY6pmMJXa7tNWnHUAXHo",
  authDomain: "tugas-akhir-jeje.firebaseapp.com",
  projectId: "tugas-akhir-jeje",
  storageBucket: "tugas-akhir-jeje.appspot.com",
  messagingSenderId: "853358848489",
  appId: "1:853358848489:web:e37564c1e68647064a4378",
  measurementId: "G-218TRE8XLL",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
