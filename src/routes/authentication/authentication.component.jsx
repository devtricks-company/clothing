import React, { useEffect } from "react";

import SignUPForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss'

const Authentication = () => {
  

  return (
    <div className="authentication-container">
         
      <SignInForm />
      <SignUPForm />
    </div>
  );
};

export default Authentication;
