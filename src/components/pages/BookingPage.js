import { useReducer } from "react";
import Heading from "../sections/bookingPages/Heading";
import BookingForm from "../sections/bookingPages/BookingForm";

const BookingPage = () => {
  const updateTimes = (date) => {
    return date;
  };

  const initialize = [];

  const [availableTimes, dispatch] = useReducer(updateTimes, initialize);

  return (
    <>
      <Heading />
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
};

export default BookingPage;
