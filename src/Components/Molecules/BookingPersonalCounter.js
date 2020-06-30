import React from "react";

const BookingPersonalCounter = () => {
  return (
    <div className="bookingPersonalCounter">
      <button className={["btn", "fill", "white", "xSmall", "minus"].join(" ")}>
        -
      </button>
      <select className={["select", "small", "count"].join(" ")}>
        <option>0</option>
      </select>
      <button className={["btn", "fill", "white", "xSmall", "plus"].join(" ")}>
        +
      </button>
    </div>
  );
};

export default BookingPersonalCounter;
