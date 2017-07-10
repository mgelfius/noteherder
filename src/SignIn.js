import React from 'react'
import './SignIn.css'
import {auth, googleProvider} from './base'

const SignIn = ({handleAuth}) =>{
    const authenticate = () =>{
        auth.signInWithPopup(googleProvider)
            .then(handleAuth)
    }

    return (
    <div className="Sign In">
        <h1>SIGN IN</h1>
        <button onClick={authenticate}>Sign In</button>
    </div>
    )
}

export default SignIn