import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import FirebaseModule from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyBXqTsNBHuMlxRzJRJ14q9lhq-h4XOCxaw",
  authDomain: "navis-c0f46.firebaseapp.com",
  databaseURL: "https://navis-c0f46.firebaseio.com",
  projectId: "navis-c0f46",
  storageBucket: "navis-c0f46.appspot.com",
  messagingSenderId: "338809703314",
  appId: "1:338809703314:web:f330aad6d9956398780f4b"
};

let firebaseInitialized;
FirebaseModule.initializeApp(firebaseConfig);
firebaseInitialized = true;

let db;
let storage;

if (firebaseInitialized) {
  // Initialize Cloud Firestore through Firebase
  db = FirebaseModule.firestore();
  // Initialize Storage through Firebase
  storage = FirebaseModule.storage();
}

export const Firebase = firebaseInitialized ? FirebaseModule : null;
export const FirebaseDB = firebaseInitialized ? db : null;
export const FirebaseStorage = firebaseInitialized ? storage : null;
