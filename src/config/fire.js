// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqMQZ4DvAZvLd3NLEsq9WCUe7L3QHrRsM",
  authDomain: "repairnet-74117.firebaseapp.com",
  projectId: "repairnet-74117",
  storageBucket: "repairnet-74117.appspot.com",
  messagingSenderId: "863235614701",
  appId: "1:863235614701:web:fa34b77814722ef25d29e4",
  measurementId: "G-4YDGN4G378"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);