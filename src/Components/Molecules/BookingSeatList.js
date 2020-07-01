import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style/BookingSeatList.scss";

const screeningHallSeatInfo = {
  hallId: 0,
  maxSeat: 15,
  row: 10,
  enter: [["Front", 0]],
  exit: [["Back", 3]],
  except: (row, seatNum) => {
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
  const dispatch = useDispatch();

  const [select, personal] = useSelector((state) => [
    state.Seat.selectedSeat,
    state.Seat.personal,
  ]);

  // 선택 좌석 수
  const totalSeatCount = select.length;
  // 인원 총 원
  const totalCount = Object.values(personal).reduce((p, n) => p + n, 0);
  // 선택 가능
  const selectable = totalCount - totalSeatCount > 0;

  console.log(select, totalSeatCount, totalCount, selectable);

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
            {SeatNums.map((num) => {
              // const except = !screeningHallSeatInfo.except(row, num);
              const except = false;
              const selected = select.includes(`${row}${num}`);
              return (
                <button
                  key={`${row}${num}`}
                  value={`${row}${num}`}
                  className={
                    ["btn", "subLight"].join(" ") +
                    (except ? " no" : "") +
                    (selected ? " select" : "")
                  }
                  disabled={except || !(selectable || selected)}
                  onClick={(e) => {
                    dispatch({
                      type: "SET_SELECTSEAT",
                      selected: e.target.value,
                    });
                  }}
                >
                  {num}
                </button>
              );
            })}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingSeatList;
