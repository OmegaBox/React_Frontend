import React from "react";
import { useSelector } from "react-redux";

import { numWithComma } from "../../Utils/ultil";

import "./style/BookingInfo.scss";

const age = (ageString) => {
  switch (ageString) {
    case "18+":
      return " ageGrade19Small";
    case "15+":
      return " ageGrade15Small";
    case "12+":
      return " ageGrade12Small";
    case "all":
    default:
      return " ageGradeSmall";
  }
};

const date = (dateValue) => {
  const dateNum = new Date(dateValue).getDay();
  let dateString = "";
  switch (dateNum) {
    case 0:
      dateString = "일";
      break;
    case 1:
      dateString = "월";
      break;
    case 2:
      dateString = "화";
      break;
    case 3:
      dateString = "수";
      break;
    case 4:
      dateString = "목";
      break;
    case 5:
      dateString = "금";
      break;
    case 6:
      dateString = "토";
      break;
    default:
      dateString = "-";
  }
  return `${dateValue.split("-").join(".")}(${dateString})`;
};

const BookingInfo = ({ props }) => {
  const {
    selectedMovieTitle,
    movieAgeGrade,
    selectedTheather,
    screenHall,
    seletedTime,
    selectedDate,
    endTime,
    poster,
  } = props;

  const [selectedSeat, personal, price] = useSelector((state) => [
    state.Seat.selectedSeat,
    state.Seat.personal,
    state.Seat.price,
  ]);

  let totalPrice = 0;

  const seatPersonalType = {
    adult: 0,
    teen: 0,
    preferential: 0,
  };
  // 각 인원별 수
  const personalTypeCounts = Object.values(personal);
  // 좌석 뷰 박스
  const seatBox = new Array(8).fill("-");

  selectedSeat.forEach((v, i) => {
    seatBox[i] = v;

    if (seatPersonalType.adult < personalTypeCounts[0]) {
      seatPersonalType.adult += 1;
      totalPrice += price.adult;
    } else if (seatPersonalType.teen < personalTypeCounts[1]) {
      seatPersonalType.teen += 1;
      totalPrice += price.teen;
    } else if (seatPersonalType.preferential < personalTypeCounts[2]) {
      seatPersonalType.preferential += 1;
      totalPrice += price.preferential;
    } else console.error("잘못된 값입니다.");
  });

  let totalPriceString = totalPrice.toString();

  // 인원 총 원
  const totalCount = personalTypeCounts.reduce((p, n) => p + n, 0);

  return (
    <section className="bookingInfo">
      <ul className="bookingInfoList">
        <li className={["bookingMovieTitle"].join(" ")}>
          <span className={`icon ${age(movieAgeGrade)}`} />
          <span>{selectedMovieTitle}</span>
        </li>
        <li className="bookingDetailInfo">
          <div>
            <span>{selectedTheather}</span>
            <br />
            <span>{screenHall}</span>
            <br />
            <span>{date(selectedDate)}</span>
            <br />
            <span>{`${seletedTime} ~ ${endTime}`}</span>
          </div>
          <img src={poster} alt={`${selectedMovieTitle} 포스터 이미지`}></img>
        </li>
        <li className="bookingSeatInfo">
          <ul className="seatInfo">
            <li>선택</li>
            <li>예매완료</li>
            <li>선택불가</li>
            <li>띄어앉기석</li>
            <li>일반</li>
            <li>장애인석</li>
          </ul>
          <div className="selectedSeatInfo">
            <span>선택좌석</span>
            <ul className="selectedSeat">
              {seatBox.map((s, i) => (
                <li
                  key={`select${i + 1}`}
                  className={
                    i < totalCount
                      ? s !== "-"
                        ? "selected"
                        : "selectedYet"
                      : ""
                  }
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="personalType">
          {Object.values(seatPersonalType)
            .map((v, i) => {
              if (v === 0) return "";
              const typeName = ["성인", "청소년", "우대"];
              return `${typeName[i]} ${v}`;
            })
            .filter((v) => v)
            .join("  ·  ")}
        </li>
        <li className="bookingTotalPrice">
          <span>최종결제금액</span>
          <span className="totalPrice">{numWithComma(totalPriceString)}</span>
          <span>원</span>
        </li>
      </ul>
      <div>
        <button className="btn regular pre">이전</button>
        <button
          className="btn regular next"
          disabled={totalCount !== 0 && totalCount === selectedSeat.length}
        >
          다음
        </button>
      </div>
    </section>
  );
};

export default BookingInfo;
