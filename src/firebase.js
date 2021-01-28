import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTwAssO1eaBihxtEMDMBz7PDWv5Huv-zA",
  authDomain: "vuetalk-f64e9.firebaseapp.com",
  projectId: "vuetalk-f64e9",
  storageBucket: "vuetalk-f64e9.appspot.com",
  messagingSenderId: "40380501769",
  appId: "1:40380501769:web:c87e5b2037639f760c4dd8"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(),
  auth = firebase.auth(),
  storage = firebase.storage(),
  fb = firebase;

export { fb, db, auth, storage };
