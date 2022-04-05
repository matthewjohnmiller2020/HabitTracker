import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const submitLogin = (e) => {
    e.preventDefault();
  }

return (
  <div className='loginContainer'>
    <h1>Welcome to Habit Tracker</h1>
    <div className='loginForm'>
      <form onSubmit = {submitLogin}>
        <label>Username: </label>
        <input type='text' placeholder='Account name'></input>
        <label>Password: </label>
        <input type='password' placeholder='Password'></input>
        <button type='submit'>Login</button>
      </form>
      <p>Not a user? Sign up here:</p>
      <Link to='/signup'>
        <button>Sign Up</button>
      </Link>
    </div>
  </div>
)
}

export default Login;