import React from "react";
import { Link } from "react-router-dom";
import "./style/Snb.scss";

const Snb = () => {
  return (
    <nav className="snb">
      <Link to="/mypage" className="title">
        나의 메가박스
      </Link>
      <ul className="navList">
        <li>
          <Link to="/mypage/bookinghistory">예매내역</Link>
        </li>
        <li>
          <div className={["linkDisabled"].join(" ")}>영화/스토어 관람권</div>
          <ul className={["subNavList", "bullet"].join(" ")}>
            <li>
              <div className={["linkDisabled"].join(" ")}>영화관람권</div>
            </li>
            <li>
              <div className={["linkDisabled"].join(" ")}>스토어 교환권</div>
            </li>
          </ul>
        </li>
        <li>
          <div className={["linkDisabled"].join(" ")}>할인/제휴쿠폰</div>
        </li>
        <li>
          <div className={["linkDisabled"].join(" ")}>멤버십 포인트</div>
          <ul className={["subNavList", "bullet"].join(" ")}>
            <li>
              <div className={["linkDisabled"].join(" ")}>포인트 이용내역</div>
            </li>
            <li>
              <div className={["linkDisabled"].join(" ")}>멤버십 카드관리</div>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/mypage/mymoviestory">나의 무비스토리</Link>
        </li>
        <li>
          <div className={["linkDisabled"].join(" ")}>나의 이벤트 응모내역</div>
        </li>
        <li>
          <div className={["linkDisabled"].join(" ")}>나의 문의내역</div>
        </li>
        <li>
          <div className={["linkDisabled"].join(" ")}>자주쓰는 카드 관리</div>
        </li>
        <li>
          <div className={["linkDisabled"].join(" ")}>회원정보</div>
          <ul className={["subNavList", "bullet"].join(" ")}>
            <li>
              <div className={["linkDisabled"].join(" ")}>개인정보수정</div>
            </li>
            <li>
              <div className={["linkDisabled"].join(" ")}>선택정보수정</div>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(Snb);
