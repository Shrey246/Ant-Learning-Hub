import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKXS3rsZGDFm_C8RcWNGEhi1GFIALWpMI",
  authDomain: "ant-learning-hub.firebaseapp.com",
  projectId: "ant-learning-hub",
  storageBucket: "ant-learning-hub.firebasestorage.app",
  messagingSenderId: "997608259475",
  appId: "1:997608259475:web:8b80b8cf72cf1274823266"
};

// ✅ Prevent multiple initialization
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);