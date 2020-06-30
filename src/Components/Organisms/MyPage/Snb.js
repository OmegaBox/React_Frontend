import React from "react";
import { Link } from "react-router-dom";

const Snb = () => {
  return (
    <nav className="snb">
      <Link to="/mypage" className="title">
        나의 메가박스
      </Link>
      <ul className="navList">
        <li>
          <Link to="/mypage/bookinghistory">예매/구매내역</Link>
        </li>
        <li>
          <a href="#">영화/스토어 관람권</a>
          <ul className={["subNavList", "bullet"].join(" ")}>
            <li>
              <a href="#">영화관람권</a>
            </li>
            <li>
              <a href="#">스토어 교환권</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">할인/제휴쿠폰</a>
        </li>
        <li>
          <Link to="/mypage/point">멤버십 포인트</Link>
          <ul className={["subNavList", "bullet"].join(" ")}>
            <li>
              <a href="#">포인트 이용내역</a>
            </li>
            <li>
              <a href="#">멤버십 카드관리</a>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/mypage/mymoviestory">나의 무비스토리</Link>
        </li>
        <li>
          <a href="#">나의 이벤트 응모내역</a>
        </li>
        <li>
          <a href="#">나의 문의내역</a>
        </li>
        <li>
          <a href="#">자주쓰는 카드 관리</a>
        </li>
        <li>
          <Link to="/mypage/confirmpassword">회원정보</Link>
          <ul className={["subNavList", "bullet"].join(" ")}>
            <li>
              <Link to="/mypage/confirmpassword">개인정보수정</Link>
            </li>
            <li>
              <Link to="/mypage/editoption">선택정보수정</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Snb;
