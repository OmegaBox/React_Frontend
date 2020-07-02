import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  resetSeat,
  changePersonalCount,
} from "../../Reducer/bookingSeatReducer";
import { openModal } from "../../Reducer/modalReducer";

const BookingPersonalCounter = ({ type }) => {
  const dispatch = useDispatch();
  const [count, totalCount, bookingCount] = useSelector((state) => {
    const total = Object.values(state.Seat.personal).reduce((p, n) => p + n, 0);
    return [state.Seat.personal[type], total, state.Seat.selectedSeat.length];
  });

  // option 생성 배열
  const optionArray = new Array(9 - totalCount + count)
    .fill(0)
    .map((v, i) => i);

  // reset 이벤트
  const resetEvent = () => {
    dispatch(resetSeat());
  };

  // reset popup 열기
  const openResetPopup = () => {
    dispatch(
      openModal(
        "400px",
        "195px",
        "선택하신 좌석을 모두 취소하고 다시 선택하시겠습니까?",
        resetEvent
      )
    );
  };

  return (
    <div className="bookingPersonalCounter">
      <button
        className={["btn", "fill", "white", "xSmall", "minus"].join(" ")}
        onClick={() => {
          if (totalCount <= bookingCount) {
            openResetPopup();
          } else {
            dispatch(
              changePersonalCount(`${type}`, count <= 0 ? 0 : count - 1)
            );
          }
        }}
      >
        -
      </button>
      <select
        className={["select", "small", "count"].join(" ")}
        value={count}
        onChange={(e) => {
          if (totalCount - count + +e.target.value < bookingCount) {
            openResetPopup();
          } else {
            dispatch(changePersonalCount(`${type}`, +e.target.value));
          }
        }}
      >
        {optionArray.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button
        className={["btn", "fill", "white", "xSmall", "plus"].join(" ")}
        onClick={() => {
          dispatch(
            changePersonalCount(`${type}`, totalCount >= 8 ? count : count + 1)
          );
        }}
      >
        +
      </button>
    </div>
  );
};

export default BookingPersonalCounter;
