import React from "react";
import CarouselCalendar from "../../Molecules/CarouselCalendar";
import Calendar from "../../Molecules/Calendar";
import BookingMovieList from "../../Molecules/BookingMovieList";
import BookingMovieSchedules from "../../Molecules/BookingMovieSchedules";
import BookingFastTitle from "../../Atoms/BookingFastTitle";
import BookingScheduleInfo from "../../Molecules/BookingScheduleInfo";

import "./style/BookingSelectMovie.scss";
const BookingSelectTimeAndTheater = () => {
  return (
    <div className="bookingSelectMovieContainer">
      <BookingFastTitle />
      <div className="calendarsContainer">
        <CarouselCalendar />
        <Calendar />
      </div>
      <div className="bookingInfoLists">
        <BookingMovieList />
        <BookingMovieSchedules />
        <BookingScheduleInfo />
      </div>
    </div>
  );
};

export default BookingSelectTimeAndTheater;
