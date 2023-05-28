// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDqFnHeFCkVs6FHrfAoMtq4C_oG7gOT2Xo",
  authDomain: "collage-quora.firebaseapp.com",
  projectId: "collage-quora",
  storageBucket: "collage-quora.appspot.com",
  messagingSenderId: "516084387737",
  appId: "1:516084387737:web:6bc04de3f87263a9c40d08",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider};
export default db;