import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBlmH9qOnbHOljXrRXKc6UUVRD1L0HyyFc",
  authDomain: "crwn-live.firebaseapp.com",
  databaseURL: "https://crwn-live.firebaseio.com",
  projectId: "crwn-live",
  storageBucket: "crwn-live.appspot.com",
  messagingSenderId: "1098720360123",
  appId: "1:1098720360123:web:0431a6cd6491f73fa31b9e",
  measurementId: "G-772WS8ZK6S"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account ' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;