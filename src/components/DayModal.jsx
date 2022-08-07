import React, {useState} from "react";

const DayModal = (props, ref) => {
  const [isOpen, toggleOpen] = useState(true)
  return(
  isOpen ? <div>Hello from Modal</div> : null
  );
}

export default DayModal;

//hello