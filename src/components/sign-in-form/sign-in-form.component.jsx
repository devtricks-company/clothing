import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopups,
  SignInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetForm = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await SignInAuthUserWithEmailAndPassword(email,password);
      console.log(response)
      resetForm();
    } catch (error) {}
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopups();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign In With Your Email And Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />

        <div className="buttons-container">
          <Button buttonType="inverted" type="submit">
            Sign In
          </Button>

          <Button buttonType="google" onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
