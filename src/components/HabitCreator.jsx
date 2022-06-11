import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
const HabitCreator = () => {
  const navigate = useNavigate();
  const [usesMoney, checkMoney] = useState(false);
  const createHabit = (e) => {
    e.preventDefault();
    const username = window.sessionStorage.getItem("username");
    const name = document.getElementById('habitSelect').value;
    const money = usesMoney ? document.getElementById('cost').value : null;

    const habitData = {
      username: username,
      name: name,
      money: money
    }
    fetch('/habits/createHabit', {
      method: "POST",
      headers: {"Content-Type": "application/json; charset=UTF-8"},
      body: JSON.stringify(habitData)
    })
    .then((response) =>{
      if(!response.ok){
        const result = response.json();
        result.then((result) => alert(result.message))
      }
     else{
        navigate('/dashboard');
     }
    })
    .catch(err => console.log(err))
  }

    return (
      <div className="habitCreator">
        <h1>Create a new habit</h1>
        <form onSubmit = {createHabit}>
          <label>What is your habit? </label>
          <input type='text' id='habitSelect' placeholder='Habit name'></input>
          <label>Does it cost money?</label>
          <input type='checkbox' checked={usesMoney} onChange={e => checkMoney(e.target.checked)}></input>
          {usesMoney && 
          <div>
            <p>How much?</p>
            <input type='text' id='cost' placeholder='How much do you spend on it daily?'></input>
          </div>}
          <button type='submit'>Submit</button>
        </form>
        <Link to='/dashboard'>
        <button>Back to dashboard</button>
      </Link>

      </div>
)
}

export default HabitCreator;