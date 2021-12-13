// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import {initializeApp} from 'firebase/app'; 
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCb3HQ6dTLyhcOK8-FaNjl66yAFuIBMT7Q",
    authDomain: "dupnetflix.firebaseapp.com",
    projectId: "dupnetflix",
    storageBucket: "dupnetflix.appspot.com",
    messagingSenderId: "799655212469",
    appId: "1:799655212469:web:9f5f0a5a0dec3c5c2c15fc"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();

  export {auth};
  export default db;