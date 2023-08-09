import React, { useState } from 'react';
import './styles.css';
import DateDisplay from './DateDisplay';
import WeekNavigation from './WeekNavigation';
import TimeZoneSelector from './TimeZoneSelector';
import WorkingDays from './WorkingDays';
import JSONDisplay from './JSONDisplay';
import FullWeekDisplay from './FullWeekDisplay';


function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedTimeZone, setSelectedTimeZone] = useState('UTC+0');
  const [workingDays, setWorkingDays] = useState({
    monday: {},
    tuesday: {},
    wednesday: {},
    thursday: {},
    friday: {},
  });
  const [selectedDates, setSelectedDates] = useState([]);

  const handleWeekChange = (increment) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + increment * 7);
    newDate.setDate(newDate.getDate() - newDate.getDay() + 1); // Move to the start of the week
    setCurrentDate(newDate);
  };

  const handleTimeZoneChange = (event) => {
    setSelectedTimeZone(event.target.value);
  };

  const handleWorkingDayChange = (day, timeSlot) => {
    setWorkingDays((prevWorkingDays) => ({
      ...prevWorkingDays,
      [day]: {
        ...prevWorkingDays[day],
        [timeSlot]: !prevWorkingDays[day][timeSlot],
      },
    }));
  };

  const handleDateSelection = (date) => {
    setSelectedDates((prevSelectedDates) => {
      const isSelected = prevSelectedDates.includes(date);
      if (isSelected) {
        return prevSelectedDates.filter((d) => d !== date);
      } else {
        return [...prevSelectedDates, date];
      }
    });
  };

  const generateWeekDates = () => {
    const dates = [];
    const currentDateCopy = new Date(currentDate);
    const daysToAdd = -currentDateCopy.getDay() + 1;

    currentDateCopy.setDate(currentDateCopy.getDate() + daysToAdd);

    for (let i = 0; i < 7; i++) {
      dates.push(new Date(currentDateCopy));
      currentDateCopy.setDate(currentDateCopy.getDate() + 1);
    }

    return dates;
  };

  const weekDates = generateWeekDates();

  return (
    <div className="App">
      <div className="container">
        <h1>Calendar</h1>
        <DateDisplay currentDate={currentDate} selectedTimeZone={selectedTimeZone} />
        <WeekNavigation handleWeekChange={handleWeekChange} />
        <TimeZoneSelector
          selectedTimeZone={selectedTimeZone}
          handleTimeZoneChange={handleTimeZoneChange}
        />
        <WorkingDays workingDays={workingDays} handleWorkingDayChange={handleWorkingDayChange} />
        <JSONDisplay selectedDates={selectedDates} />
        <FullWeekDisplay
          weekDates={weekDates}
          selectedDates={selectedDates}
          workingDays={workingDays}
          selectedTimeZone={selectedTimeZone}
          handleDateSelection={handleDateSelection}
        />
      </div>
    </div>
  );
}

export default App;



// function App() {
//   const [targetZone, setTargetZone] = useState("America/New_York");
//   const [sourceZone, setSourceZone] = useState("Europe/London");

//   const handleTargetChange = (e) => {
//     setTargetZone(e.target.value);
//   };

//   const handleSourceChange = (e) => {
//     setSourceZone(e.target.value);
//   };

//   return (
//     <div className="App">
//       <TimezoneSelector
//         zones={["America/New_York", "Europe/London", "Asia/Tokyo"]}
//         value={targetZone}
//         onChange={handleTargetChange}
//       />
//       <TimezoneDisplay name="Target" zone={targetZone} />
//       <TimezoneSelector
//         zones={["America/New_York", "Europe/London", "Asia/Tokyo"]}
//         value={sourceZone}
//         onChange={handleSourceChange}
//       />
//       <TimezoneDisplay name="Source" zone={sourceZone} />
//     </div>
//   );
// }

// export default App;

