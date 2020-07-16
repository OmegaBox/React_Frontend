import React from "react";
import { useDispatch } from "react-redux";
import { openModal, setSize } from "../../Reducer/modalReducer";
const BookingCancel = ({ classSet }) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={classSet}
      onClick={() => {
        dispatch(setSize(null, null));
        dispatch(openModal(`예매 취소하시겠습니까?`));
      }}
    >
      예매취소
    </button>
  );
};

export default React.memo(BookingCancel);
