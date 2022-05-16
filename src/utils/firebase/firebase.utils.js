import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8g2bufC2tKqU0Brm_J58yWNv02KCTRHI",
  authDomain: "clothing-v2.firebaseapp.com",
  projectId: "clothing-v2",
  storageBucket: "clothing-v2.appspot.com",
  messagingSenderId: "754940052339",
  appId: "1:754940052339:web:5a6ead46cf3b2fc8ecbb06",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopups = () =>
  signInWithPopup(auth, googleprovider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleprovider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInoformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);



  const userSnapShot = await getDoc(userDocRef);



  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInoformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, passwrod) => {
  if (!email || !passwrod) return;
  return await createUserWithEmailAndPassword(auth, email, passwrod);
};
export const SignInAuthUserWithEmailAndPassword = async (email, passwrod) => {
  if (!email || !passwrod) return;
  return await signInWithEmailAndPassword(auth, email, passwrod);
};
