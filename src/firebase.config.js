// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCsz8RjbNZj9b3EQmf2uS7t4LYp_EVHs_Y",
  authDomain: "house-market-c3f34.firebaseapp.com",
  projectId: "house-market-c3f34",
  storageBucket: "house-market-c3f34.appspot.com",
  messagingSenderId: "327428745959",
  appId: "1:327428745959:web:5c79821bfce264290a9042",
  measurementId: "G-Z84BSKMWTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore()