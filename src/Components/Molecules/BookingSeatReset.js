import React from "react";
import { useDispatch } from "react-redux";

import { resetSeat, setReservedSeat } from "../../Reducer/bookingSeatReducer";
import { openModal, setSize } from "../../Reducer/modalReducer";

const BookingSeatReset = () => {
  const dispatch = useDispatch();
  const resetEvent = () => {
    dispatch(resetSeat());
    dispatch(setReservedSeat());
  };
  return (
    <button
      className={["btn", "xSmall", "white", "fill", "bookingSeatReset"].join(
        " "
      )}
      aria-label="초기화 버튼"
      onClick={() => {
        dispatch(setSize(null, "210px"));
        dispatch(
          openModal(
            "선택하신 좌석을 모두 취소하고 다시 선택하시겠습니까?",
            resetEvent
          )
        );
      }}
    >
      <span>초기화</span>
    </button>
  );
};

export default BookingSeatReset;
