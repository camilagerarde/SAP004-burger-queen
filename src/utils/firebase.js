//import firebase from "firebase";
import * as firebase from "firebase/app";
import Rebase from "re-base";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOENT9Bhl9-gWolsXXXPY5_4bZPb2dPEA",
  authDomain: "comic-burger.firebaseapp.com",
  databaseURL: "https://comic-burger.firebaseio.com",
  projectId: "comic-burger",
  storageBucket: "comic-burger.appspot.com",
  messagingSenderId: "710948905821",
  appId: "1:710948905821:web:1e914e92593ffdaa847eb4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database(firebaseConfig);
const config = Rebase.createClass(db);

export default config;
