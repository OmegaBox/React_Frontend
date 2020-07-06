import React, { useEffect } from "react";
import Booking from "../Templates/Booking";
import { useDispatch } from "react-redux";
import { getTheatersCanBooking } from "../../Reducer/bookingReducer";

const BookingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTheatersCanBooking());
  }, [dispatch]);

  return <Booking />;
};

export default BookingPage;
