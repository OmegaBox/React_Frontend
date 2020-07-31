import React, { useEffect } from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import SubBookingRouter from "../../Router/SubBookingRouter";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../Reducer/modalReducer";
import { checkLogin } from "../../Reducer/userInfoReducer";
import { useHistory } from "react-router-dom";

const Booking = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoginCheck = useSelector((state) => state.userInfo.isLogin);

  const goLogin = () => {
    history.push("/memberlogin");
  };

  if (!isLoginCheck)
    dispatch(
      openModal("로그인이 필요한 페이지 입니다.", goLogin, {
        oneBtn: true,
      })
    );

  useEffect(() => {
    dispatch(checkLogin());
  });

  return (
    <>
      <Header />
      <SubBookingRouter />
      <Footer />
    </>
  );
};

export default Booking;
