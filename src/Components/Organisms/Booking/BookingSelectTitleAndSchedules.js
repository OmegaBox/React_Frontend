import React from "react";
import BookingMovieList from "../../Molecules/BookingMovieList";
import BookingMovieSchedules from "../../Molecules/BookingMovieSchedules";

import "./style/BookingSelectMovie.scss";
import BookingFastTitle from "../../Atoms/BookingFastTitle";

const BookingSelectTimeAndTheater = () => {
  return (
    <div className="bookingSelectMovieContainer">
      <BookingFastTitle />
      <div className="bookingInfoLists">
        <BookingMovieList />
        <BookingMovieSchedules />
      </div>
    </div>
  );
};

export default BookingSelectTimeAndTheater;
