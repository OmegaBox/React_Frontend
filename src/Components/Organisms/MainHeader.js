import React from "react";
import "./style/MainHeader.scss";
import logo from "../../images/omegaWhite.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import subHeaderLogo from "../../images/omegabox_logo.jpg";
import { useLocation } from "react-router-dom";
import { startLogout } from "../../Reducer/userInfoReducer";


const MainHeader = () => {
  const dispatch = useDispatch();

  let location = useLocation();
  let pageName = (pageLocation) => {
    let page = "";
    switch (pageLocation) {
      case "/listMovies":
        page = "영화";
        break;
      case "/Booking":
        page = "예매";
        break;
      case "/mypage":
        page = "나의 메가박스";
        break;
      case "/event":
        page = "이벤트";
        break;
      default:
    }
    return page;
  };

  const changeHeader = useSelector((state) => state.userInfo.isLogin);
  const clickLogout = (e) => {
    dispatch(startLogout());
  };
  return (
    <div>
      <header
        className={[
          "headerLayout",
          `${location.pathname === "/" ? "" : "subHeader"}`,
        ].join(" ")}
      >
        <nav className="mainNav">
          <h1 className="mainLogo">
            <Link to="/">
              <img
                className="mainLogo"
                alt="omegabox logo"
                src={location.pathname === "/" ? logo : subHeaderLogo}
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
              {changeHeader === true ? (
                <>
                  <li>
                    <Link to="/"
                      onClick={clickLogout}
                    >
                      로그아웃
                    </Link>
                  </li>
                  <li><Link to="/">알림</Link></li>
                </>
              ) : (
                  <>
                    <li><Link to="/memberlogin">로그인</Link></li>
                    <li><Link to="/membersignup">회원가입</Link></li>
                  </>
                )}
              <li>
                <Link to="/Booking">빠른예매</Link>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <ul className="leftIcon">
              <li className="headerIcon menuBar"></li>
              <li className="headerIcon menuSearch"></li>
            </ul>
            <ul className="mainMenu mainLeftSide">
              <li>
                <Link to="/listMovies">영화</Link>
              </li>
              <li>
                <Link to="/Booking">예매</Link>
              </li>
              <li>극장</li>
            </ul>
            <ul className="mainMenu mainRightSide">
              <Link to="/event">이벤트</Link>
              <li>스토어</li>
              <li>혜택</li>
            </ul>
            <ul className="rightIcon">
              <li className="headerIcon menuSchedule"></li>
              <Link to="/mypage">
                <li className="headerIcon menuMypage"></li>
              </Link>
            </ul>
          </div>
        </nav>
        <div className="pageUtil">
          <ul>
            <li className="home">
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="">{pageName(location.pathname)}</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
