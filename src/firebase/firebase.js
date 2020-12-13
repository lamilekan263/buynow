import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoixv7hxPf_9Bnk4Ve9RSxT7v86hVOjs8",
  authDomain: "mystore-5c2cc.firebaseapp.com",
  databaseURL: "https://mystore-5c2cc.firebaseio.com",
  projectId: "mystore-5c2cc",
  storageBucket: "mystore-5c2cc.appspot.com",
  messagingSenderId: "566608732345",
  appId: "1:566608732345:web:0b4c7dd938c6f46fcc7b68",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();

export { firestore, auth };