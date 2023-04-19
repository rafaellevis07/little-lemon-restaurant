import { useReducer } from "react";
import Heading from "../sections/bookingPages/Heading";
import BookingForm from "../sections/bookingPages/BookingForm";
import { fetchAPI } from "../../reservationAPI";

const BookingPage = () => {
  const updateTimes = (date) => {
    return fetchAPI(date);
  };

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading />
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
};

export default BookingPage;
