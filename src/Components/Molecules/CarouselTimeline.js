import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";

import { setSelectedDate } from "../../Reducer/bookingReducer";
import { getDateRangeData } from "../../Utils/ultil";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/CarouselTimeline.scss";

const dateArray = getDateRangeData(Date.now(), "2020-07-31");
const timeArray = Array.from(Array(29).keys());

const CarouselTimeline = () => {
  const selectedOption = useSelector((state) => state.Booking.selectedOption);
  console.log(selectedOption);

  const dispatch = useDispatch();

  const test = (date, e) => {
    dispatch(setSelectedDate(date));
  };

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
            // +selectedOption.selectedTime.split(":")[0] === +time
            +selectedOption.selectedHour === +time ? " selectedTime" : "";

          return (
            <button
              className={addClass}
              id={i}
              // onClick={(e) => test(date.dateString, e)}
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
