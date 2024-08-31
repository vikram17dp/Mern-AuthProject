// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernauth-92272.firebaseapp.com",
  projectId: "mernauth-92272",
  storageBucket: "mernauth-92272.appspot.com",
  messagingSenderId: "348242080345",
  appId: "1:348242080345:web:35bcbd9cafa66a158b7748"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;