import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBou4EJ0VoD0AUInqWC_LvJ9uxojjJBZ_c",
  authDomain: "shreejienterprise-e4ce5.firebaseapp.com",
  projectId: "shreejienterprise-e4ce5",
  storageBucket: "shreejienterprise-e4ce5.firebasestorage.app",
  messagingSenderId: "693628548007",
  appId: "1:693628548007:web:f195851ad553e462e53c82",
  measurementId: "G-0109HCYPVK",
};

// Initialize Firebase ONCE
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Export Firebase functions
export {
  signInWithEmailAndPassword,
  signOut,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
};