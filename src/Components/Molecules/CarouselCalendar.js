import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";

import { setSelectedDate } from "../../Reducer/bookingReducer";
import { getDateRangeData } from "../../Utils/ultil";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/CarouselCalendar.scss";

const dateArray = getDateRangeData("2020-06-29", "2020-07-31");

const CarouselCalendar = () => {
  const selectedOption = useSelector((state) => state.Booking.selectedOption);

  const dispatch = useDispatch();

  const test = (date, e) => {
    dispatch(setSelectedDate(date));
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 250,
    slidesToShow: 14,
    slidesToScroll: 1,
    arrows: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <div className="carouselCalendarContainer">
      <Slider {...settings}>
        {dateArray.map((date, i) => {
          let addClass = "carouselCal";
          addClass +=
            selectedOption.selectedDate === date.dateString
              ? " selectedDay"
              : "";

          return (
            <button
              className={addClass}
              id={i}
              onClick={(e) => test(date.dateString, e)}
            >
              <span style={{}}>
                {date.day} {date.dayOfWeek}
              </span>
            </button>
          );
        })}
      </Slider>
    </div>
  );
};

export default React.memo(CarouselCalendar);
