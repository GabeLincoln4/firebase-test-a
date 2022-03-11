// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0ehpqV2LTLKtuaI8O5vbBywJmNc5fUyc",
  authDomain: "fir-test-a-e7bd2.firebaseapp.com",
  projectId: "fir-test-a-e7bd2",
  storageBucket: "fir-test-a-e7bd2.appspot.com",
  messagingSenderId: "270479090969",
  appId: "1:270479090969:web:38a9db091e8dd25ff25188",
  measurementId: "G-5E25J3J8V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);