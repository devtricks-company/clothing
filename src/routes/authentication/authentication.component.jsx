import React, { useEffect } from "react";
import {
  signInWithGooglePopups,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.utils";
import './authentication.styles.scss'

import { getRedirectResult } from "firebase/auth";
import SignUPForm from "../../components/sign-up-form/sign-up-form.component";
import Button from '../../components/button/button.component';
import SignInForm from "../../components/sign-in-form/sign-in-form.component";


const Authentication = () => {
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
    <div className="authentication-container">
      <h1>Sign In page</h1>
      {/* <Button buttonType='google'   onClick={logGoogleUser}>Sign in with Google Popups</Button> */}
      <SignInForm />
      <SignUPForm />
    </div>
  );
};

export default Authentication;
