// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPz7AXgP8AD9DTY2PjIxmxG_5i-1lIFvk",
  authDomain: "learn-d8a55.firebaseapp.com",
  projectId: "learn-d8a55",
  storageBucket: "learn-d8a55.appspot.com",
  messagingSenderId: "294504306107",
  appId: "1:294504306107:web:cf5ba54a28c72ed8c7a09e",
  measurementId: "G-M8Y8MR94KV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
