import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_FIREBASE_APPID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
  apiKey: "AIzaSyDKN-zODpr7FiACwXtSOxHTTU-38UYegyA",
  authDomain: "point-of-sale-restaurant.firebaseapp.com",
  projectId: "point-of-sale-restaurant",
  storageBucket: "point-of-sale-restaurant.appspot.com",
  messagingSenderId: "766332034297",
  appId: "1:766332034297:web:22eabe9b3c36d6fc631628",
  measurementId: "G-95TYCG3PDR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
