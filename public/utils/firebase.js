import firebase from "firebase";
import Rebase from "re-base";

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

// import firebase from 'firebase';
// import 'firebase/firestore';
// import 'firebase/database';

// const config = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
// };

// firebase.initializeApp(config);

// export default firebase;
