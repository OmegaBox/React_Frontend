import React from "react";
import { useDispatch } from "react-redux";

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
          type: "RESET",
        });
      }}
    >
      <span>초기화</span>
    </button>
  );
};

export default BookingSeatReset;
