import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import BookingSeatReset from "../../Molecules/BookingSeatReset";
import BookingPersonalSetting from "../../Molecules/BookingPersonalSetting";
import BookingSeatList from "../../Molecules/BookingSeatList";
import BookingInfo from "../../Molecules/BookingInfo";
import BookingFastTitle from "../../Atoms/BookingFastTitle";
import Loading from "../../Atoms/Loading";

import { resetThunk } from "../../../Reducer/bookingSeatReducer";

import "./style/BookingSelectSeat.scss";

const BookingSelectSeat = ({ history }) => {
  const dispatch = useDispatch();
  const ticket = useSelector((state) => {
    return state.Booking.ticket;
  });

  console.log(ticket);

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
    priceList,
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

  useEffect(() => {
    console.log("didMount");
    if (!checkTicket()) history.push("/");
    dispatch(resetThunk(history.location.pathname));
    return () => {
      console.log("unMount");
    };
  }, []);

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
          scheduleId,
          selectedMovieTitle,
          screenType,
          movieAgeGrade,
          selectedTheather,
          screenHall,
          seletedTime,
          selectedDate,
          endTime,
          poster,
          priceList,
        }}
        goHome={() => {
          history.push("/");
        }}
        goBack={() => {
          history.goBack();
        }}
        goNext={() => {
          history.push("/booking/payment");
        }}
      />
      <Loading />
    </section>
  );
};

export default React.memo(BookingSelectSeat);
