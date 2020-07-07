import React from "react";
import "./style/BookingTicket.scss";
import BookingNotice from "../../Molecules/BookingNotice";

//booking/payment-successcomplete

const BookingTicket = () => {
  return (
    <div className="ticketWrap">
      <h2 className="pageTitle">예매완료</h2>
      <div className="ticket">
        <img src="https://img.megabox.co.kr/static/pc/images/reserve/bg-reserve-finish-top.png" />
      </div>
      <div className="btnWrap">
        <button className={["btn", "main", "outLine"].join(" ")}>
          교환권출력
        </button>
        <button className={["btn", "main", "fill"].join(" ")}>예매 내역</button>
      </div>
      <BookingNotice />
    </div>
  );
};

export default BookingTicket;
