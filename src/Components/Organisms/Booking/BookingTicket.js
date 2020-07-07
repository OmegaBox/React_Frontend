import React from "react";
import "./style/BookingTicket.scss";
import BookingNotice from "../../Molecules/BookingNotice";

//booking/payment-successcomplete

const BookingTicket = () => {
  return (
    <div className="ticketWrap">
      <h2 className="pageTitle">예매완료</h2>
      <div className={["ticket", "clearfix"].join(" ")}>
        <div className="ticketNumberPoster">
          <h3 className="ticketNumberTitle">티켓 예매번호</h3>
          <p className="ticketNumber">9207-117-46921</p>
          <div className="poster">
            <img
              src="https://img.megabox.co.kr/SharedImg/2020/05/26/4DpEOKISeL20EXabwXkfsfaeeJW27heu_230.jpg"
              alt=""
            />
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
              <p className="content">결백 / 2D</p>
            </li>
            <li>
              <h4 className="title">관람극장/상영관</h4>
              <p className="content">송파파크하비오 / 5관</p>
            </li>
            <li>
              <h4 className="title">관람일시</h4>
              <p className="content">2020.06.28(일) 18:35</p>
            </li>
            <li>
              <h4 className="title">관람인원</h4>
              <p className="content">성인 1명</p>
            </li>
            <li>
              <h4 className="title">좌석번호</h4>
              <p className="content">I열 1명</p>
            </li>
            <li>
              <h4 className="title">전화번호</h4>
              <p className="content">010-7137-1722</p>
            </li>
            <li>
              <h4 className="title">결제정보</h4>
              <p className="content">
                <span className="price">11,000</span>원
              </p>
            </li>
          </ul>
          <div className="bookingMessage">
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
          </div>
        </div>
      </div>
      <div className="btnWrap">
        <button className={["btn", "main", "outLine", "regular"].join(" ")}>
          교환권출력
        </button>
        <button className={["btn", "main", "fill", "regular"].join(" ")}>
          예매 내역
        </button>
      </div>
      <BookingNotice />
    </div>
  );
};

export default BookingTicket;
