import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";

import { setSelectedDate, setSelectedHour } from "../../Reducer/bookingReducer";
import { getDateRangeData } from "../../Utils/ultil";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/CarouselTimeline.scss";

const timeArray = Array.from(Array(29).keys());

const CarouselTimeline = () => {
  const selectedOption = useSelector((state) => state.Booking.selectedOption);
  const nowHour = new Date().getHours();

  const dispatch = useDispatch();

  const settings = {
    dots: false,
    infinite: false,
    speed: 250,
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <div className="carouselTimelineContainer">
      <Slider {...settings}>
        {timeArray.map((time, i) => {
          let addClass = "carouselTimeline";
          addClass +=
            +selectedOption.selectedHour === +time ? " selectedTime" : "";
          addClass += +time < +nowHour ? " disabledTimeline" : "";

          return (
            <button
              className={addClass}
              id={i}
              onClick={() => dispatch(setSelectedHour(time))}
              disabled={+time < +nowHour}
            >
              <span>{time}</span>
            </button>
          );
        })}
      </Slider>
    </div>
  );
};

export default React.memo(CarouselTimeline);
