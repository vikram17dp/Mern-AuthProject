// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication if needed
import { getFirestore } from "firebase/firestore"; // Import Firestore if needed
import { getStorage } from "firebase/storage"; // Import Firebase Storage if needed
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
export const auth = getAuth(app); // Firebase Authentication
export const db = getFirestore(app); // Firestore Database
export const storage = getStorage(app); // Firebase Storage

export default app;