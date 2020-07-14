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
  const schedules = useSelector((state) => state.Booking.schedule.schedules);
  const refs = useSelector((state) => state.Booking.schedule.refs);

  let refSlider = null;
  let nowIndex = false;

  const nowHour = schedules.length ? +schedules[0].start_time.slice(0, 2) : 0;

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
              +time < +nowHour || !schedules.length || !refs[time]
                ? " disabledTimeline"
                : "";

            if (+time > +nowHour && !nowIndex) nowIndex = i - 1;

            return (
              <button
                key={`carouselTime${i}`}
                className={addClass}
                id={i}
                onClick={() => {
                  dispatch(setSelectedHour(time));
                  refs[time].current.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "start",
                  });
                }}
                disabled={+time < +nowHour || !refs[time]}
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
