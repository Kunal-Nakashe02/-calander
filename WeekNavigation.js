import React from 'react';

function WeekNavigation({ handleWeekChange }) {
  return (
    <div className="week-navigation">
      <button onClick={() => handleWeekChange(-1)}>Previous week</button>
      <button onClick={() => handleWeekChange(1)}>Next week</button>
    </div>
  );
}

export default WeekNavigation;
