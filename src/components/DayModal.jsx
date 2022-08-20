import React, { useState, useEffect} from "react";

const DayModal = (props, ref) => {
  const [isOpen, toggleOpen] = useState(false)
  const buttonOpen = () => {
    toggleOpen(!isOpen);
  }
  const relapse = () =>{
    console.log("Relapse clicked");
  }
  return(
  isOpen ?  <div className='DayModal-Modal'>
              History for {props.monthNum}/{props.dayNum}
              <button onClick={() => relapse()}>Relapse</button>
              <button onClick={() => toggleOpen(!isOpen)}>Close</button>
            </div> :
            <button onClick={() => buttonOpen()}>View More</button>
  );
}

export default DayModal;

