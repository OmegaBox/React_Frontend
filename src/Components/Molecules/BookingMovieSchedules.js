import React from "react";

import "./style/BookingMovieSchedules.scss";
import CarouselTimeline from "./CarouselTimeline";
import BookingSelectTime from "./BookingSelectTime";

const BookingMovieSchedules = () => {
  return (
    <div className="bookingTimeSchedules">
      <h3>시간</h3>
      <CarouselTimeline />
      <BookingSelectTime />
    </div>
  );
};

export default BookingMovieSchedules;
