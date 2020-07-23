/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectSeatSaga,
  setReservedSeat,
} from "../../Reducer/bookingSeatReducer";

import {
  setSeatInfo,
  socialDistance,
  makeRowNameArray,
  makeSeatNumArray,
} from "../../Utils/bookingSeatUtils";

import "./style/BookingSeatList.scss";

const BookingSeatList = ({ scheduleId, seatType = 0 }) => {
  const dispatch = useDispatch();

  const [select, personal, reserved] = useSelector((state) => [
    state.Seat.selectedSeat,
    state.Seat.personal,
    state.Seat.reserved,
  ]);

  // 홀 타입
  const hallType = seatType;
  // 행 이름 배열
  const rowNames = makeRowNameArray(setSeatInfo(hallType).row);
  // 좌석 번호 배열
  const seatNums = makeSeatNumArray(setSeatInfo(hallType).maxSeat);
  // 선택 좌석 수
  const totalSeatCount = select.length;
  // 인원 총 원
  const totalCount = Object.values(personal).reduce((p, n) => p + n, 0);
  // 선택 가능
  const selectable = totalCount - totalSeatCount > 0;

  // useEffect re-rendering 방지용 체크
  let checktReservedSeat = "";
  // 예매된 좌석 정보 가져오기
  const callReservedSeatsApi = async () => {
    dispatch(setReservedSeat());
    checktReservedSeat = reserved.join("");
  };

  useEffect(() => {
    if (scheduleId && checktReservedSeat === "") callReservedSeatsApi();
  }, [checktReservedSeat]);

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
              const booked = reserved.includes(`${row}${num}`);
              const except = setSeatInfo(hallType).except(row, num);
              const selected = select.includes(`${row}${num}`);
              const social = socialDistance(row, num);
              return (
                <button
                  key={`${row}${num}`}
                  value={`${row}${num}`}
                  className={
                    ["btn", "subLight"].join(" ") +
                    (setSeatInfo(hallType).path.includes(num) ? " path" : "") +
                    (selected ? " select" : "") +
                    (except ? " no" : "") +
                    (setSeatInfo(hallType).handicapped.includes(`${row}${num}`)
                      ? " handicapped"
                      : "") +
                    (booked ? " booking" : "") +
                    (social ? " social" : "")
                  }
                  disabled={
                    booked || except || social || !(selectable || selected)
                  }
                  onClick={(e) => {
                    dispatch(selectSeatSaga(e.target.value));
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
