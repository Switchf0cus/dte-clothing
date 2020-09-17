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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
          } catch (error) {
            console.log('error creating user', error.message);
          }
      }
      return userRef;
  }






  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;