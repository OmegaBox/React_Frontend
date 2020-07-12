import React from "react";
import { useSelector } from "react-redux";

import "./style/BookingPayment.scss";

const BookingPayment = () => {
  console.log(useSelector((state) => state.Booking.ticket));
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
          <img
            src="https://img.megabox.co.kr/SharedImg/2020/05/26/4DpEOKISeL20EXabwXkfsfaeeJW27heu_230.jpg"
            alt=""
          />
        </div>
        <div className="paymentInfo">
          <ul className="movieInfo">
            <li className={["grade", "icon", "ageGradeSmall"].join(" ")}>
              <h4 className="a11yHidden">관람등급</h4>
              <span className="a11yHidden">15세 이상</span>
            </li>
            <li className="title">
              <h4 className="a11yHidden">영화 제목</h4>
              <span>반도</span>
            </li>
            <li className="type">
              <h4 className="a11yHidden">영화 type</h4>
              <span>2D</span>
            </li>
            <li className="theater">
              <h4 className="a11yHidden">관람 극장 및 상영관</h4>
              <span>송파파크하비오</span> / <span>1</span>관
            </li>
            <li className="date">
              <h4 className="a11yHidden">관람 날짜</h4>
              <span>2020.07.15 (수)</span>
            </li>
            <li className="time">
              <h4 className="a11yHidden">관람 시간</h4>
              <span className={["icon", "time"].join(" ")}></span>
              <span>09:30~11:36</span>
            </li>
          </ul>
          <div className="dcEx">
            <ul className="priceProcess">
              <li>
                <h4 className="person">
                  성인 <span>1</span>
                </h4>
                <p className="price">8,000</p>
              </li>
              <li>
                <h4 className="person">
                  청소년 <span>1</span>
                </h4>
                <p className="price">8,000</p>
              </li>
              <li>
                <h4 className="person">
                  우대 <span>1</span>
                </h4>
                <p className="price">8,000</p>
              </li>
            </ul>
            <h4 className="subTitle">금액</h4>
            <p className="totalPrice">
              <span>19,000</span>원
            </p>
          </div>
          <div className="usePoint">
            <h4 className="subTitle">포인트 사용</h4>
            <p className="dcPrice">
              <span className="">2,000</span>원
            </p>
          </div>
          <div className="finalPaymentWrap">
            <h4 className="subTitle">최종결제금액</h4>
            <p className="payment">
              <span>19,000</span>원
            </p>
          </div>
        </div>
        <div className="btnWrap">
          <button
            type="button"
            className={["btn", "fill", "darkGray", "regular"].join(" ")}
          >
            이전
          </button>
          <button
            type="button"
            className={["btn", "fill", "sub", "regular"].join(" ")}
          >
            결제
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPayment;
