import React from 'react'
import './Css/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <button>Continue</button>
          </div>
          <div className='btm-fields'>
          <p className='loginsignup-login'>Already have an account? <span>Login here</span> </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continue, i agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp