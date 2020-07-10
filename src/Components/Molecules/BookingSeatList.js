import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSelectSeat } from "../../Reducer/bookingSeatReducer";

import "./style/BookingSeatList.scss";
import { movieApi } from "../../Api/api";

// 홀 정보 배열
const screeningHallSeatInfo = [
  {
    hallId: 0,
    maxSeat: 15,
    row: 10,
    path: [4, 12],
    enter: [],
    exit: [],
    except: () => false,
    handicapped: ["A1", "A2", "A3"],
  },
  {
    hallId: 1,
    maxSeat: 22,
    row: 14,
    path: [6, 16],
    enter: [],
    exit: [],
    except: (row, seatNum) => {
      const rowNum = row.charCodeAt() - 64;
      switch (true) {
        case seatNum === 1:
          return rowNum === 1 || rowNum >= 9;
        case seatNum > 1 && seatNum < 7:
          return rowNum >= 9;
        case seatNum === 7 || seatNum === 8:
          return rowNum <= 9;
        case seatNum === 9 || seatNum === 10:
          return rowNum === 9;
        case seatNum > 10 && seatNum < 15:
          return rowNum === 9 || rowNum === 14;
        case seatNum === 15 || seatNum === 16:
          return rowNum === 9;
        case seatNum === 21:
          return rowNum === 14;
        case seatNum === 22:
          return rowNum === 1 || rowNum >= 8;
        default:
          return false;
      }
    },
    handicapped: ["A2", "A3", "A20", "A21", "A4", "N7"],
  },
  {
    hallId: 2,
    maxSeat: 12,
    row: 8,
    path: [4, 8],
    enter: [],
    exit: [],
    except: (row, seatNum) => {
      const rowNum = row.charCodeAt() - 64;
      switch (true) {
        case seatNum < 4:
          return rowNum > 4 + seatNum;
        case seatNum === 5 || seatNum === 8:
          return rowNum === 8;
        case seatNum > 9:
          return rowNum > 17 - seatNum;
        default:
          return false;
      }
    },
    handicapped: ["A11", "A12", "H6", "H7"],
  },
];

// 띄어앉기 석 로직
const socialDistance = (row, seatNum) => {
  const rowNum = row.charCodeAt() - 64;
  return rowNum % 3 === seatNum % 3;
};

const BookingSeatList = ({ scheduleId, seatType = 0 }) => {
  const [reservedSeats, setReservedSeat] = useState([]);
  const dispatch = useDispatch();

  const [select, personal] = useSelector((state) => [
    state.Seat.selectedSeat,
    state.Seat.personal,
  ]);

  // 홀 타입
  const hallType = seatType;
  // 행 이름 배열
  const rowNames = new Array(screeningHallSeatInfo[hallType].row)
    .fill(0)
    .map((v, i) => String.fromCharCode(65 + i));
  // 좌석 번호 배열
  const seatNums = new Array(screeningHallSeatInfo[hallType].maxSeat)
    .fill(0)
    .map((v, i) => i + 1);
  // 선택 좌석 수
  const totalSeatCount = select.length;
  // 인원 총 원
  const totalCount = Object.values(personal).reduce((p, n) => p + n, 0);
  // 선택 가능
  const selectable = totalCount - totalSeatCount > 0;

  // useEffect re-rendering 방지용 체크
  let checkRervedSeat = "";
  // 예매된 좌석 정보 가져오기
  const seatApi = async (id) => {
    try {
      const res = await movieApi.getReservedSeats(id);
      const reserved_seat = res.data.map((seat) => seat.reserved_seat);
      setReservedSeat(reserved_seat);
      checkRervedSeat = reserved_seat.join(" ");
    } catch (e) {
      console.error(`error : ${e.state}`);
      console.error(`${e.response}`);
    }
  };

  useEffect(() => {
    if (scheduleId) seatApi(scheduleId);
  }, [seatApi, scheduleId]);

  return (
    <div className="bookingSeatList">
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
            {seatNums.map((num) => {
              const booked = reservedSeats.includes(`${row}${num}`);
              const except = screeningHallSeatInfo[hallType].except(row, num);
              const selected = select.includes(`${row}${num}`);
              const social = socialDistance(row, num);
              return (
                <button
                  key={`${row}${num}`}
                  value={`${row}${num}`}
                  className={
                    ["btn", "subLight"].join(" ") +
                    (screeningHallSeatInfo[hallType].path.includes(num)
                      ? " path"
                      : "") +
                    (selected ? " select" : "") +
                    (except ? " no" : "") +
                    (screeningHallSeatInfo[hallType].handicapped.includes(
                      `${row}${num}`
                    )
                      ? " handicapped"
                      : "") +
                    (booked ? " booking" : "") +
                    (social ? " social" : "")
                  }
                  disabled={
                    booked || except || social || !(selectable || selected)
                  }
                  onClick={(e) => {
                    dispatch(setSelectSeat(e.target.value));
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

export default React.memo(BookingSeatList);
