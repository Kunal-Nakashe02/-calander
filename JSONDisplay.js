import React from 'react';

function JSONDisplay({ selectedDates }) {
  return (
    <div className="json-display">
      {selectedDates.map((date, index) => (
        <div key={index} className="json-date">
          <input type="checkbox" className="json-checkbox" />
          <span>{date}</span>
        </div>
      ))}
    </div>
  );
}

export default JSONDisplay;



