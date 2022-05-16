import React, { useState,useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopups,
  SignInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";
import { UserContext } from "../../context/user-context/user-context";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const {setCurrentUser} = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetForm = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await SignInAuthUserWithEmailAndPassword(email,password);
      setCurrentUser(user);
      resetForm();
    } catch (error) {
      switch(error.code){
        case "auth/user-not-found":
          alert('no user associated with this email');
          break;

        case 'auth/wrong-password':
          alert('Incorrect Password for email');
          break;  
         default:
           console.log(error);

      }
    }
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
          <Button  type="submit">
            Sign In
          </Button>

          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
