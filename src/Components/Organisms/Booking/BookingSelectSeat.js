import React, { useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalPortal from "../../../Modules/ModalPortal";

import BookingSeatReset from "../../Molecules/BookingSeatReset";
import BookingPersonalSetting from "../../Molecules/BookingPersonalSetting";
import BookingSeatList from "../../Molecules/BookingSeatList";
import BookingInfo from "../../Molecules/BookingInfo";
import PopupNotice from "../../Molecules/PopupNotice";
import BookingFastTitle from "../../Atoms/BookingFastTitle";

import { resetSeat } from "../../../Reducer/bookingSeatReducer";

import "./style/BookingSelectSeat.scss";

const BookingSelectSeat = ({ history }) => {
  const dispatch = useDispatch();
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
    movieAgeGrade,
    poster,
    screenHall,
    screenType,
    seletedTime,
    endTime,
  } = ticket;

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

  useLayoutEffect(() => {
    if (!checkTicket()) history.push("/");
    return () => dispatch(resetSeat());
  }, [history]);

  return (
    <section className="bookingSelectSeat">
      <BookingFastTitle />
      <div className="clearfix bookingSelectSeatHeader">
        <h3>관람인원 선택(최대 8매 선택 가능)</h3>
        <BookingSeatReset />
        <div className="bookingSeatWrap">
          <BookingPersonalSetting />
          <BookingSeatList scheduleId={scheduleId} seatType={seatType} />
        </div>
      </div>
      <BookingInfo
        props={{
          selectedMovieTitle,
          screenType,
          movieAgeGrade,
          selectedTheather,
          screenHall,
          seletedTime,
          selectedDate,
          endTime,
          poster,
        }}
        goBack={() => {
          history.goBack();
        }}
      />
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
