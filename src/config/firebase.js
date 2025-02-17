// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6WWQpGt21tbHoBbEaA2J8Ia8gbA1ca9I",
  authDomain: "irctc-clone-db.firebaseapp.com",
  projectId: "irctc-clone-db",
  storageBucket: "irctc-clone-db.appspot.com", // Fixed storageBucket
  messagingSenderId: "67679210271",
  appId: "1:67679210271:web:4b3019ccd7b47355a7fe2a",
  measurementId: "G-PVS539BVN8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore and get a reference to the service
export const db = getFirestore(app);
