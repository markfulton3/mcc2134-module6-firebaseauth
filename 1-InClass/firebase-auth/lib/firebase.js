// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCezTO_lhfPGmS2Ky4dmMI4OaLGAh4YlQY",
  authDomain: "mcc2134-fbauth-markfulton.firebaseapp.com",
  projectId: "mcc2134-fbauth-markfulton",
  storageBucket: "mcc2134-fbauth-markfulton.appspot.com",
  messagingSenderId: "175306995713",
  appId: "1:175306995713:web:6aed5122622ddf1b48a800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;