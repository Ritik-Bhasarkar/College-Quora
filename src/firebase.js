import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDqFnHeFCkVs6FHrfAoMtq4C_oG7gOT2Xo",
  authDomain: "collage-quora.firebaseapp.com",
  projectId: "collage-quora",
  storageBucket: "collage-quora.appspot.com",
  messagingSenderId: "516084387737",
  appId: "1:516084387737:web:6bc04de3f87263a9c40d08",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export const auth = firebase.auth();

export default db;