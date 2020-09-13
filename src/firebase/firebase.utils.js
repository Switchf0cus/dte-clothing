import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQ12hNtOAkYw-uHOtgdYvkR7QfigRsAog",
    authDomain: "dte-clothing.firebaseapp.com",
    databaseURL: "https://dte-clothing.firebaseio.com",
    projectId: "dte-clothing",
    storageBucket: "dte-clothing.appspot.com",
    messagingSenderId: "46081413496",
    appId: "1:46081413496:web:4866ac3fe4c359d025f88d",
    measurementId: "G-TD6QYVR82R"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;