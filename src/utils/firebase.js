// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHS3pobUq3Wxqe6Q4CWWcH0Vfbf_9--vw",
  authDomain: "clone-react-b030a.firebaseapp.com",
  projectId: "clone-react-b030a",
  storageBucket: "clone-react-b030a.appspot.com",
  messagingSenderId: "310710488236",
  appId: "1:310710488236:web:ef9333107a0f9f5dc02309",
  measurementId: "G-HG45PT9D7S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
