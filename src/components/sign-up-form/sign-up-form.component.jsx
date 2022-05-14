import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUPForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert('passowrd do not match');
            return;
        }
        try {
            const response =  await createAuthUserWithEmailAndPassword(email,password);
            console.log(response);
        } catch (error) {
            console.log('user created encounterd an error',error);
        }
    }

  const handleChange = (event) => {
    const { name,value } = event.target;
    setFormFields({...formFields,[name]:value})
  };
  return (
    <div>
      <h1>Sign With Your Email And Password</h1>
      <form onSubmit={handleSubmit}>
        <label>Dispalay Name</label>
        <input
          type="text"
          name="displayName"
          required
          value={displayName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          required
          value={confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUPForm;
