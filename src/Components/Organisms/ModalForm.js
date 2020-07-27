import React from "react";
import { useSelector } from "react-redux";
import ModalPortal from "../../Modules/ModalPortal";
import PopupNotice from "../Molecules/PopupNotice";

const ModalForm = () => {
  const modal = useSelector((state) => state.Modal.modal);
  return (
    <div className="modalWrap">
      {modal && (
        <ModalPortal>
          <PopupNotice />
        </ModalPortal>
      )}
    </div>
  );
};

export default React.memo(ModalForm);
