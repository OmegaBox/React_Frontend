import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";

import { setSelectedHour } from "../../Reducer/bookingReducer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/CarouselTimeline.scss";

const timeArray = Array.from(Array(29).keys());

const CarouselTimeline = () => {
  const selectedOption = useSelector((state) => state.Booking.selectedOption);

  let refSlider = null;
  let nowIndex = false;

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

  const createSlider = () => {
    return (
      <div className="carouselTimelineContainer">
        <Slider {...settings} ref={(slider) => (refSlider = slider)}>
          {timeArray.map((time, i) => {
            let addClass = "carouselTimeline";
            addClass +=
              +selectedOption.selectedHour === +time ? " selectedTime" : "";
            addClass +=
              +time < +nowHour || !selectedOption.selectedTheaters.length
                ? " disabledTimeline"
                : "";

            if (+time > +nowHour && !nowIndex) nowIndex = i - 1;

            return (
              <button
                key={`carouselTime${i}`}
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

  const carouselTimeSlider = createSlider();

  useEffect(() => refSlider.slickGoTo(nowIndex), [refSlider, nowIndex]);

  return carouselTimeSlider;
};

export default React.memo(CarouselTimeline);
