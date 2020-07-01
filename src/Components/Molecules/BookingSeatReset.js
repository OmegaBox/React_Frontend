import React from "react";
import { useDispatch } from "react-redux";

import { RESET, OPEN_MODAL } from "../../Reducer/bookingSeatReducer";

const BookingSeatReset = () => {
  const dispatch = useDispatch();

  return (
    <button
      className={["btn", "xSmall", "white", "fill", "bookingSeatReset"].join(
        " "
      )}
      aria-label="초기화 버튼"
      onClick={() => {
        dispatch({
          type: OPEN_MODAL,
          text: "선택하신 좌석을 모두 취소하고 다시 선택하시겠습니까?",
          event: () => {
            dispatch({
              type: RESET,
            });
          },
        });
      }}
    >
      <span>초기화</span>
    </button>
  );
};

export default BookingSeatReset;
