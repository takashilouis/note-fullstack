// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn8CR1TpUL6vsJqAQV8Xfw3rRFBbXci9I",
  authDomain: "note-fullstack-59bc4.firebaseapp.com",
  projectId: "note-fullstack-59bc4",
  storageBucket: "note-fullstack-59bc4.appspot.com",
  messagingSenderId: "92946731842",
  appId: "1:92946731842:web:29ce40d1fd5bd0b2f4eedb",
  measurementId: "G-VG816KHVP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);