import React from 'react';

const Habit = (props) => {
return (
<div className='habitCard'>
  <p>Habit name: {props.habitname}</p>
  <p>Money spent: {props.moneyspent}</p>
  {/* <p>Last time streak ended: {props.lasttime}</p> */}
</div>
);
}

export default Habit;