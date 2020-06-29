import React from "react";
import "./Header.scss";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="headerLayout">
        <div>
          <nav>
            <ul className="mainLeftSide">
              <li className="menuBar"></li>
              <li className="menuSearch"></li>
              <li>영화</li>
              <li>예매</li>
              <li>극장</li>
            </ul>
          </nav>
        </div>
        <div className="mainLogo"></div>
        <div>
          <div className="menuIcon">
            <ul className="mainRightSide">
              <li>이벤트</li>
              <li>스토어</li>
              <li>혜택</li>
              <li className="menuSchedule"></li>
              <li className="menuMypage"></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;