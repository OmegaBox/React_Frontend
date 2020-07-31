import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { closeModal } from "../../Reducer/modalReducer";

const PopupNotice = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.Modal);
  const size = {
    width: modalState.width,
    height: modalState.height,
  };
  const okEvent = () => {
    if (modalState.event) modalState.event();
    dispatch(closeModal());
  };
  const closeEvent = () => {
    dispatch(closeModal());
  };

  return (
    <div className={["popupWrap"].join(" ")}>
      <div className={["popupBox", "notice"].join(" ")} style={size}>
        <h2>알림</h2>
        {!modalState.oneBtn && (
          <button
            className={["btn", "xSmall", "closed"].join(" ")}
            onClick={closeEvent}
          >
            {" "}
            <span className={["icon", "closed"].join(" ")}></span>
          </button>
        )}
        <div className="popupContent">
          <p>{modalState.text}</p>
        </div>
        <div className="btnWrap">
          {!modalState.oneBtn && modalState.event && (
            <button
              type="button"
              className={["btn", "small", "main", "outLine"].join(" ")}
              onClick={closeEvent}
            >
              취소
            </button>
          )}
          <button
            type="button"
            className={["btn", "small", "main", "fill"].join(" ")}
            onClick={okEvent}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupNotice;
