
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-39a86.firebaseapp.com",
  projectId: "fir-39a86",
  storageBucket: "fir-39a86.firebasestorage.app",
  messagingSenderId: "88498080935",
  appId: "1:88498080935:web:a6beab934ae645f01e1f82"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}