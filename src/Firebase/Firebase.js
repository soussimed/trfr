// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI_1djMsxWp7I7wpBs6pPR1yidWlNoguQ",
  authDomain: "trfr-e6dd4.firebaseapp.com",
  projectId: "trfr-e6dd4",
  storageBucket: "trfr-e6dd4.appspot.com",
  messagingSenderId: "1089391170210",
  appId: "1:1089391170210:web:2b3be34a7af02b8966fdfb",
  measurementId: "G-JGQW223LSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);