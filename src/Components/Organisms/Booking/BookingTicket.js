import React from "react";
import "./style/BookingTicket.scss";
import BookingNotice from "../../Molecules/BookingNotice";
import { useSelector } from "react-redux";
import { numWithComma } from "../../../Utils/util";

//booking/payment-successcomplete

const BookingTicket = () => {
  const ticketState = useSelector((state) => state.Booking.ticket);
  let members = ticketState.ticketType.adult
    ? `성인 ${ticketState.ticketType.adult}명`
    : "";

  members += ticketState.ticketType.teen
    ? ` 청소년 ${ticketState.ticketType.teen}명`
    : "";

  members += ticketState.ticketType.preferential
    ? ` 우대 ${ticketState.ticketType.preferential}명`
    : "";

  const seatNumber = ticketState.seats.reduce(
    (acc, cur) => cur.seat_name + ` ${acc}`,
    ""
  );

  return (
    <div className="ticketWrap">
      <h2 className="pageTitle">예매완료</h2>
      <div className={["ticket", "clearfix"].join(" ")}>
        <div className="ticketNumberPoster">
          <h3 className="ticketNumberTitle">티켓 예매번호</h3>
          <p className="ticketNumber">{ticketState.number}</p>
          <div className="poster">
            <img src={ticketState.poster} alt="" />
          </div>
        </div>
        <div className="bookingInfoTicket">
          <div className="infoTitleWrap">
            <h3 className="title">예매가 완료되었습니다!</h3>
            <p className="point">
              <span className={["icon", "pointWhite"].join(" ")}></span>고객님의
              상영익일 적립예정 포인트는 <span>550P</span>입니다.
            </p>
          </div>
          <ul className="bookingMovieInfo">
            <li>
              <h4 className="title">예매영화</h4>
              <p className="content">
                {ticketState.selectedMovieTitle} / {ticketState.screenType}
              </p>
            </li>
            <li>
              <h4 className="title">관람극장/상영관</h4>
              <p className="content">
                {ticketState.selectedTheather} / {ticketState.screenHall}
              </p>
            </li>
            <li>
              <h4 className="title">관람일시</h4>
              <p className="content">
                {ticketState.selectedDate} {ticketState.seletedTime}
              </p>
            </li>
            <li>
              <h4 className="title">관람인원</h4>
              <p className="content">{members}</p>
            </li>
            <li>
              <h4 className="title">좌석번호</h4>
              <p className="content">{seatNumber}</p>
            </li>
            {/* <li>
              <h4 className="title">전화번호</h4>
              <p className="content">010-7137-1722</p>
            </li> */}
            <li>
              <h4 className="title">결제정보</h4>
              <p className="content">
                <span className="price">{numWithComma(ticketState.price)}</span>
                원
              </p>
            </li>
          </ul>
          {/* <div className="bookingMessage">
            <h4 className="title">
              <span>예매정보 추가 발송</span>
              <span className={["icon", "question"].join(" ")}></span>
            </h4>
            <label htmlFor="messagePhoneNumber" className="a11yHidden">
              발송할 전화번호
            </label>
            <input type="text" className="input" id="messagePhoneNumber" />
            <button
              type="button"
              className={["btn", "small", "outLine", "white"].join(" ")}
            >
              전송
            </button>
          </div> */}
        </div>
      </div>
      <div className="btnWrap">
        {/* <button className={["btn", "main", "outLine", "regular"].join(" ")}>
          교환권출력
        </button> */}
        <button className={["btn", "main", "fill", "regular"].join(" ")}>
          예매 내역
        </button>
      </div>
      <BookingNotice />
    </div>
  );
};

export default BookingTicket;
