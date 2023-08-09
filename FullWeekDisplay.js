import React from 'react';

function FullWeekDisplay({ weekDates, selectedDates, workingDays, selectedTimeZone, handleDateSelection }) {
  return (
    <div className="full-week-display">
      {weekDates.map((date) => (
        <div className="week-day" key={date.toString()}>
          <div className="day-header">
            {date.toLocaleDateString('en-US', { weekday: 'long' })}
          </div>
          <div className="day-content">
            {/* Customize this part to display JSON data and tick boxes */}
            <p>Date: {date.toISOString().split('T')[0]}</p>
            <p>Time: {/* Display time based on timezone and workingDays */}</p>
            <input
              type="checkbox"
              checked={selectedDates.includes(date.toString())}
              onChange={() => handleDateSelection(date.toString())}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FullWeekDisplay;



