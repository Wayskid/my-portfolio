import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZQ0eJP8hPk1KKcJaVsQo-lBZGtuPQepE",
  authDomain: "portfolio-e9062.firebaseapp.com",
  projectId: "portfolio-e9062",
  storageBucket: "portfolio-e9062.appspot.com",
  messagingSenderId: "905208646275",
  appId: "1:905208646275:web:46e12a81de5257c39929b6",
  measurementId: "G-YBL67600W0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
