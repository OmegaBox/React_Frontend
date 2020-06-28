import React from "react";
import Slider from "react-slick";

import { getDateRangeData } from "../../Utils/ultil";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/CarouselCalendar.scss";

const test = (value, e) => {
  console.log(value);
  console.log(e.currentTarget);
};

const dateArray = getDateRangeData(Date.now(), "2020-07-20");

const CarouselCalendar = () => {
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
    <div className="container" style={{ padding: "40px", width: "1100px" }}>
      <Slider {...settings}>
        {dateArray.map((date, i) => {
          return (
            <div className="carouselCal" onClick={(e, i) => test(date.day, e)}>
              <span>
                {date.day} {date.dayOfWeek}
              </span>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export { CarouselCalendar };
