import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyARhRY2MIm4iSImR_hCrHu-v2i4rt5JDvc",
  authDomain: "crown-db-e2949.firebaseapp.com",
  projectId: "crown-db-e2949",
  storageBucket: "crown-db-e2949.appspot.com",
  messagingSenderId: "416591291316",
  appId: "1:416591291316:web:4dfeca6686b762549108e1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;