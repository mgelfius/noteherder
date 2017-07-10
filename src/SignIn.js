import React from 'react'

import './SignIn.css'
import quill from './quill.svg'
import googleLogo from './google.svg'
import ghLogo from './github.png'
import { auth, googleProvider, githubProvider, ghAuth } from './base'

const SignIn = () => {
  const authenticate = () => {
    auth.signInWithPopup(googleProvider)
  }

  const authenticateGH = () => {
    ghAuth.signInWithPopup(githubProvider)
  }

  return (
    <div className="SignIn">
      <header className="Header">
        <img src={quill} alt="" />
        <span className="title">Noteherder</span>
      </header>
      <main>
        <h3>Hey, Nerd! You Like Notes?</h3>
        <p>You never know when you'll need to write crap down. In fact, you should probably be taking notes right now.</p>
        
        <button
          className="google"
          onClick={authenticate}
        >
          <img src={googleLogo} alt="" />
          Sign in with Google
        </button>
        <button
          className="github"
          onClick={authenticateGH}
        >
          <img src={ghLogo} alt="" />
          Sign in with GitHub
        </button>
      </main>
    </div>
  )
}

export default SignIn