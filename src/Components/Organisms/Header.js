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
              <li className="menuBar"></li>
              <li className="menuSearch"></li>
              <li><a href="#">영화</a></li>
              <li><a href="#">예매</a></li>
              <li><a href="#">극장</a></li>
            </ul>
            <ul className="mainRightSide">
              <li><a href="#">이벤트</a></li>
              <li><a href="#">스토어</a></li>
              <li><a href="#">혜택</a></li>
              <li className="menuSchedule"></li>
              <li className="menuMypage"></li>
            </ul>
          </nav>
        </div>
      </header >
    </div >
  );
};

export default Header;