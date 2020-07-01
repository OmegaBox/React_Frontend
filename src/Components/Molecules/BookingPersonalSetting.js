import React from "react";
import { useSelector } from "react-redux";

import BookingPersonalCounter from "./BookingPersonalCounter.js";

import "./style/BookingPersonalSetting.scss";

const BookingPersonalSetting = () => {
  const personType = Object.keys(useSelector((state) => state.Seat.personal));

  return (
    <div className="bookingPersonalSetting">
      {personType.map((type) => {
        const typeKR =
          type === "adult" ? "성인" : type === "teen" ? "청소년" : "우대";
        return (
          <div key={type}>
            <span>{typeKR}</span>
            <BookingPersonalCounter type={type} />
          </div>
        );
      })}
    </div>
  );
};

export default BookingPersonalSetting;
