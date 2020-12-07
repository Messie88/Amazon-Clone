// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQsAW-Tz1vqMBLKMaAtKXgOwRpAYhnANc",
  authDomain: "clone-f932b.firebaseapp.com",
  databaseURL: "https://clone-f932b.firebaseio.com",
  projectId: "clone-f932b",
  storageBucket: "clone-f932b.appspot.com",
  messagingSenderId: "432205561029",
  appId: "1:432205561029:web:258556751506d6b63804ac",
  measurementId: "G-NW7KL268FD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore = firebaseApp.firestore();
const auth = firebase.auth();
auth.useDeviceLanguage();

//Authenticate with Google
var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { firestore, auth };
