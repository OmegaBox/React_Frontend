import React from "react";
import { useSelector } from "react-redux";
import ModalPortal from "../../Modules/ModalPortal";
import PopupNotice from "../Molecules/PopupNotice";

const ModalForm = () => {
  const [modal, text, event, w, h] = useSelector((state) => {
    const Modal = state.Modal;
    return [Modal.modal, Modal.text, Modal.event, Modal.width, Modal.height];
  });
  return (
    <div className="modalWrap">
      {modal && (
        <ModalPortal>
          <PopupNotice
            text={text}
            onEvent={event}
            popupSize={{
              width: w,
              height: h,
            }}
          />
        </ModalPortal>
      )}
    </div>
  );
};

export default React.memo(ModalForm);
