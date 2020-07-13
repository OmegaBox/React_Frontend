import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./style/BookingPayment.scss";
import { billing } from "../../../Api/api";
import { numWithComma } from "../../../Utils/util";

const BookingPayment = () => {
  const history = useHistory();
  const ticketState = useSelector((state) => state.Booking.ticket);
  const dispatch = useDispatch();
  console.log(ticketState);

  let iconClassName = "icon";
  switch (ticketState.movieAgeGrade) {
    case "18+":
      iconClassName += " ageGrade19Small";
      break;
    case "15+":
      iconClassName += " ageGrade15Small";
      break;
    case "12+":
      iconClassName += " ageGrade12Small";
      break;
    case "all":
    default:
      iconClassName += " ageGradeSmall";
      break;
  }

  // if (!ticketState.reservationInfos.length) history.push("/booking");

  return (
    <div className="bookingPaymentWrap">
      <h2 className="title">빠른예매</h2>
      <div className="pointWrap">
        <h3 className="a11yHidden">포인트 사용</h3>
        <p className="stitle">
          <span className={["icon", "point"].join(" ")}></span>
          <span>사용가능한 멤버십 포인트</span>
          <span className="point"> 200 P</span>
        </p>
        <label htmlFor="usePointInput" className="a11yHidden">
          사용할 포인트
        </label>
        <input
          type="number"
          id="usePointInput"
          placeholder="사용할 포인트를 입력하세요"
          className={["input", "regular"].join(" ")}
        />
        원
        <button
          type="button"
          className={["btn", "main", "fill", "regular"].join(" ")}
        >
          사용
        </button>
      </div>
      <div className="paymentInfoWrap">
        <div className="moviePoster">
          <img src={`${ticketState.poster}`} alt="" />
        </div>
        <div className="paymentInfo">
          <ul className="movieInfo">
            <li className={["grade", { iconClassName }].join(" ")}>
              <h4 className="a11yHidden">관람등급</h4>
              <span className="a11yHidden">{ticketState.movieAgeGrade}</span>
              <span className={iconClassName} />
            </li>
            <li className="title">
              <h4 className="a11yHidden">영화 제목</h4>
              <span>{ticketState.selectedMovieTitle}</span>
            </li>
            <li className="type">
              <h4 className="a11yHidden">{ticketState.screenType}</h4>
              <span>2D</span>
            </li>
            <li className="theater">
              <h4 className="a11yHidden">관람 극장 및 상영관</h4>
              <span>{ticketState.selectedTheather}</span> /{" "}
              <span>{ticketState.screenHall}</span>
            </li>
            <li className="date">
              <h4 className="a11yHidden">관람 날짜</h4>
              <span>{ticketState.selectedDate}</span>
            </li>
            <li className="time">
              <h4 className="a11yHidden">관람 시간</h4>
              <span className={["icon", "time"].join(" ")}></span>
              <span>
                {ticketState.seletedTime}~{ticketState.endTime}
              </span>
            </li>
          </ul>
          <div className="dcEx">
            <ul className="priceProcess">
              <li>
                <h4 className="person">성인</h4>
                <p className="price">
                  {numWithComma(ticketState.priceList.adult)}
                </p>
              </li>
              <li>
                <h4 className="person">청소년</h4>
                <p className="price">
                  {numWithComma(ticketState.priceList.teen)}
                </p>
              </li>
              <li>
                <h4 className="person">우대</h4>
                <p className="price">
                  {numWithComma(ticketState.priceList.preferential)}
                </p>
              </li>
            </ul>
            <h4 className="subTitle">금액</h4>
            <p className="totalPrice">
              <span>{numWithComma(ticketState.price)}</span>원
            </p>
          </div>
          <div className="usePoint">
            <h4 className="subTitle">포인트 사용</h4>
            <p className="dcPrice">
              <span className="">0</span>원
            </p>
          </div>
          <div className="finalPaymentWrap">
            <h4 className="subTitle">최종결제금액</h4>
            <p className="payment">
              <span>{numWithComma(ticketState.price)}</span>원
            </p>
          </div>
        </div>
        <div className="btnWrap">
          <button
            type="button"
            className={["btn", "fill", "darkGray", "regular"].join(" ")}
            onClick={() => history.goBack()}
          >
            이전
          </button>
          <button
            type="button"
            className={["btn", "fill", "sub", "regular"].join(" ")}
            onClick={() => {
              billing({
                title: ticketState.selectedMovieTitle,
                price: ticketState.price,
                reservations: ticketState.reservationInfos,
                history,
                dispatch,
              });
            }}
          >
            결제
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPayment;
