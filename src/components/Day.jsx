import React from 'react';
import DayModal from './DayModal.jsx';
const Day = (props) => {
  //Day is template for calendar if day name exists
  const isTemplate = props.dayName ? true : false;
  const isThisMonth = props.isThisMonth;
  return (
  <div className='Day'>
    <h3>{props.dayNum}</h3>
    {isTemplate &&<h2>{props.dayName}</h2>}
    {isThisMonth == true ? <div id={props.dayName}>
  <DayModal key={`${props.dayNum}modal`}/>
</div> : null}
  </div>


  );
}

export default Day;