import React from "react";
import { useDispatch } from "react-redux";

import { CLOSE_MODAL } from "../../Reducer/bookingSeatReducer";

const PopupSeatSelect = ({ text = "", onEvent = null }) => {
  const dispatch = useDispatch();
  return (
    <div className={["popupWrap"].join(" ")}>
      <div className={["popupBox", "notice"].join(" ")}>
        <h2>알림</h2>
        <p>{text}</p>
        <div className="btnWrap">
          {onEvent && (
            <button
              type="button"
              className={["btn", "small", "main", "outLine"].join(" ")}
              onClick={() => {
                dispatch({
                  type: CLOSE_MODAL,
                });
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
              dispatch({
                type: CLOSE_MODAL,
              });
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupSeatSelect;
