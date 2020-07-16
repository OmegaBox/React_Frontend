import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/omegabox_logo.jpg";
import "./style/LoginForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { startLogin, socialLogin } from "../../Reducer/userInfoReducer";
import GoogleLogin from "react-google-login";
import key from "../../key.json";
import ModalPortal from "../../Modules/ModalPortal";
import PopupNotice from "../Molecules/PopupNotice";

const LoginForm = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const errorMessage = useSelector(
    (state) => state.userInfo.login.errorMessage
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const [modal, text, event, w, h] = useSelector((state) => {
    const Modal = state.modal;
    return [Modal.modal, Modal.text, Modal.event, Modal.width, Modal.height];
  });

  const responseGoogle = (response) => {
    console.log(response);
    const user = {
      email: response.profileObj.email,
      googleId: response.googleId,
      token_id: response.tokenId,
      profileObj: response.profileObj,
    };
    dispatch(socialLogin(user, history));
  };

  return (
    <div className={["loginWrap"].join(" ")}>
      <div
        className={["loginBox"].join(" ")}
        style={{
          width: "480px",
          height: "500px",
        }}
      >
        {modal && (
          <ModalPortal>
            <PopupNotice
              text={text}
              onEvent={event}
              popupSize={{
                width: w,
                height: "200px",
              }}
            />
          </ModalPortal>
        )}
        <span className="omega_logo">
          <img src={logo} alt="omegabox Logo" />
        </span>
        <h2>로그인</h2>
        <button
          className={["btn", "xSmall", "btnClosed"].join(" ")}
          onClick={() => {
            history.push("/");
          }}
        >
          {" "}
          <span className={["icon", "closed"].join(" ")}></span>
        </button>
        <div className="popupContent">
          <GoogleLogin
            clientId={key.googleClientId}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            render={(renderProps) => (
              <button
                className={[
                  "btnGoogleLogin",
                  "btnGoogleSignUp",
                  "btn",
                  "white",
                  "fill",
                  "large",
                ].join(" ")}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <span className="logo"></span>
                <span className="loginText">구글 계정으로 로그인 하기</span>
              </button>
            )}
          />
          <label className="a11yHidden" htmlFor="userId">
            아이디
          </label>
          <input
            className={["input", "large"].join(" ")}
            type="text"
            id="userId"
            placeholder="아이디"
            onChange={(e) => setInputId(e.target.value)}
          />
          <label className="a11yHidden" htmlFor="userPw" name="password">
            비밀번호
          </label>
          <input
            className={["input", "large"].join(" ")}
            type="password"
            id="userPw"
            placeholder="비밀번호"
            onChange={(e) => {
              setInputPw(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.keyCode === 13)
                dispatch(
                  startLogin(
                    {
                      id: inputId,
                      pw: inputPw,
                    },
                    history
                  )
                );
            }}
          />
          <div className="inputWrap saveIdWrap">
            {/* <input type="checkbox" id="saveId" />
            <label htmlFor="saveId">
              <span className="inputIcon" />
              아이디 저장
            </label> */}
            <span className="loginError">{errorMessage}</span>
          </div>
          <button
            className={["btnLogin", "btn", "large"].join(" ")}
            type="submit"
            onClick={async () => {
              dispatch(
                startLogin(
                  {
                    id: inputId,
                    pw: inputPw,
                  },
                  history
                )
              );
            }}
          >
            로그인
          </button>
          <Link to="/membersignup" className="btnSignUp">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(LoginForm);
