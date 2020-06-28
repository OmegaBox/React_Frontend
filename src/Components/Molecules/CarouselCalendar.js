import React, { useState } from "react";
import Slider from "react-slick";

import { getDateRangeData } from "../../Utils/ultil";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/CarouselCalendar.scss";

const dateArray = getDateRangeData(Date.now(), "2020-07-20");

const CarouselCalendar = () => {
  const [clickCalIndex, setClickCalIndex] = useState(0);

  const test = (value, e) => {
    console.log(value);
    console.log(e.currentTarget.id);
    console.log(e);
    setClickCalIndex(e.currentTarget.id);
  };

  console.log("리페인팅", clickCalIndex);

  const settings = {
    dots: false,
    infinite: false,
    speed: 250,
    slidesToShow: 14,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <div className="container" style={{ padding: "40px", width: "1100px" }}>
      <Slider {...settings}>
        {dateArray.map((date, i) => {
          if (clickCalIndex === +i) console.log("일치!", i);
          return (
            <div
              className="carouselCal"
              id={i}
              onClick={(e) => test(date.day, e)}
            >
              <span className={+clickCalIndex === +i ? "dododo" : "no"}>
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
