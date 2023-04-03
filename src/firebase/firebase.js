// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { getStorage } from "firebase/storage";
import 'firebase/compat/storage';  // <----

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRtWW-VY3VWn3-u4i5gBuTlg8W-w0H-ec",
  authDomain: "push-452dc.firebaseapp.com",
  databaseURL: "https://push-452dc.firebaseio.com",
  projectId: "push-452dc",
  storageBucket: "push-452dc.appspot.com",
  messagingSenderId: "774095950303",
  appId: "1:774095950303:web:bc08b33d2050c77277f46a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const storage = app.storage();
const db = app.firestore();


export { db, storage }
export default app
