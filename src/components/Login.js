
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className='login template d-flex justify-content-center vh-50 bg-light'>
        <div className='form_container p-5 rounded'>
        <form>
          <h1 className='text-center signin-title'>Sign In</h1>

          <div className='text-start mb-2'>
              <label htmlFor='email' className='ep-title'>Email</label>
              <input type='email' placeholder='Enter Email' className='form-control' />
          </div>

          <div className='text-start mb-2'>
              <label htmlFor='email' className='ep-title'>Password</label>
              <input type='password' placeholder='Enter Password' className='form-control' />
          </div>    

          <div className='text-start mb-3'>
              <input type='checkbox' className='custom-control custom-checkbox' id='check' />
              <label htmlFor='check' className='custom-input-label ms-2 mt-1 remember-me-checkbox'>Remember Me!</label>
          </div>

          <div className='text-center mb-3'>
              <button className='login-submit-button '>
                Login
              </button>
          </div> 

          <p className='text-center mt-2'>
            Forgot Password? <Link to='./signup' className='ms-2'>Sign Up</Link>
          </p>     
        </form>
        </div>
      </div>
    )
}

export default Login;