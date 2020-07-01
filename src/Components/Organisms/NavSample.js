import React from "react";
import { Link } from "react-router-dom";

const NavSample = () => {
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
      <Link to="/movieDetail">
        <button className={["btn", "fill", "white"].join(" ")}>
          영화 상세페이지로
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
      <Link to="/stylesample">
        <button className={["btn", "fill", "white"].join(" ")}>
          스타일 참고 페이지
        </button>
      </Link>
    </div>
  );
};

export default NavSample;
