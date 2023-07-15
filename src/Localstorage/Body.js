import React from 'react'
import './BankApp.css'
// import data from  './data.js'

export default function body() {

  return (
    <div className='body-container'> 
        <div className='welcome-back-div'>
            <p className='welcome-text'>Welcome back, Username</p>
        </div>
        <div className='items-vertical-div'>
            <input 
                type='password'
                className='password-input-box'
                placeholder='Enter Password'
            />
            
        </div>
        <div className='forgot-password-dev'><span>Forgot Password?</span></div>
        <div className='items-vertical-div'>
            <button
                type='button'
                className='items-vertical-space sign-in-button button'
                >
                SIGN IN
            </button>
        </div>
        <div className='unlock-device-link-div'>
            <p className='items-vertical-space'>Not User name? Unlock device</p>
        </div>
    </div>
  )
}
