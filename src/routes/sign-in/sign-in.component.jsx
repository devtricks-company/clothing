import React, { useEffect } from "react";
import {
  signInWithGooglePopups,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.utils";


import { getRedirectResult } from "firebase/auth";
import SignUPForm from "../../components/sign-up-form/sign-up-form.component";
import Button from '../../components/button/button.component';


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
      <Button buttonType='google'   onClick={logGoogleUser}>Sign in with Google Popups</Button>
      
      <SignUPForm />
    </div>
  );
};

export default SignIn;
