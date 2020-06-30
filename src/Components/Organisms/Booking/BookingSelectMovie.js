import React from "react";
import CarouselCalendar from "../../Molecules/CarouselCalendar";
import Calendar from "../../Molecules/Calendar";
import BookingMovieList from "../../Molecules/BookingMovieList";

import "./style/BookingSelectMovie.scss";

const BookingSelectMovie = () => {
  return (
    <div>
      영화관 조건 선택
      <div className="calendarsContainer">
        <CarouselCalendar />
        <Calendar />
      </div>
      <BookingMovieList />
    </div>
  );
};

export default BookingSelectMovie;
