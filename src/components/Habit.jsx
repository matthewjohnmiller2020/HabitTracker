import React from 'react';
import { useNavigate } from 'react-router-dom';

const Habit = (props) => {
  const navigate = useNavigate();
  const showHistory = () => {
    window.sessionStorage.setItem("habitID", props.id);
    navigate('/history')
  }
  return (
  <div className='habitCard'>
    <p>Habit name: {props.habitname}</p>
     {props.moneyspent !== null ? <p>Money spent: {props.moneyspent}</p> : null}
     {/* <p>Last time streak ended: {props.lasttime}</p> */}
    <button onClick={showHistory}>History</button>
  </div>
  );
}

export default Habit;