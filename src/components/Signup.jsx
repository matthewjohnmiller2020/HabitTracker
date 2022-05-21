import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const submitSignup = (e) => {
    e.preventDefault();
    const username = document.getElementById('userSelect').value;
    const password = document.getElementById('passwordSelect').value;
    const newUser = {
      username: username,
      password: password
    }
    fetch('/user/signup', {
      method: "POST",
      headers: {"Content-Type": "application/json; charset=UTF-8"},
      body: JSON.stringify(newUser)
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
    <h1>Create a new account</h1>
    <div className='loginForm'>
      <form onSubmit = {submitSignup}>
        <label>Username: </label>
        <input type='text' id="userSelect" placeholder='Account name'></input>
        <label>Password: </label>
        <input type='password' id="passwordSelect" placeholder='Password'></input>
        <button type='submit'>Create Account</button>
      </form>
      <Link to='/'>
        <button>Go back</button>
        </Link>
    </div>
  </div>
)
}

export default Signup;