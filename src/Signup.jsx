import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const submitSignup = (e) => {
    e.preventDefault();
      const username = document.getElementById('userSelect').value;
      const password = document.getElementById('passwordSelect').value;
      const newUser = {
        username: username,
        password: password
      }
      console.log(JSON.stringify(newUser));
      fetch('/user/signup', {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {"Content-Type": "application/json; charset=UTF-8"}
      })
      .then(response => response.text())
      .then(json => console.log(json))
      .catch(err => console.log(err));
    
  }
  const goBack = () => {
    navigate('/')
  }
return (
  <div className='loginContainer'>
    <h1>Create a new account</h1>
    <div className='loginForm'>
      <form onSubmit = {submitSignup}>
        <label>Username: </label>
        <input type='text' id="userSelect" placeholder='Account name'></input>
        <label>Password: </label>
        <input type='password' id="passwordSelect" placeholder='Password'></input>
        <button type='submit'>Create Account</button>
      </form>
      <button onClick={goBack}>Go back</button>
    </div>
  </div>
)
}

export default Login;