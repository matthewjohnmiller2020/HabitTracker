import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Habit from './Habit.jsx';

const Dashboard = () => {
  const [habits, setHabits] = useState([]);

  const update = () => {
    fetch('/habits/getHabits', {
      method: "POST",
      headers: {"Content-Type": "application/json; charset=UTF-8"},
      body: JSON.stringify({username: 'Phil'})
    })
    .then((data) => data.json())
    .then((data) => console.log(data))
    const habitCards = [];
    for(let habit in data){
      habitCards.push(
        <Habit 
        key={data[habit].habitid}
        habitname={data[habit].habitname}
        moneyspent={data[habit].moneyspent}
        lasttime={data[habit].lasttime} />
      )
    }
    setHabits(habitCards);
  }
  return (
    <div className='dash'>
      <h1>Hello from dashboard</h1>
      
      {habits}
    </div>
  )
}

export default Dashboard;