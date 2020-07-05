import React from "react";
import BookingNotice from "../../Molecules/BookingNotice";

//booking/payment-successcomplete

const BookingTicket = () => {
  return (
    <div>
      <h2>예매완료</h2>
      <button className={["btn", "main", "outLine"].join(" ")}>
        교환권출력
      </button>
      <button className={["btn", "main", "fill"].join(" ")}>예매 내역</button>
      <BookingNotice />
    </div>
  );
};

export default BookingTicket;
