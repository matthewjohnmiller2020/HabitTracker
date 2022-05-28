import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const HabitHistory = () => {
  const navigate = useNavigate();
  const [habitData, setHabitData] = useState({});
  useEffect(() =>
  {
    const habitID = window.sessionStorage.getItem("habitID");
    fetch('/habits/getOneHabit', {
      method: "POST",
      headers: {"Content-Type": "application/json; charset=UTF-8"},
      body: JSON.stringify({habitID: habitID})
    })
    .then((data) => data.json())
    .then((data) => {
      const info = {
        id: data.habitData.habitid,
        name: data.habitData.habitname,
        money: data.habitData.moneyspent,
        //time: lasttime
      }
      setHabitData(info);
    })
}, [])

const back = () => {
  window.sessionStorage.removeItem("habitID");
  navigate('/dashboard');
}
return (
<div className='habitHistory'>
  <h1>History for {habitData.name}</h1>
  <div className='calendar'>Calendar div</div>
{habitData.money !== null ? <h2>Total Money spent: {habitData.money}</h2> : null}
  {/* <p>Last time streak ended: {props.lasttime}</p> */}
  <button onClick={back}>Back to Dashboard</button>
  <button>Relapse</button>
  <button>Delete Habit</button>
</div>
);
}

export default HabitHistory;