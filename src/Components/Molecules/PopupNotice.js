import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { closeModal } from "../../Reducer/modalReducer";

const PopupNotice = ({ text = "", onEvent = null, popupSize = {} }) => {
  const dispatch = useDispatch();
  const oneBtn = useSelector((state) => state.modal.oneBtn);
  return (
    <div className={["popupWrap"].join(" ")}>
      <div className={["popupBox", "notice"].join(" ")} style={popupSize}>
        <h2>알림</h2>
        <button
          className={["btn", "xSmall", "closed"].join(" ")}
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          {" "}
          <span className={["icon", "closed"].join(" ")}></span>
        </button>
        <div className="popupContent">
          <p>{text}</p>
        </div>
        <div className="btnWrap">
          {!oneBtn && onEvent && (
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
