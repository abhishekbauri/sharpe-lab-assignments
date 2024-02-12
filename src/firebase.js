/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,

  // apiKey: "AIzaSyBy6NSCjxP71hkYNTCCwHhJKMkvqh4sMA0",
  // authDomain: "sharp-lab-payment.firebaseapp.com",
  // projectId: "sharp-lab-payment",
  // storageBucket: "sharp-lab-payment.appspot.com",
  // messagingSenderId: "840800354685",
  // appId: "1:840800354685:web:58db4d9359cf9b7527cc14",
  // databaseURL: "https://sharp-lab-payment-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
