import React from "react";
import CarouselCalendar from "../../Molecules/CarouselCalendar";
import Calendar from "../../Molecules/Calendar";
import BookingTheaterList from "../../Molecules/BookingTheaterList";
import BookingFastTitle from "../../Atoms/BookingFastTitle";
import TeatherMap from "../../Molecules/TeatherMap";

import "./style/BookingSelectMovie.scss";

const BookingSelectMovie = () => {
  return (
    <div className="bookingSelectMovieContainer">
      <BookingFastTitle />
      <div className="calendarsContainer">
        <CarouselCalendar />
        <Calendar />
      </div>
      <div className="bookingInfoLists">
        <BookingTheaterList />
        <TeatherMap />
      </div>
    </div>
  );
};

export default BookingSelectMovie;
