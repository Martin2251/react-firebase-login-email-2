import React from 'react'
import "./Signin.css"

const Signin = () => {
  return (
    <div className='signin'>
        <form action="">
            <h1>Sign in</h1>
            <input type="email" />
            <input type="password" />
            <button>Sign in </button>
<h6>Not yet registered?<span className='signin_link'>Sign up</span></h6>
        </form>
       
           </div>
  )
}

export default Signin