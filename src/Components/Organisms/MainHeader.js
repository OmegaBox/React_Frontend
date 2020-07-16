import React from "react";
import "./style/MainHeader.scss";
import logo from "../../images/omegaWhite.png";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import subHeaderLogo from "../../images/omegabox_logo.jpg";
import { useLocation } from "react-router-dom";
import { startLogout } from "../../Reducer/userInfoReducer";
import ModalPortal from "../../Modules/ModalPortal";
import PopupNotice from "../Molecules/PopupNotice";
import { openModal } from "../../Reducer/modalReducer";
import { useGoogleLogout } from "react-google-login";
import key from "../../key.json";

const MainHeader = () => {
  const dispatch = useDispatch();
  const [modal, text, event, w, h] = useSelector((state) => {
    const Modal = state.modal;
    return [Modal.modal, Modal.text, Modal.event, Modal.width, Modal.height];
  });

  const history = useHistory();

  let location = useLocation();
  let pageName = (pageLocation) => {
    let page = "";
    switch (pageLocation) {
      case "/listMovies":
        page = "영화";
        break;
      case "/Booking":
        page = "빠른예매";
        break;
      case "/mypage":
        page = "나의 메가박스";
        break;
      case "/event":
        page = "이벤트";
        break;
      case "/booking/seat":
        page = "빠른예매";
        break;
      case "/booking/payment":
        page = "빠른예매";
        break;
      case "/booking/ticket":
        page = "결제확인";
        break;
      case "/mypage/bookinghistory":
        page = "예매내역";
        break;
      case "/mypage/mymoviestory":
        page = "나의 무비스토리";
        break;
      default:
    }
    return page;
  };
  let pageUtilClass = (pageLocation) => {
    let utilClass = "";
    switch (pageLocation) {
      case "/listMovies":
        utilClass = "";
        break;
      case "/Booking":
        utilClass = "";
        break;
      case "/mypage":
        utilClass = "";
        break;
      case "/event":
        utilClass = "";
        break;
      case "/booking/seat":
        utilClass = "";
        break;
      case "/booking/payment":
        utilClass = "";
        break;
      case "/booking/ticket":
        utilClass = "";
        break;
      case "/mypage/bookinghistory":
        utilClass = "";
        break;
      case "/mypage/mymoviestory":
        utilClass = "";
        break;
      default:
        utilClass = "none";
    }
    return utilClass;
  };

  // 구글 로그아웃
  const { signOut } = useGoogleLogout({
    clientId: key.googleClientId,
    onLogoutSuccess: () => {
      console.log("구글 로그아웃 성공");
    },
  });

  const logOutPopup = () => {
    dispatch(startLogout());
    signOut();
    history.push("/");
  };
  const changeHeader = useSelector((state) => state.userInfo.isLogin);

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
                    <button
                      className="logoutBtn"
                      onClick={() => {
                        dispatch(
                          openModal("로그아웃하시겠습니까?", logOutPopup)
                        );
                      }}
                    >
                      로그아웃
                    </button>
                  </li>
                  <li>
                    <Link to="/">알림</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/memberlogin">로그인</Link>
                  </li>
                  <li>
                    <Link to="/membersignup">회원가입</Link>
                  </li>
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
        <div
          className={["pageUtil", `${pageUtilClass(location.pathname)}`].join(
            " "
          )}
        >
          <ul>
            <li className="home">
              <Link to="/"></Link>
            </li>
            <li>
              <Link to={location.pathname}>{pageName(location.pathname)}</Link>
            </li>
          </ul>
        </div>
        {modal && (
          <ModalPortal>
            <PopupNotice
              text={text}
              onEvent={event}
              popupSize={{
                width: w,
                height: h,
              }}
            />
          </ModalPortal>
        )}
      </header>
    </div>
  );
};

export default MainHeader;
