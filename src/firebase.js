// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgVprDOj8emFAMaID538aFQ-8VWndKwhA",
  authDomain: "trackout-finance.firebaseapp.com",
  projectId: "trackout-finance",
  storageBucket: "trackout-finance.appspot.com",
  messagingSenderId: "707048883114",
  appId: "1:707048883114:web:8da693b13999e38c1ae1d3",
  measurementId: "G-HR401JRX5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };