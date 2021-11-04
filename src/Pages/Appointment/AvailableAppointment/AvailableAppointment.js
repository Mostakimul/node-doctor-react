import React from 'react';

const AvailableAppointment = ({ date }) => {
  return (
    <div>
      <h3>Available Appointment: {date.toDateString()}</h3>
    </div>
  );
};

export default AvailableAppointment;
