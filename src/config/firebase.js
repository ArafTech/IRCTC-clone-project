// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6WWQpGt21tbHoBbEaA2J8Ia8gbA1ca9I",
  authDomain: "irctc-clone-db.firebaseapp.com",
  projectId: "irctc-clone-db",
  storageBucket: "irctc-clone-db.firebasestorage.app",
  messagingSenderId: "67679210271",
  appId: "1:67679210271:web:4b3019ccd7b47355a7fe2a",
  measurementId: "G-PVS539BVN8"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export default app;