// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "[[YOUR API KEY]]",
  authDomain: "[[YOUR AUTH DOMAIN]]",
  projectId: "[[YOUR PROJECT ID]]",
  storageBucket: "[[YOUR STORAGE BUCKET]]",
  messagingSenderId: "[[YOUR MESSAGING SENDER ID]]",
  appId: "[[YOUR APP ID]]"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;