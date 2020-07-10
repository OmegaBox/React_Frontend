import React, { useEffect } from "react";
import Booking from "../Templates/Booking";
import { useDispatch } from "react-redux";
import { getTheatersCanBooking } from "../../Reducer/bookingReducer";
import { checkLogin } from "../../Reducer/userInfoReducer";

const BookingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getTheatersCanBooking());
    dispatch(checkLogin());
  }, [dispatch]);

  return <Booking />;
};

export default BookingPage;
