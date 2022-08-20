import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Month from './Month.jsx';

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

const deleteHabit = () => {
  const habitID = window.sessionStorage.getItem("habitID");
  fetch(`/habits/deleteHabit${habitID}`, {
    method: "DELETE",
    headers: {"Content-Type": "application/json; charset=UTF-8"},
  })
  .then((response) => {
    if(!response.ok){
      const result = response.json();
      result.then((result) => alert(result.message))
    }
   else{
      back();
   }
  })
}
//eventually will be calendar object not month object
//key for month will have to be actual month variable eventually
return (
<div className='habitHistory'>
  <h1>History for {habitData.name}</h1>
  <Month key={'month'}/>
{habitData.money !== null ? <h2>Total Money spent: {habitData.money}</h2> : null}
  {/* <p>Last time streak ended: {props.lasttime}</p> */}
  <button onClick={back}>Back to Dashboard</button>
  <button onClick={deleteHabit}>Delete Habit</button>
</div>
);
}

export default HabitHistory;