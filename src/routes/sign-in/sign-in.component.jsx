import React, { useEffect } from "react";
import {
  signInWithGooglePopups,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.utils";

import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
     if(response){
       const userDocRef = await createUserDocumentFromAuth(response.user);
     }
    })();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopups();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>I am sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popups</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
