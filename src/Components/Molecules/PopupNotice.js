import React from "react";
import { useDispatch } from "react-redux";

import { closeModal } from "../../Reducer/modalReducer";

const PopupNotice = ({ text = "", onEvent = null, popupSize = {} }) => {
  const dispatch = useDispatch();
  return (
    <div className={["popupWrap"].join(" ")}>
      <div className={["popupBox", "notice"].join(" ")} style={popupSize}>
        <h2>알림</h2>
        <p>{text}</p>
        <div className="btnWrap">
          {onEvent && (
            <button
              type="button"
              className={["btn", "small", "main", "outLine"].join(" ")}
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              취소
            </button>
          )}
          <button
            type="button"
            className={["btn", "small", "main", "fill"].join(" ")}
            onClick={() => {
              if (onEvent) onEvent();
              dispatch(closeModal());
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupNotice;
