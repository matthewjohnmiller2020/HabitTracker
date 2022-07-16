import React, {useState, useEffect} from 'react';
import Day from './Day.jsx'
const Month = () => {
  const [days, setDays] = useState([]);
  useEffect(() =>
  {
    const now = new Date(Date.now());//Figure out current time
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate(); //Figure out previous month's number of days
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();//Figure out first day of month
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();//Figure out last day of month
    const dates = [];
    //Create template dates for days of week
    dates.push(<Day key={'Sunday'} dayName='Sunday'/>)
    dates.push(<Day key={'Monday'} dayName='Monday'/>)
    dates.push(<Day key={'Tuesday'} dayName='Tuesday'/>)
    dates.push(<Day key={'Wednesday'} dayName='Wednesday'/>)
    dates.push(<Day key={'Thursday'} dayName='Thursday'/>)
    dates.push(<Day key={'Friday'} dayName='Friday'/>)
    dates.push(<Day key={'Saturday'} dayName='Saturday'/>)
    for(let i = firstDay - 1; i > -1; i--)
      dates.push(<Day key={`lastMonth${lastMonth - i}`} dayNum={lastMonth - i} isThisMonth={false}/>)//Add last days of previous month to balance calendar so that it always begins on a sunday

    for(let i = 1; i <= lastDay; i++)
      dates.push(<Day key={`currentMonth${i}`} dayNum={i} isThisMonth={true}/>)
      //Add days of month
    let newDate = 1;
    while(dates.length % 7 !== 0){
      dates.push(<Day key={`nextMonth${newDate}`} dayNum={newDate} isThisMonth={false}/>)
      newDate++;
    }//Add days of next month to balance calendar, so last day is always a saturday
    setDays(dates);
  }, [])
  return (
  <div className='Month'>
    {days}
  </div>
  );
}

export default Month;