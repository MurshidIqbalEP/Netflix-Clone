// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const {
  VITE_APP_apiKey,
  VITE_APP_authDomain,
  VITE_APP_projectId,
  VITE_APP_storageBucket,
  VITE_APP_messagingSenderId,
  VITE_APP_appId,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_APP_apiKey,
  authDomain: VITE_APP_authDomain,
  projectId: VITE_APP_projectId,
  storageBucket: VITE_APP_storageBucket,
  messagingSenderId: VITE_APP_messagingSenderId,
  appId: VITE_APP_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
