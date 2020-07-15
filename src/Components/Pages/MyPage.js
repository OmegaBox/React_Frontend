import React, { useEffect } from "react";
import MyMegaBox from "../Templates/MyMegaBox";
import { useDispatch } from "react-redux";
import {
  checkLogin,
  GET_RESERVED,
  GET_MEMBER_DETAIL,
  GET_RESERVED_CANCELED,
  GET_TIMELINE_RATING,
  GET_TIMELINE_WATCHED,
  GET_TIMELINE_LIKE,
} from "../../Reducer/userInfoReducer";
import "./style/mypage.scss";

const MyPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(checkLogin());
    dispatch({ type: GET_MEMBER_DETAIL });
    dispatch({ type: GET_RESERVED });
    dispatch({ type: GET_RESERVED_CANCELED });
    dispatch({ type: GET_TIMELINE_RATING });
    dispatch({ type: GET_TIMELINE_WATCHED });
    dispatch({ type: GET_TIMELINE_LIKE });
  }, [dispatch]);

  return (
    <>
      <MyMegaBox />
    </>
  );
};

export default MyPage;
