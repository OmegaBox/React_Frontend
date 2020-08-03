import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../Reducer/modalReducer";
import { cancelBilling } from "../../Api/api";
import {
  GET_RESERVED,
  GET_RESERVED_CANCELED,
} from "../../Reducer/userInfoReducer";

const BookingCancel = ({ classSet, payment_id, receipt_id, price }) => {
  const dispatch = useDispatch();

  const cancel = async (id, receipt_id, price) => {
    try {
      const res = await cancelBilling(id, receipt_id, price);
      if (res.status === 200) {
        dispatch({ type: GET_RESERVED });
        dispatch({ type: GET_RESERVED_CANCELED });
        dispatch(openModal("결제 취소에 성공했습니다"));
      } else {
        dispatch(openModal("결제 취소에 실패했습니다"));
      }
    } catch (e) {
      dispatch(openModal("결제 취소에 실패했습니다"));
    }
  };

  return (
    <button
      type="button"
      className={classSet}
      onClick={() => {
        dispatch(
          openModal("예매 취소하시겠습니까?", () => {
            cancel(payment_id, receipt_id, price);
          })
        );
      }}
    >
      예매취소
    </button>
  );
};

export default React.memo(BookingCancel);
