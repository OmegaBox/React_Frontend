import React, { useEffect } from "react";
import Booking from "../Templates/Booking";
import { useDispatch } from "react-redux";
import {
  getTheatersCanBooking,
  getPossibleMovies,
} from "../../Reducer/bookingReducer";

const BookingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getPossibleMovies());
    dispatch(getTheatersCanBooking());
  }, [dispatch]);

  return <Booking />;
};

export default React.memo(BookingPage);
