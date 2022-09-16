// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSnEh4X0wqydvvAe1Nakaln0oYLrB6iQo",
  authDomain: "biowear-d3dba.firebaseapp.com",
  projectId: "biowear-d3dba",
  storageBucket: "biowear-d3dba.appspot.com",
  messagingSenderId: "398823671062",
  appId: "1:398823671062:web:395643c1dde7834e2dfc37",
  measurementId: "G-ZKZ32PZP3L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
