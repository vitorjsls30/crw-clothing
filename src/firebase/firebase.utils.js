import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD3wTDRmtwH0ZuOL37LvsqS9WgpIGmlHik",
  authDomain: "crw-db-88cf9.firebaseapp.com",
  projectId: "crw-db-88cf9",
  storageBucket: "crw-db-88cf9.appspot.com",
  messagingSenderId: "164697359795",
  appId: "1:164697359795:web:ba12e11fef3487b69477c6",
  measurementId: "G-H6PZ1CP140"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;