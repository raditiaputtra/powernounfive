// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-ce2pKWrx2MG9vBhj4RblEKkzIwwpQDY",
  authDomain: "mipa-5-banget-cuy.firebaseapp.com",
  projectId: "mipa-5-banget-cuy",
  storageBucket: "mipa-5-banget-cuy.appspot.com",
  messagingSenderId: "426267112501",
  appId: "1:426267112501:web:8ce046ab9b2602c17cad7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();