import React, { useEffect } from "react";
import Booking from "../Templates/Booking";
import { useDispatch, useSelector } from "react-redux";
import {
  getTheatersCanBooking,
  getPossibleMovies,
} from "../../Reducer/bookingReducer";
import { checkLogin } from "../../Reducer/userInfoReducer";
import { setOneBtn } from "../../Reducer/modalReducer";
import ModalPortal from "../../Modules/ModalPortal";
import PopupNotice from "../Molecules/PopupNotice";

const BookingPage = ({ history }) => {
  const dispatch = useDispatch();
  const isLoginCheck = useSelector((state) => state.userInfo.isLogin);

  if (!isLoginCheck) dispatch(setOneBtn());

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getPossibleMovies());
    dispatch(getTheatersCanBooking());
    dispatch(checkLogin());
  }, [dispatch]);

  return (
    <div>
      <Booking history={history} />
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
    </div>
  );
};

export default BookingPage;
