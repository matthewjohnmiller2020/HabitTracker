import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.production.min';
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
    .then((data) => {
      const habitCards = [];
    for(let habit of data.habits){
      habitCards.push(
        <Habit 
        key={habit.habitid}
        habitname={habit.habitname}
        moneyspent={habit.moneyspent}
        // lasttime={data.habits[habit].lasttime} 
        />
      )
    }
    setHabits(habitCards);
  });
  }
  return (
    <div className='dash'>
      <h1>Hello from dashboard</h1>
      <button onClick={update}>Click for Habits</button>
      {habits}
    </div>
  )
}

export default Dashboard;