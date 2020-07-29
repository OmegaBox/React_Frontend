import React, { useEffect } from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import SubBookingRouter from "../../Router/SubBookingRouter";
import { useSelector, useDispatch } from "react-redux";
import { setOneBtn } from "../../Reducer/modalReducer";
import { checkLogin } from "../../Reducer/userInfoReducer";
import ModalPortal from "../../Modules/ModalPortal";
import PopupNotice from "../Molecules/PopupNotice";
import { useHistory } from "react-router-dom";

const Booking = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoginCheck = useSelector((state) => state.userInfo.isLogin);

  if (!isLoginCheck) dispatch(setOneBtn());

  useEffect(() => {
    dispatch(checkLogin());
  });

  return (
    <>
      <Header />
      <SubBookingRouter />
      <Footer />
      {!isLoginCheck && (
        <ModalPortal>
          <PopupNotice
            text={"로그인이 필요한 페이지 입니다"}
            onEvent={() => {
              history.push("/memberlogin");
            }}
          />
        </ModalPortal>
      )}
    </>
  );
};

export default Booking;
