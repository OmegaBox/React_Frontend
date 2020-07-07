import React from "react";
import "./style/MainHeader.scss";
import logo from "../../images/omegaWhite.png"
import { Link, Route } from "react-router-dom";

const MainHeader = () => {
  return (

    <div>
      <header className="headerLayout">
        <nav className="mainNav">
          <h1 className="mainLogo">
            <Link to="/">
              <img
                className="mainLogo"
                alt="omegabox logo"
                src={logo}
              />
            </Link>
          </h1>
          <div className="subNav">
            <ul className="subLeftSide">
              <li>VIP LOUNGE</li>
              <li>멤버십</li>
              <li>고객센터</li>
            </ul>
            <ul className="subRightSide">
              <li><Link to="/">로그인</Link></li>
              <li><Link to="/">회원가입</Link></li>
              <li><Link to="/Booking">빠른예매</Link></li>
            </ul>
          </div>
          <div className="bottom">
            <ul className="leftIcon">
              <li className="headerIcon menuBar"></li>
              <li className="headerIcon menuSearch"></li>
            </ul>
            <ul className="mainMenu mainLeftSide">
              <li><Link to="/listMovies">영화</Link></li>
              <li><Link to="/Booking">예매</Link></li>
              <li>극장</li>
            </ul>
            <ul className="mainMenu mainRightSide">
              <li>이벤트</li>
              <li>스토어</li>
              <li>혜택</li>
            </ul>
            <ul className="rightIcon">
              <li className="headerIcon menuSchedule"></li>
              <Link to="/MyPage"><li className="headerIcon menuMypage"></li></Link>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default MainHeader;