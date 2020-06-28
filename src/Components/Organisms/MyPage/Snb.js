import React from "react";
import { Link } from "react-router-dom";

const Snb = () => {
  return (
    <div>
      <Link to="/mypage">
        <button className={["btn", "fill", "white"].join(" ")}>
          마이페이지 메인으로
        </button>
      </Link>
      <Link to="/mypage/bookinghistory">
        <button className={["btn", "fill", "white"].join(" ")}>
          예매내역으로
        </button>
      </Link>
    </div>
  );
};

export default Snb;
