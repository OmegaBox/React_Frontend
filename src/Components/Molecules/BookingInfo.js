import React from "react";

const ticket = {
  selectedDate: "2020-07-10",
  selectedtheather: "강남",
  selectedMovieTitle: "살아있다",
  movieAgeGrade: "19",
  screenHall: "2관",
  seletedTime: "19:40",
  endTime: "21:40",
  seats: [],
  ticketType: [],
  price: 30000,
};

const seatBox = new Array(8).fill("-");

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
  return (
    <section className="bookingInfo">
      <ul className="bookingInfoList">
        <li className="bookingMovieTitle">
          <span className={`age${ticket.movieAgeGrade}`}>
            {ticket.selectedMovieTitle}
          </span>
        </li>
        <li className="bookingDetailInfo">
          <div>
            <span>{ticket.selectedtheather}</span>
            <br />
            <span>{ticket.screenHall}</span>
            <br />
            <span>{`${ticket.selectedDate
              .split("-")
              .join(".")}(${date})`}</span>
            <br />
            <span>{`${ticket.seletedTime} ~ ${ticket.endTime}`}</span>
          </div>
          <img src="https://megabox.co.kr/SharedImg/2020/06/15/pjraLryYt5zQ1HEf6axtAdkXRhfhRZTZ_150.jpg"></img>
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
                <li key={`select${i + 1}`}>{s}</li>
              ))}
            </ul>
          </div>
        </li>
        <li className="bookingTotalPrice">
          <span>최종결제금액</span>
          <span>원</span>
        </li>
      </ul>
      <div>
        <button className="pre">이전</button>
        <button className="next" disabled={false}>
          다음
        </button>
      </div>
    </section>
  );
};

export default BookingInfo;
