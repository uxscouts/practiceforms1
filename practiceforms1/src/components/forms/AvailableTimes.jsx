import React, { useState } from 'react';

const AvailableTimes = ({ onMessageChange }) => {

   const [childInput, setChildInput] = useState('');

  const handleInputChange = (event) => {
   const newValue = event.target.value;
    setChildInput(newValue);
    // Call the parent's function with the child's data
    onMessageChange(newValue);
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
      <p>AvailableTimes.jsx</p>
      <p><span className="green"></span></p>
      <label htmlFor="time-select">Choose a booking time:</label>
      <br />
      <select
        id="time-select"
        value={childInput}
       // onChange={(e) => setSelectedTime(e.target.value)}
        onChange={handleInputChange}
      >
        {availableTimes.map((time, index) => (
          <option 
          key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
      
      {/*
      {selectedTime && (
        <p className="green">You selected: <strong>{selectedTime}</strong></p>
      )}
        */}
{/*
      <div>
        <h2>Child Component</h2>
        <input
          type="text"
          value={childInput}
          onChange={handleInputChange}
          placeholder="Type here to update parent"
        />
      </div>
*/}

    </div>
  );
};

export default AvailableTimes;
