import React from "react";
import { useDispatch } from "react-redux";
import { openModal, setSize } from "../../Reducer/modalReducer";

const openloOutPopUp = ({ classSet }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className={classSet}
      onClick={() => {
        dispatch(setSize(null, "210px"));
        dispatch(
          openModal(
            "정말 로그아웃 하시겠습니까??",
          )
        );
      }}
    >
      로그아웃
    </button>
  );
};
export default openloOutPopUp;