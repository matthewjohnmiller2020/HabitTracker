import React, {useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Habit from './Habit.jsx';

const Dashboard = () => {
  const [habits, setHabits] = useState([]);
  useEffect(() =>
  {
    const username = window.sessionStorage.getItem("username");
    fetch(`/habits/getHabits${username}`, {
      headers: {"Content-Type": "application/json; charset=UTF-8"},
    })
    .then((data) => data.json())
    .then((data) => {
      let habitCards = [];
      for(let habit of data.habits){
        habitCards.push(
          <Habit 
            key={habit.habitid}
            id={habit.habitid}
            habitname={habit.habitname}
            moneyspent={habit.moneyspent}
            // lasttime={habit.lasttime}
             />
      )
    }
    setHabits(habitCards);
  })
}, [])
return (
  <div className='dash'>
    <h1>Your habits:</h1>
    {habits}
    <Link to='/creator'>
      <button>New Habit</button>
    </Link>
  </div>
)
}

export default Dashboard;