import React from "react";

const BookingPersonalCounter = () => {
  return (
    <div className="personalCounter">
      <button name="btnPlus" className={["btn", "fill", "white"].join(" ")}>
        -
      </button>
      <div className="selectWrap">
        <select>
          <option>0</option>
        </select>
      </div>
      <button name="btnMinus" className={["btn", "fill", "white"].join(" ")}>
        +
      </button>
    </div>
  );
};

export default BookingPersonalCounter;
