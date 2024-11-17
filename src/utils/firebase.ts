// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwRtcIO4MuLQPL_Vaa0D_FSCVrnUIupfs",
  authDomain: "vue-firebase-c446f.firebaseapp.com",
  projectId: "vue-firebase-c446f",
  storageBucket: "vue-firebase-c446f.firebasestorage.app",
  messagingSenderId: "851416943108",
  appId: "1:851416943108:web:c734ec6a9625ede3078351",
  measurementId: "G-RSEZPVWFBM",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
