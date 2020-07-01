import React from "react";

import "./style/BookingSeatList.scss";

const screeningHallSeatInfo = {
  hallId: 0,
  maxSeat: 15,
  row: 10,
  enter: [["Front", 0]],
  exit: [["Back", 3]],
  except: (seatNum, row) => {
    const rowNum = row.charCodeAt() - 64;
    switch (true) {
      case seatNum === 1:
        return rowNum !== 1 && rowNum < 9;
      case seatNum > 1 && seatNum < 7:
        return rowNum < 9;
      case seatNum === 7 || seatNum === 8:
        return rowNum > 9;
      case seatNum === 9 || seatNum === 10:
        return rowNum !== 9;
      case seatNum > 10 && seatNum < 15:
        return rowNum !== 9 && rowNum !== 14;
      case seatNum === 15 || seatNum === 16:
        return rowNum !== 9;
      case seatNum === 21:
        return rowNum !== 14;
      case seatNum === 22:
        return rowNum > 1 && rowNum < 8;
      default:
        return true;
    }
  },
};

const rowNames = new Array(screeningHallSeatInfo.row)
  .fill(0)
  .map((v, i) => String.fromCharCode(65 + i));

const SeatNums = new Array(screeningHallSeatInfo.maxSeat)
  .fill(0)
  .map((v, i) => i + 1);

const BookingSeatList = () => {
  return (
    <div className={["bookingSeatList", "type1"].join(" ")}>
      <ul className="seatRowName">
        {rowNames.map((v) => (
          <li key={`rowName ${v}`} className="textBold">
            {v}
          </li>
        ))}
      </ul>
      <ul className="seatRow">
        {rowNames.map((row) => (
          <li key={`row ${row}`}>
            {SeatNums.map((num) => (
              <button
                key={`${row}${num}`}
                value={`${row}${num}`}
                className={["btn", "subLight"].join(" ")}
                // disabled={!screeningHallSeatInfo.except(num, row)}
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
