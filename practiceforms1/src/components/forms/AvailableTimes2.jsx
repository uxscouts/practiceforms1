import React, { useState } from 'react';

const AvailableTimes2 = ({ onTimeChange }) => {

   const [childInput, setChildInput] = useState('');

  const handleInputChange = (event) => {
   const newValue = event.target.value;
    setChildInput(newValue);
    // Call the parent's function with the child's data
    // onMessageChange(newValue);
    onTimeChange(newValue);
  };


  const [availableTimes, setAvailableTimes] = useState([
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
    '08:00 PM',
  ]);
  
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <div>
      <label htmlFor="time-select">Choose a booking time:</label>
      <br />
      <select
        id="time-select"
        value={childInput}
       // onChange={(e) => setSelectedTime(e.target.value)}
        onChange={handleInputChange}
        style={{ marginTop: '10px', padding: '5px', width: '200px' }}
      >
        <option value="">--Select a time--</option>

        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
      
    </div>
  );
};

export default AvailableTimes2;
