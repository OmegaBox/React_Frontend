import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ModalPortal from "../../../Modules/ModalPortal";

import BookingSeatReset from "../../Molecules/BookingSeatReset";
import BookingPersonalSetting from "../../Molecules/BookingPersonalSetting";
import BookingSeatList from "../../Molecules/BookingSeatList";
import BookingInfo from "../../Molecules/BookingInfo";
import PopupNotice from "../../Molecules/PopupNotice";

import "./style/BookingSelectSeat.scss";

const BookingSelectSeat = ({ history }) => {
  const [modal, text, event, w, h, ticket] = useSelector((state) => {
    const Modal = state.modal;
    return [
      Modal.modal,
      Modal.text,
      Modal.event,
      Modal.width,
      Modal.height,
      state.Booking.ticket,
    ];
  });

  const {
    scheduleId,
    seatType,
    selectedDate,
    selectedTheather,
    selectedMovieTitle,
    screenHall,
    seletedTime,
    endTime,
  } = ticket;

  console.log(ticket);

  const checkTicket = () => {
    return (
      Object.values({
        seatType,
        selectedDate,
        selectedTheather,
        selectedMovieTitle,
        screenHall,
        seletedTime,
        endTime,
      }).every((v) => v !== "") && Number.isInteger(scheduleId)
    );
  };

  useEffect(() => {
    if (!checkTicket()) history.push("/");
  }, [checkTicket]);

  return (
    <section className="bookingSelectSeat">
      <div className="clearfix">
        <h3>관람인원 선택(최대 8매 선택 가능)</h3>
        <BookingSeatReset />
        <div className="bookingSeatWrap">
          <BookingPersonalSetting />
          <BookingSeatList scheduleId={scheduleId} seatType={seatType} />
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

export default React.memo(BookingSelectSeat);
