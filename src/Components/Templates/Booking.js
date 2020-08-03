import React, { useEffect } from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import SubBookingRouter from "../../Router/SubBookingRouter";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../Reducer/userInfoReducer";
import { useHistory } from "react-router-dom";

const Booking = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const goLogin = () => {
    history.push("/memberlogin");
  };

  useEffect(() => {
    dispatch(checkLogin(goLogin));
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
