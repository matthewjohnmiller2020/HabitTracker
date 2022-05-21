import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const submitLogin = (e) => {
    e.preventDefault();
    const username = document.getElementById('userSelect').value;
    const password = document.getElementById('passwordSelect').value;
    const userData = {
      username: username,
      password: password
    }
    fetch('/user/login', {
      method: "POST",
      headers: {"Content-Type": "application/json; charset=UTF-8"},
      body: JSON.stringify(userData)
    })
    .then((response) =>{
      if(!response.ok){
        const result = response.json();
        result.then((result) => alert(result.message))
      }
     else{
      const result = response.json();
      result.then((result) => {
        console.log(result)
        window.sessionStorage.setItem("username", result.username.toString())
        navigate('/dashboard');
       })
     }
    })
    .catch(err => console.log(err))
  }

return (
  <div className='loginContainer'>
    <h1>Welcome to Habit Tracker</h1>
    <div className='loginForm'>
      <form onSubmit = {submitLogin}>
        <label>Username: </label>
        <input type='text' id='userSelect' placeholder='Account name'></input>
        <label>Password: </label>
        <input type='password' id='passwordSelect' placeholder='Password'></input>
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