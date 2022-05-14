
import React from 'react'
import { signInWithGooglePopups,createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const  {user} = await signInWithGooglePopups();
    const userDocRef = await createUserDocumentFromAuth(user);
    
  }
  return (
    <div>
        <h1>I am sign in page</h1>
        <button onClick={logGoogleUser} >Sign in with Google Popups</button>
    </div>
  )
}

export default SignIn