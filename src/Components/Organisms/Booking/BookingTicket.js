import React from "react";
import BookingNotice from "../../Molecules/BookingNotice";

const BookingTicket = () => {
  return (
    <div>
      <button className={["btn", "main", "outLine"].join(" ")}>
        교환권출력
      </button>
      <button className={["btn", "main", "fill"].join(" ")}>예매 내역</button>
      <BookingNotice />
    </div>
  );
};

export default BookingTicket;
