import React from "react";


function Signup(){
    return (
        <div className='signup template d-flex justify-content-center align-items-center vh-50 bg-light'>
        <div className='form_container p-5 rounded'>
        <form>
          <h1 className='text-center signup-title'>Sign Up?</h1>

          <div className='text-start mb-2'>
              <label htmlFor='lastname' className="signup-props">Last Name</label>
              <input type='email' placeholder='Enter Last Name' className='form-control' />
          </div>

          <div className='text-start mb-2'>
              <label htmlFor='firstname' className="signup-props">First Name</label>
              <input type='email' placeholder='Enter First Name' className='form-control' />
          </div>

          <div className='text-start mb-2'>
              <label htmlFor='email' className="signup-props">Email</label>
              <input type='email' placeholder='Enter Email' className='form-control' />
          </div>

          <div className='text-start mb-2'>
              <label htmlFor='email' className="signup-props">Password</label>
              <input type='password' placeholder='Enter Password' className='form-control' />
          </div>   

          <div className='text-start mb-2'>
              <label htmlFor='email' className="signup-props">Confirm Password</label>
              <input type='password' placeholder='Confirm Password' className='form-control' />
          </div>

          <div className='text-center mt-3'>
              <button className='signup-button'>
                Sign Up 
              </button>
          </div> 
     
        </form>
        </div>
      </div>
    )
}

export default Signup;