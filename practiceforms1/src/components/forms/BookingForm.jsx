import { useState } from 'react';
import AvailableTimes from "./AvailableTimes";

const BookingForm = () => {
  const [ocassionState, setOccassionState] = useState("Friends");
  const [resDate, setResDate]=useState("");
  const [guestsCount, setGuestsCount] = useState("2");



  // practice make demo
  //practice sending value from child to parent
  // The parent component holds the state that needs to be shared 
  // and defines a function that can modify that state. 
  const [message, setMessage] = useState('Initial message in parent');

  // This function will be passed down to the child
  // practice sending value up from child to parent
  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };




  return (
    <>

    <div>
      <h1>Parent Component</h1>
      <p>Message: {message}</p>
      {/* Pass the handler function as a prop */}
    {/* <ChildComponent onMessageChange={updateMessage} /> */}
    </div>

    <h3 className="green">Form Values</h3>
    <p className="green">Occassion: {ocassionState}</p>
    <p className="green"> Date {resDate}</p>
    <p className="green"> No. of Guests {guestsCount}</p>
    <hr/>


    <form style={{ display: "grid", maxWidth: 200, gap: 20 }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date"  onChange={e =>setResDate(e.target.value)}></input>

    <AvailableTimes onMessageChange={updateMessage}/>

    {/*}  <label htmlFor="res-time">Choose time</label>
      <select id="res-time" onChange={e=>setResTime(e.target.value)}>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      */}


      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder={1} min={1} max={10} id="guests" onChange={e =>setGuestsCount(e.target.value)}/>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={e =>setOccassionState(e.target.value)}>
        <option>Friends</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Work Party</option>
        <option>Graduation</option>
        <option>Romantic Date</option>
      </select>
      <input type="submit" defaultValue="Make Your reservation" />
    </form> 
    </>
  )
}

export default BookingForm;
