import firebase from "./firebase";

export default () => {
  const user = firebase.auth().currentUser;
  const result = user ? true : false;
  return result;
};
