/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import cookie from "react-cookies";
import { useDispatch } from "react-redux";
import { startLogout } from "../../Reducer/userInfoReducer";
import {
  GET_MEMBER_DETAIL_ERROR,
  GET_MEMBER_DETAIL_SUCCESS,
} from "../../Reducer/userInfoReducer";
import { userApi } from "../../Api/api";

const NavSample = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Link to="/">
        <button className={["btn", "fill", "white"].join(" ")}>메인으로</button>
      </Link>
      <Link to="/booking">
        <button className={["btn", "fill", "white"].join(" ")}>
          예매 페이지로
        </button>
      </Link>
      <Link to="/mypage">
        <button className={["btn", "fill", "white"].join(" ")}>
          마이 페이지로
        </button>
      </Link>
      <Link to="/event">
        <button className={["btn", "fill", "white"].join(" ")}>
          이벤트 페이지로
        </button>
      </Link>
      <Link to="/movieDetail:idx">
        <button className={["btn", "fill", "white"].join(" ")}>
          영화 상세페이지로
        </button>
      </Link>
      <Link to="/listMovies">
        <button className={["btn", "fill", "white"].join(" ")}>
          전체 영화리스트 페이지
        </button>
      </Link>
      <Link to="/booking/seat">
        <button className={["btn", "fill", "white"].join(" ")}>
          좌석선택 페이지로
        </button>
      </Link>
      <Link to="/booking/payment">
        <button className={["btn", "fill", "white"].join(" ")}>
          결제 페이지로
        </button>
      </Link>
      <Link to="/booking/ticket">
        <button className={["btn", "fill", "white"].join(" ")}>
          결제 티켓페이지
        </button>
      </Link>
      <Link to="/stylesample">
        <button className={["btn", "fill", "white"].join(" ")}>
          스타일 참고 페이지
        </button>
      </Link>
      <button
        className={["btn", "fill", "white"].join(" ")}
        onClick={() => alert(cookie.load("accessToken"))}
      >
        엑세스토큰 쿠키 확인 버튼
      </button>
      <button
        className={["btn", "fill", "white"].join(" ")}
        onClick={() => {
          dispatch(startLogout());
          window.scrollTo(0, 0);
        }}
      >
        로그아웃
      </button>
      <button
        onClick={async () => {
          try {
            const res = await userApi.memberDetail();
            if (res.status === 200 || res.status === 201) {
              dispatch({
                type: GET_MEMBER_DETAIL_SUCCESS,
                payload: res.data,
                name: res.data.name,
                profile: res.data.profile,
                likeMoviesCount: res.data.like_movies_count,
                ratingMoviesCount: res.data.rating_movies_count,
                reservedMoviesCount: res.data.reserved_movies_count,
                watchedMoviesCount: res.data.watched_movies_count,
              });
            } else {
              dispatch({
                // api 연결엔 성공했으니 뭔가 이상한게 넘어옴.
                type: GET_MEMBER_DETAIL_ERROR, // 필수
                errorMessage: "실패하다!",
              });
            }
          } catch (e) {
            // console.log("마이페이지 에러", e.response);

            dispatch({
              // api 연결에 문제가 있을때 이쪽으로 넘어옴.
              type: GET_MEMBER_DETAIL_ERROR, // 필수
              errorMessage: "실패하다!",
            });
          }
        }}
      >
        멤버디테일
      </button>
    </div>
  );
};

export default NavSample;
