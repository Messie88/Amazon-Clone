import firebase from "firebase";

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

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
