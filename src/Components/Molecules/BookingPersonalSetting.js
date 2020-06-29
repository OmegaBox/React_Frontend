import React from "react";
import BookingPersonalCounter from "./BookingPersonalCounter.js";

const personType = ["adult", "teen", "preferential"];

const BookingPersonalSetting = () => {
  return (
    <div id="bookingPersonalSetting">
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
