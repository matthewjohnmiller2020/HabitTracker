import React, {useState} from 'react';
import { useEffect } from 'react/cjs/react.production.min';
import Habit from './Habit.jsx';

const Dashboard = () => {
  const [refetch, setRefetch] = useState(true);
  const [habits, setHabits] = useState([]);
  useEffect(() => {
    if(refetch){
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
          // lasttime={habit.lasttime} 
          />
        )
      }
      setHabits(habitCards);
    })
    .finally(() => setRefetch(false))
    }
  }, [refetch])
  return (
    <div className='dash'>
      <h1>Your habits:</h1>
      {habits}
    </div>
  )
}

export default Dashboard;