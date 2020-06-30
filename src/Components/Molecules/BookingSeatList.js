import React from "react";

import "./style/BookingSeatList.scss";

const seatInfo = {
  maxSeat: 17,
  row: 15,
};

const rowNames = new Array(seatInfo.row)
  .fill(0)
  .map((v, i) => String.fromCharCode(65 + i));

const SeatNums = new Array(seatInfo.maxSeat).fill(0).map((v, i) => i + 1);

const BookingSeatList = () => {
  return (
    <div className={["bookingSeatList", "clearfix"].join(" ")}>
      <ul className="seatRowName">
        {rowNames.map((v) => (
          <li key={`rowName ${v}`}>{v}</li>
        ))}
      </ul>
      <ul className="seatRow">
        {rowNames.map((row) => (
          <li key={`row ${row}`}>
            {SeatNums.map((num) => (
              <button
                key={`${row}${num}`}
                value={`${row}${num}`}
                className={["btn", "sub"].join(" ")}
              >
                {num}
              </button>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingSeatList;
