import React from 'react'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import "firebase/app"
import { auth } from '../firebase'
import firebase from 'firebase/app'

const Login = () => {
  const googleLogin = () => { auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()) }
  const facebookLogin = () => { auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()) }
  
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Ardan Chat!</h2>
        <div className="login-button google" onClick={googleLogin}>
          <GoogleOutlined /> Sign in with Google
        </div>
        <br /><br />
        <div className="login-button facebook" onClick={facebookLogin} >
          <FacebookOutlined /> Sign in with Facebook
        </div>
      </div>
    </div>
  )
}

export default Login
