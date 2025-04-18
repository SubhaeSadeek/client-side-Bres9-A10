// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ4ZBGY-SNNjNCeknRhSVD-zjSaRA7O60",
  authDomain: "chill-gamer-6eb30.firebaseapp.com",
  projectId: "chill-gamer-6eb30",
  storageBucket: "chill-gamer-6eb30.firebasestorage.app",
  messagingSenderId: "348200533449",
  appId: "1:348200533449:web:2b630a91abf4eed7e4bc18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);