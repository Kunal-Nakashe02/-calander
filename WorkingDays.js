import React from 'react';

function WorkingDays({ workingDays, handleWorkingDayChange }) {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00',
  ];

  return (
    <div className="working-days">
      {days.map((day) => (
        <div key={day}>
          <label className="working-day-label">
            {day.charAt(0).toUpperCase() + day.slice(1)}:
          </label>
          <div className="time-slots">
            {timeSlots.map((timeSlot) => (
              <label key={timeSlot}>
                {timeSlot}
                <input
                  type="checkbox"
                  checked={workingDays[day][timeSlot]}
                  onChange={() => handleWorkingDayChange(day, timeSlot)}
                />
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkingDays;

