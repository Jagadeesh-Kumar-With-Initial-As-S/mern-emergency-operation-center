// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "disaster-management-38fe4.firebaseapp.com",
  projectId: "disaster-management-38fe4",
  storageBucket: "disaster-management-38fe4.appspot.com",
  messagingSenderId: "66393027968",
  appId: "1:66393027968:web:c0bf90a4cfbac847867d65",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
