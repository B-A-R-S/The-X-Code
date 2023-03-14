// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import firebase from "firebase/compat";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARlJEyHRhPbImPgphRURfvD7eIqiKYfFY",
  authDomain: "t1-diabetes-management-68efb.firebaseapp.com",
  projectId: "t1-diabetes-management-68efb",
  storageBucket: "t1-diabetes-management-68efb.appspot.com",
  messagingSenderId: "801774762922",
  appId: "1:801774762922:web:74761387138441df66c9d3"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

// const db = app.firestore();
const auth = firebase.auth()

const firestore = firebase.firestore();


export { firestore, auth };
