import React from "react";
import { useSelector } from "react-redux";
import ModalPortal from "../../../Modules/ModalPortal";

import BookingSeatReset from "../../Molecules/BookingSeatReset";
import BookingPersonalSetting from "../../Molecules/BookingPersonalSetting";
import BookingSeatList from "../../Molecules/BookingSeatList";
import BookingInfo from "../../Molecules/BookingInfo";
import PopupSeatSelect from "../../Molecules/PopupSeatSelect";

import "./style/BookingSelectSeat.scss";

const BookingSelectSeat = () => {
  const [modal, text, event] = useSelector((state) => {
    const seat = state.Seat;
    return [seat.modal, seat.text, seat.event];
  });
  return (
    <section className="bookingSelectSeat">
      <div className="clearfix">
        <h3>관람인원 선택(최대 8매 선택 가능)</h3>
        <BookingSeatReset />
        <div className="bookingSeatWrap">
          <BookingPersonalSetting />
          <BookingSeatList />
        </div>
      </div>
      <BookingInfo />
      {modal && (
        <ModalPortal>
          <PopupSeatSelect text={text} onEvent={event} />
        </ModalPortal>
      )}
    </section>
  );
};

export default BookingSelectSeat;
