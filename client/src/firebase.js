// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernauth-1f8fa.firebaseapp.com",
  projectId: "mernauth-1f8fa",
  storageBucket: "mernauth-1f8fa.appspot.com",
  messagingSenderId: "275613343860",
  appId: "1:275613343860:web:ae09549934a0b1dbcdb121"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);