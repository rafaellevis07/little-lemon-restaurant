import { useState } from "react";
import { Link } from "react-router-dom";

const BookingForm = (props) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guest, setGuest] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preference, setPreference] = useState("");
  const [comments, setComments] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes
      ? props.availableTimes.map((times) => <option>{times}</option>)
      : []
  );

  const handleDateChange = (e) => {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  };

  return (
    <form className="reservation-form">
      <div>
        <label htmlFor="fName">First Name </label>
        <br />
        <input
          type="text"
          id="fName"
          placeholder="First Name"
          required
          minLength={2}
          maxLength={50}
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="lName">Last Name </label>
        <br />
        <input
          type="text"
          id="lName"
          placeholder="Last Name"
          required
          minLength={2}
          maxLength={50}
          value={lName}
          onChange={(e) => setLName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email </label>
        <br />
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          minLength={4}
          maxLength={100}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="phone">Phone Number </label>
        <br />
        <input
          type="tel"
          id="phone"
          placeholder="(555)555-5555"
          required
          minLength={10}
          maxLength={20}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="guest">Guests </label>
        <br />
        <input
          type="number"
          id="guest"
          placeholder="Guests Number"
          required
          minLength={1}
          maxLength={100}
          value={guest}
          onChange={(e) => setGuest(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="date">Date </label>
        <br />
        <input
          type="date"
          id="date"
          placeholder="Date"
          required
          minLength={2}
          maxLength={100}
          value={date}
          onChange={handleDateChange}
        />
      </div>

      <div>
        <label htmlFor="res-time">Time </label>
        <br />
        <select id="res-time" required>
          {finalTime}
        </select>
      </div>

      <div>
        <label htmlFor="occasion">Occasion </label>
        <br />
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="preference">Seating Preference</label>
        <br />
        <select
          id="preference"
          value={preference}
          onChange={(e) => setPreference(e.target.value)}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoors</option>
        </select>
      </div>

      <div>
        <label htmlFor="comments">Additional Comments</label>
        <br />
        <textarea
          id="comments"
          cols="30"
          rows="8"
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>

      <div>
        <br></br>
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            check the information before submitting your reservation request.
          </p>
        </small>
        <br></br>
        <Link className="action-button" to="/confirmation">
          Book Table
        </Link>
      </div>
    </form>
  );
};

export default BookingForm;
