import React, {useState, useEffect} from 'react';
import Habit from './Habit.jsx';

const Dashboard = () => {
  const [habits, setHabits] = useState([]);
  useEffect(() =>
  {
    const username = window.sessionStorage.getItem("username");
    console.log(username);
    console.log(typeof username);
    fetch('/habits/getHabits', {
      method: "POST",
      headers: {"Content-Type": "application/json; charset=UTF-8"},
      body: JSON.stringify({username: username})
    })
    .then((data) => data.json())
    .then((data) => {
      let habitCards = [];
      for(let habit of data.habits){
        habitCards.push(
          <Habit 
            key={habit.habitid}
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
  </div>
)
}

export default Dashboard;