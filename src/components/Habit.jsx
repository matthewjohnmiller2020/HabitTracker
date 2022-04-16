import React from 'react';

const Habit = () => {
return (
<div>
  <p>Habit name: {props.habitname}</p>
  <p>Money spent: {props.moneyspent}</p>
  <p>Last time streak ended: {props.lasttime}</p>
</div>
);
}

export default Habit;