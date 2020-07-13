import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";

import { selectDate } from "../../Reducer/bookingReducer";
import { getDateRangeData } from "../../Utils/ultil";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/CarouselCalendar.scss";

const dateArray = getDateRangeData("2020-07-01", "2020-07-15");

const CarouselCalendar = () => {
  const selectedOption = useSelector((state) => state.Booking.selectedOption);

  const dispatch = useDispatch();

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

          addClass += i > 6 ? " disabled" : "";

          const dayColor =
            date.dayOfWeek === "토"
              ? "dayBlue"
              : date.dayOfWeek === "일"
              ? "dayRed"
              : "";

          return (
            <button
              key={`carouselDate${i}`}
              className={addClass}
              id={i}
              onClick={() => dispatch(selectDate(date.dateString))}
              disabled={i > 6}
              // styl={{}}
            >
              <span className={dayColor}>
                {date.day}·{date.dayOfWeek}
              </span>
            </button>
          );
        })}
      </Slider>
    </div>
  );
};

export default React.memo(CarouselCalendar);
