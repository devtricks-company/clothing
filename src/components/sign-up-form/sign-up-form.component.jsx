import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';

 import './sign-up-form.styles.scss' 
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUPForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
    const resetForm = () => {
      setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert('passowrd do not match');
            return;
        }
        try {
            const {user} =  await createAuthUserWithEmailAndPassword(email,password);
            const userDocRef = await createUserDocumentFromAuth(user,{displayName});
            resetForm();
        } catch (error) {
          if(error.code === "auth/email-already-in-use"){
            alert('User can not created, this email already in use')
          }
            
        }
    }

  const handleChange = (event) => {
    const { name,value } = event.target;
    setFormFields({...formFields,[name]:value})
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign With Your Email And Password</span>
      <form onSubmit={handleSubmit}>
       
        <FormInput
        label="DisplayName"
          type="text"
          name="displayName"
          required
          value={displayName}
          onChange={handleChange}
        />

       
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

        
        <FormInput
        label="Confirm Password"
          type="password"
          name="confirmPassword"
          required
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button  type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUPForm;
