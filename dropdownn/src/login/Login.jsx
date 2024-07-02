import React from 'react'
import './login.css'

import user_icon from '../Assets/person.png'
import user_icon from '../Assets/email.png'
import user_icon from '../Assets/password.png'

const Login = () => {

  const [action,setAction]= userstate("Login Up");
      
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"? <div></div>: <div className='input'>
                <img src={name_icon} alt='' />
                <input type="text" placeholder='Name'  />
            </div> }
           
            <div className='input'>
                <img src={email_icon} alt='' />
                <input type="email" placeholder='email' />
            </div>
            <div className='input'>
                <img src={password_icon} alt='' />
                <input type="password" placeholder='password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className='forgot-password'>Lost Password? <span>Click here!</span></div>}
        
        <div className='submit-container'>
            <div className={action==="login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="sign up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default Login