import React from "react";
import { useSelector } from "react-redux";

const BookingPersonalCounter = ({ type }) => {
  const count = useSelector((state) => state.Seat.personal[type]);

  return (
    <div className="bookingPersonalCounter">
      <button className={["btn", "fill", "white", "xSmall", "minus"].join(" ")}>
        -
      </button>
      <select className={["select", "small", "count"].join(" ")} value={count}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
      <button
        className={["btn", "fill", "white", "xSmall", "plus"].join(" ")}
        // onClick={}
      >
        +
      </button>
    </div>
  );
};

export default BookingPersonalCounter;
