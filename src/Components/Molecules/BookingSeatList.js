import React from "react";

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
    <div id="bookingSeatList">
      <ul id="listRowName">
        {rowNames.map((v) => (
          <li key={`rowName ${v}`}>{v}</li>
        ))}
      </ul>
      <ul id="listRow">
        {rowNames.map((row) => (
          <li key={`row ${row}`}>
            <ul className="listSeat">
              {SeatNums.map((num) => (
                <li key={`${row}${num}`}>{num}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingSeatList;
