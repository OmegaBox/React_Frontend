import React from "react";
import { useSelector } from "react-redux";

import { numWithComma } from "../../Utils/ultil";

import "./style/BookingInfo.scss";

const ticket = {
  selectedDate: "2020-07-10",
  selectedTheather: "강남",
  selectedMovieTitle: "살아있다",
  movieAgeGrade: "All",
  screenHall: "2관",
  seletedTime: "19:40",
  endTime: "",
  seats: [],
  ticketType: {
    adult: 0,
    teen: 0,
    preferential: 0,
  },
  price: 0,
};

const date = (() => {
  const dataNum = new Date(ticket.selectedDate).getDay();

  switch (dataNum) {
    case 0:
      return "일";
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
    default:
      return "에러";
  }
})();

const BookingInfo = () => {
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

  const personalTypeCounts = Object.values(personal);

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
          <span className={`icon ageGrade${15}Small`} />
          <span>{ticket.selectedMovieTitle}</span>
        </li>
        <li className="bookingDetailInfo">
          <div>
            <span>{ticket.selectedTheather}</span>
            <br />
            <span>{ticket.screenHall}</span>
            <br />
            <span>{`${ticket.selectedDate
              .split("-")
              .join(".")}(${date})`}</span>
            <br />
            <span>{`${ticket.seletedTime} ~ ${ticket.endTime}`}</span>
          </div>
          <img
            src="https://megabox.co.kr/SharedImg/2020/06/15/pjraLryYt5zQ1HEf6axtAdkXRhfhRZTZ_150.jpg"
            alt="선택영화 포스터 이미지"
          ></img>
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
