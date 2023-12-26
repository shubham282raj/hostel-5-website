// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxU0EZ3WcfNy88lgaodRWrh0LvjIP2hRo",
  authDomain: "hostel5-backend.firebaseapp.com",
  projectId: "hostel5-backend",
  storageBucket: "hostel5-backend.appspot.com",
  messagingSenderId: "759811282745",
  appId: "1:759811282745:web:979fc6a8718dc0cddffae8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getFirestore(app);
export const storage = getStorage(app);
