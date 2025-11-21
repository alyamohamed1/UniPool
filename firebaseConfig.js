// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_bU3s5d2wpsHApmPA_O3FwhiRfnQI5GI",
  authDomain: "unipool-910a3.firebaseapp.com",
  projectId: "unipool-910a3",
  storageBucket: "unipool-910a3.firebasestorage.app",
  messagingSenderId: "484920674284",
  appId: "1:484920674284:web:7c63cf0ab5ca51c907e2c9",
  measurementId: "G-JH2WMGY3LZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
