import { useState } from "react";

const BookingForm = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guest, setGuest] = useState(1);
  const [date, setDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preference, setPreference] = useState("");
  const [comments, setComments] = useState("");

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
          type="text"
          id="date"
          placeholder="Date"
          required
          minLength={2}
          maxLength={100}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="res-time">Time </label>
        <br />
        <select
          id="res-time"
          required
          value={availableTimes}
          onChange={(e) => setAvailableTimes(e.target.value)}
        >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
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
    </form>
  );
};

export default BookingForm;
