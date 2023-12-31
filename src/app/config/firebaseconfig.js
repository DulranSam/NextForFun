import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDM-6bHvaTc5BUOaj_svTyKERu4rtZIb1g",
  authDomain: "veloxal.firebaseapp.com",
  projectId: "veloxal",
  storageBucket: "veloxal.appspot.com",
  messagingSenderId: "572095969172",
  appId: "1:572095969172:web:0f580ccce8842169a94181",
  measurementId: "G-TH6278CMTF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
