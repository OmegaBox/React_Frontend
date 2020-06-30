import React from "react";
import BookingSeatReset from "../../Molecules/BookingSeatReset";
import BookingPersonalSetting from "../../Molecules/BookingPersonalSetting";
import BookingSeatList from "../../Molecules/BookingSeatList";
import BookingInfo from "../../Molecules/BookingInfo";

import "./style/BookingSelectSeat.scss";

const BookingSelectSeat = () => {
  return (
    <section className="BookingSelectSeat">
      <div>
        <h3>관람인원 선택(최대 8매 선택 가능)</h3>
        <BookingSeatReset />
        <div className="BookingSeatWrap">
          <BookingPersonalSetting />
          <BookingSeatList />
        </div>
      </div>
      <BookingInfo />
    </section>
  );
};

export default BookingSelectSeat;
