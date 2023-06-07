// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqRxsZRjYDgtL34kMlmHPtipuG3rAwb5Y",
  authDomain: "kssfdj.firebaseapp.com",
  projectId: "kssfdj",
  storageBucket: "kssfdj.appspot.com",
  messagingSenderId: "391990541075",
  appId: "1:391990541075:web:7f74e282eee7d79f9738e6",
  measurementId: "G-H1CL99JJ8H",
};

//app nick name is dj-auth

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new  GoogleAuthProvider()
