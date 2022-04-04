import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const submitLogin = (e) => {
    e.preventDefault();
  }
  const signUp = () => {
    navigate('/signup')
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
      <p>Not a user? Sign up here: </p><button onClick={signUp}>Sign Up</button>
    </div>
  </div>
)
}

export default Login;