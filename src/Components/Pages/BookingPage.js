import React, { useEffect } from "react";
import Booking from "../Templates/Booking";
import { useDispatch, useSelector } from "react-redux";
import {
  getTheatersCanBooking,
  getPossibleMovies,
} from "../../Reducer/bookingReducer";
import { checkLogin } from "../../Reducer/userInfoReducer";
import { openModal } from "../../Reducer/modalReducer";

const BookingPage = ({ history }) => {
  const dispatch = useDispatch();
  const isLoginCheck = useSelector((state) => state.userInfo.isLogin);

  const goHome = () => {
    history.push("/memberlogin");
  };

  if (!isLoginCheck)
    dispatch(
      openModal("로그인이 필요한 페이지 입니다", goHome, { oneBtn: true })
    );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getPossibleMovies());
    dispatch(getTheatersCanBooking());
    dispatch(checkLogin());
  }, [dispatch]);

  return <Booking history={history} />;
};

export default React.memo(BookingPage);
