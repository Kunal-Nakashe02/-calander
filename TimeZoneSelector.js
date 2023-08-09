import React from 'react';

function TimeZoneSelector({ selectedTimeZone, handleTimeZoneChange }) {
  return (
    <div className="time-zone-selector">
      <label htmlFor="timezone">SELECT TIME ZONE :</label>
      <select id="timezone" value={selectedTimeZone} onChange={handleTimeZoneChange}>
        <option value="UTC+0">UTC+0</option>
        <option value="Europe/Moscow">UTC+3</option>
      </select>
    </div>
  );
}

export default TimeZoneSelector;
