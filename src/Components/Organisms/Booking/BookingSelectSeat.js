import React from "react";
import { useSelector } from "react-redux";
import ModalPortal from "../../../Modules/ModalPortal";

import BookingSeatReset from "../../Molecules/BookingSeatReset";
import BookingPersonalSetting from "../../Molecules/BookingPersonalSetting";
import BookingSeatList from "../../Molecules/BookingSeatList";
import BookingInfo from "../../Molecules/BookingInfo";
import PopupNotice from "../../Molecules/PopupNotice";

import "./style/BookingSelectSeat.scss";

const BookingSelectSeat = () => {
  const [modal, text, event, w, h] = useSelector((state) => {
    const Modal = state.Modal;
    return [Modal.modal, Modal.text, Modal.event, Modal.width, Modal.height];
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
          <PopupNotice
            text={text}
            onEvent={event}
            popupSize={{
              width: w,
              height: h,
            }}
          />
        </ModalPortal>
      )}
    </section>
  );
};

export default BookingSelectSeat;
