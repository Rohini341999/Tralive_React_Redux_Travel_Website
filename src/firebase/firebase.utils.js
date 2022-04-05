import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDhuZzCrBUSuOx7eW-Kw7uaJEpevGJ0B0g",
  authDomain: "e-commercedb-e0cef.firebaseapp.com",
  projectId: "e-commercedb-e0cef",
  storageBucket: "e-commercedb-e0cef.appspot.com",
  messagingSenderId: "606818069768",
  appId: "1:606818069768:web:7c224310fbb9ba39e090bd",
  measurementId: "G-0HT72Z3PJM",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
