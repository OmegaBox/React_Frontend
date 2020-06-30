/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import "./Header.scss";
// import { Link } from "react-router-dom"; 

const Header = () => {
  return (
    <div>
      <header className="headerLayout">
        <div>
          <nav className="mainNav">
            <h1 className="mainLogo"></h1>
            <ul className="mainLeftSide">
              <li className="headerIcon menuBar"><a href="#"></a></li>
              <li className="headerIcon menuSearch"><a href="#"></a></li>
              <li><a href="#"><span>영화</span></a></li>
              <li><a href="#"><span>예매</span></a></li>
              <li><a href="#"><span>극장</span></a></li>
            </ul>
            <ul className="mainRightSide">
              <li><a href="#">이벤트</a></li>
              <li><a href="#">스토어</a></li>
              <li><a href="#">혜택</a></li>
              <li className="headerIcon menuSchedule"></li>
              <li className="headerIcon menuMypage"></li>
            </ul>
            <div className="subNav">
              <ul className="subLeftSide">
                <li>VIP LOUNGE</li>
                <li>멤버십</li>
                <li>고객센터</li>
              </ul>
              <ul className="subRightSide">
                <li>로그인</li>
                <li>회원가입</li>
                <li>빠른예매</li>
              </ul>

            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;