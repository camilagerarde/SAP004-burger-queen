import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOENT9Bhl9-gWolsXXXPY5_4bZPb2dPEA",
  authDomain: "comic-burger.firebaseapp.com",
  databaseURL: "https://comic-burger.firebaseio.com",
  projectId: "comic-burger",
  storageBucket: "comic-burger.appspot.com",
  messagingSenderId: "710948905821",
  appId: "1:710948905821:web:1e914e92593ffdaa847eb4",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
