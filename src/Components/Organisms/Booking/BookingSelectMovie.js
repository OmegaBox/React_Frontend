import React from "react";
import CarouselCalendar from "../../Molecules/CarouselCalendar";
import Calendar from "../../Molecules/Calendar";
import BookingMovieList from "../../Molecules/BookingMovieList";
import BookingTheaterList from "../../Molecules/BookingTheaterList";
import BookingMovieSchedules from "../../Molecules/BookingMovieSchedules";
import CarouselTimeline from "../../Molecules/CarouselTimeline";

import "./style/BookingSelectMovie.scss";

const BookingSelectMovie = () => {
  return (
    <div className="bookingSelectMovieContainer">
      <div className="calendarsContainer">
        <CarouselCalendar />
        <Calendar />
      </div>
      <div className="bookingInfoLists">
        <BookingMovieList />
        <BookingTheaterList />
        <div className="bookingTimeSchedules">
          <h3>시간</h3>
          <CarouselTimeline />
          <BookingMovieSchedules />
        </div>
      </div>
    </div>
  );
};

export default BookingSelectMovie;
