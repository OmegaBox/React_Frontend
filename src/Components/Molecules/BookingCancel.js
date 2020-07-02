import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../Reducer/modalReducer";
const BookingSeatReset = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={["btn", "xSmall", "outLine", "lightGray"].join(" ")}
      onClick={() => {
        dispatch(openModal("400px", "185px", `예매 취소하시겠습니까?`));
      }}
    >
      예매취소
    </button>
  );
};

export default BookingSeatReset;
