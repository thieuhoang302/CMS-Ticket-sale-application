// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmN4EEHRCXFS83RJMyP5w9BZlXf_bXSjw",
  authDomain: "alta-tuan1.firebaseapp.com",
  databaseURL: "https://alta-tuan1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "alta-tuan1",
  storageBucket: "alta-tuan1.appspot.com",
  messagingSenderId: "1044718854490",
  appId: "1:1044718854490:web:7471ec9e3315b45cd61363",
  measurementId: "G-1VL46RPWWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);