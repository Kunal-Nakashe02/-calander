

import React from 'react';
import { DateTime } from 'luxon'; 

const DateDisplay = ({ currentDate, selectedTimeZone }) => {
  // Create a DateTime instance with the selected time zone
  const dateTimeWithTimeZone = DateTime.fromJSDate(currentDate).setZone(selectedTimeZone);

  return (
    <div className="date-display">
      <h2>Date: {dateTimeWithTimeZone.toFormat('DD/MM/yyyy')}</h2>
      <p>Time: {dateTimeWithTimeZone.toFormat('HH:mm:ss')}</p>
      <p>Time Zone: {selectedTimeZone}</p>
    </div>
  );
};

export default DateDisplay;
