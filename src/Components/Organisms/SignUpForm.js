import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../images/omegabox_logo.jpg";
import GoogleLogin, { GoogleLogout, useGoogleLogout } from "react-google-login";
import key from "../../key.json";
import "./style/SignUpForm.scss";

import { getToday, regExp } from "../../Utils/util";
import { userApi, isLogin } from "../../Api/api";

import { openModal, setSize, setOneBtn } from "../../Reducer/modalReducer";
import ModalPortal from "../../Modules/ModalPortal";
import PopupNotice from "../Molecules/PopupNotice";

const initSignState = {
  name: "",
  id: "",
  pw: "",
  pwCheck: "",
  birth: getToday(),
  tell: "",
  email: "",
};

const initAlertState = {
  onAlert: {
    name: false,
    id: false,
    pw: false,
    pwCheck: false,
    tell: false,
    email: false,
  },
  alertText: {
    name: false,
    id: false,
    pw: false,
    pwCheck: false,
    tell: false,
    email: false,
  },
};

const SignUpForm = ({ history }) => {
  const dispatch = useDispatch();
  // 회원가입 상태
  const [inputState, setInput] = useState(initSignState);

  // 중복 체크 상태
  const [checkDoubleState, checkDoubleDispatch] = useState(false);

  // 경고 문구 출력 여부
  const [alertState, setAlert] = useState(initAlertState);

  // 구글 로그인 상태
  const [isGoogleSignup, setGoogleSignup] = useState(false);

  // 구글 로그아웃
  const { signOut } = useGoogleLogout({
    clientId: key.googleClientId,
    onLogoutSuccess: () => {
      console.log("구글 로그아웃 성공");
    },
  });

  // 모달창 상태
  const [modal, text, event, w, h] = useSelector((state) => {
    const Modal = state.modal;
    return [Modal.modal, Modal.text, Modal.event, Modal.width, Modal.height];
  });

  // input Ref
  const inputRefs = {
    name: useRef(),
    id: useRef(),
    pw: useRef(),
    pwCheck: useRef(),
    tell: useRef(),
    email: useRef(),
  };
  const btnCheckDoubleRef = useRef();

  // 상태 전부 초기화
  const reset = () => {
    setInput(initSignState);
    checkDoubleDispatch(false);
    setAlert(initAlertState);
    if (isGoogleSignup) {
      signOut();
      setGoogleSignup(false);
    }
  };

  // 로그인 창으로
  const goLogin = () => {
    history.push("/memberlogin");
  };

  // 정규식 체크
  const checkRegExp = (key) => {
    return regExp[key].test(inputState[key]);
  };

  // input onChangeEvent
  const changeInput = (e) => {
    const name = e.target.name;
    let value = e.target.value.split(" ").join("");

    if (alertState.onAlert[name])
      setAlert({
        onAlert: {
          ...alertState.onAlert,
          [name]: false,
        },
        alertText: {
          ...alertState.alertText,
          [name]: "",
        },
      });

    if (name === "id") checkDoubleDispatch(false);

    if (name === "pw" && alertState.onAlert.pwCheck)
      setAlert({
        onAlert: {
          ...alertState.onAlert,
          pwCheck: false,
        },
        alertText: {
          ...alertState.alertText,
          pwCheck: "",
        },
      });

    if (name === "tell")
      value = [...value].filter((v) => /[0-9]/g.test(v)).join("");

    setInput({
      ...inputState,
      [name]: value,
    });
  };

  // input onBluerEvent
  const bluerInput = (e) => {
    console.log("블러");
    const name = e.target.name;
    if (inputState[name] === "") return;
    if (name === "pwCheck" && inputState.pw !== inputState.pwCheck) {
      console.log("패스워드 체크");
      setAlert({
        onAlert: {
          ...alertState.onAlert,
          pwCheck: true,
        },
        alertText: {
          ...alertState.alertText,
          pwCheck: "비밀번호와 일치하지 않습니다",
        },
      });
    }
    if (!regExp[name] || name === "id") return;
    else if (!checkRegExp(name)) {
      const alertText = (() => {
        switch (name) {
          case "name":
            return "이름 형식에 맞지 않습니다";
          case "pw":
            return "비밀번호 규칙에 맞지 않습니다";
          case "tell":
            return "전화번호 형식이 아닙니다";
          case "email":
            return "이메일 형식이 아닙니다";
          default:
            return "경고 문구";
        }
      })();
      setAlert({
        onAlert: {
          ...alertState.onAlert,
          [name]: true,
        },
        alertText: {
          ...alertState.alertText,
          [name]: alertText,
        },
      });
    }
  };

  // 아이디 중복체크
  const checkDouble = async (e) => {
    const idAlert = (result) => {
      setAlert({
        onAlert: {
          ...alertState.onAlert,
          id: true,
        },
        alertText: {
          ...alertState.alertText,
          id: result ? "사용가능한 아이디입니다" : "중복되는 아이디입니다",
        },
      });
    };
    try {
      await userApi.idDoubleCheck(inputState.id);
      checkDoubleDispatch(true);
      idAlert(true);
    } catch ({ response }) {
      if (
        response.status !== 400 ||
        response.data.detail !== "이미 가입된 아이디입니다."
      ) {
        console.error(response);
        return;
      }
      checkDoubleDispatch(false);
      idAlert(false);
      setInput({
        ...inputState,
        id: "",
      });
      inputRefs.id.current.focus();
    }
  };

  // 회원가입 버튼 활성화
  const signAble = isGoogleSignup
    ? checkRegExp("tell")
    : Object.values(inputState).every((v) => v !== "");

  // 회원 가입 이벤트
  const signUpEvent = async () => {
    const keys = ["name", "pw", "pwCheck", "tell", "email"];
    // 회원가입 요청
    const sendSignup = async (isGoogle) => {
      try {
        let successText = "";
        if (isGoogle) {
          await userApi.googleSignup({
            username: inputState.id,
            email: inputState.email,
            name: inputState.name,
            mobile: inputState.tell,
            birth_date: inputState.birth,
            unique_id: inputState.pw,
          });
          successText = "구글 회원가입 성공";
          reset();
        } else {
          await userApi.signup({
            name: inputState.name,
            id: inputState.id,
            pw: inputState.pw,
            pwCheck: inputState.pwCheck,
            birth: inputState.birth,
            tell: inputState.tell,
            email: inputState.email,
          });
          successText = "회원가입에 성공하셨습니다.";
        }
        dispatch(setOneBtn());
        dispatch(openModal(successText, goLogin));
      } catch ({ response }) {
        console.log(response);
        if (response.status === 400) {
          let errorDetail = "";
          Object.keys(response.data).forEach((key) => {
            errorDetail = response.data[key];
          });
          console.error(errorDetail);
          dispatch(setOneBtn());
          dispatch(
            openModal(errorDetail, () => {
              switch (errorDetail) {
                case "이미 가입된 이메일 주소입니다.":
                  inputRefs.email.current.focus();
                  setAlert({
                    onAlert: {
                      ...alertState.onAlert,
                      email: true,
                    },
                    alertText: {
                      ...alertState.alertText,
                      email: errorDetail,
                    },
                  });
                  break;
                case "이미 가입된 번호입니다.":
                  inputRefs.tell.current.focus();
                  setAlert({
                    onAlert: {
                      ...alertState.onAlert,
                      tell: true,
                    },
                    alertText: {
                      ...alertState.alertText,
                      tell: errorDetail,
                    },
                  });
                  break;
                default:
                  console.error("조건에 없는 에러입니다.");
              }
            })
          );
          if (isGoogle) reset();
        } else if (response.status === 500) {
          dispatch(setSize(null, "200px"));
          dispatch(
            openModal(
              "서버 사용량이 많아 회원가입을 할 수 없습니다. 잠시 후에 다시 시도하십시요."
            )
          );
        } else {
          console.error(`status: ${response.status}
detail: ${response.data.detail}`);
        }
      }
    };

    if (!checkDoubleState) {
      setAlert({
        onAlert: {
          ...alertState.onAlert,
          id: true,
        },
        alertText: {
          ...alertState.alertText,
          id: "중복체크를 해주세요",
        },
      });
      btnCheckDoubleRef.current.focus();
      return;
    } else if (!keys.map((key) => alertState.onAlert[key]).every((on) => !on)) {
      const alertKey = keys.find((key) => alertState.onAlert[key] === true);
      inputRefs[alertKey].current.focus();
    } else {
      sendSignup(isGoogleSignup);
    }
  };

  // 구글 회원가입
  const responseGoogle = (response) => {
    console.log(response);
  };

  const GoogleSuccess = async (response) => {
    const res = response;
    console.log(res);
    const GoogleId = res.profileObj.googleId;

    try {
      // await userApi.idDoubleCheck(GoogleId);
      checkDoubleDispatch(true);
      setGoogleSignup(true);
      setInput({
        ...inputState,
        name: res.profileObj.name,
        id: GoogleId,
        pw: res.tokenId,
        pwCheck: res.tokenId,
        email: res.profileObj.email,
      });
    } catch (e) {
      dispatch(openModal("이미 가입된 유저입니다"));
    }
  };

  useEffect(() => {
    return () => {
      if (isGoogleSignup) {
        console.log("구글 로그아웃");
        signOut();
      }
    };
  }, [history, isGoogleSignup]);

  return (
    <div className="signWrap">
      <section className="signUpSec">
        <span className="omega_logo">
          <img src={logo} alt="omegabox Logo" />
        </span>
        <h2>회원가입</h2>
        <p className="textInfo">서비스를 이용하려면 가입하세요.</p>
        <div className="googleSignUp">
          <GoogleLogin
            clientId={key.googleClientId}
            buttonText="Sign in with Google"
            onSuccess={GoogleSuccess}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            isSignedIn={false}
            render={(renderProps) => (
              <button
                className={[
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
                <span>구글 계정으로 회원가입</span>
              </button>
            )}
          />
        </div>
        <div className={["nameWrap", "inputWrap"].join(" ")}>
          <label htmlFor="name">이름</label>
          <input
            className={
              ["input", "large"].join(" ") +
              (alertState.onAlert.name ? " alert" : "") +
              (isGoogleSignup ? "" : "")
            }
            id="name"
            name="name"
            type="text"
            placeholder="이름을 입력하세요."
            value={inputState.name}
            onChange={changeInput}
            onBlur={bluerInput}
            ref={inputRefs.name}
            disabled={isGoogleSignup}
          />
          <div className="alertText" hidden={!alertState.onAlert.name}>
            {alertState.alertText.name}
          </div>
        </div>
        {!isGoogleSignup && (
          <>
            <div className={["idWrap", "inputWrap"].join(" ")}>
              <label htmlFor="id">아이디</label>
              <input
                className={
                  ["input", "large"].join(" ") +
                  (!checkDoubleState && alertState.onAlert.id ? " alert" : "")
                }
                id="id"
                name="id"
                type="text"
                placeholder="6자리 이상 (대/소문자, 숫자, 특수문자(_))"
                value={inputState.id}
                onChange={changeInput}
                ref={inputRefs.id}
                disabled={isGoogleSignup}
              />
              <button
                className={["btnCheckDouble", "btn"].join(" ")}
                disabled={!regExp.id.test(inputState.id)}
                onClick={checkDouble}
                ref={btnCheckDoubleRef}
              >
                중복확인
              </button>
              <div
                className={
                  ["alertText"].join(" ") +
                  (checkDoubleState ? " passibleId" : " impassibleId")
                }
                hidden={!alertState.onAlert.id}
              >
                {alertState.alertText.id}
              </div>
            </div>
            <div className={["pwWrap", "inputWrap"].join(" ")}>
              <label htmlFor="pw">비밀번호</label>
              <input
                className={
                  ["input", "large"].join(" ") +
                  (alertState.onAlert.pw ? " alert" : "")
                }
                id="pw"
                name="pw"
                type="password"
                placeholder="특수문자(!@#$%^&*)를 포함한 8자리 이상"
                value={inputState.pw}
                onChange={changeInput}
                onBlur={bluerInput}
                ref={inputRefs.pw}
              />
              <div className="alertText" hidden={!alertState.onAlert.pw}>
                {alertState.alertText.pw}
              </div>
            </div>
            <div className={["pwCheckWrap", "inputWrap"].join(" ")}>
              <label htmlFor="pw">비밀번호 확인</label>
              <input
                className={
                  ["input", "large"].join(" ") +
                  (alertState.onAlert.pwCheck ? " alert" : "")
                }
                id="pwCheck"
                name="pwCheck"
                type="password"
                placeholder="비밀번호 확인"
                value={inputState.pwCheck}
                onChange={changeInput}
                onBlur={bluerInput}
                ref={inputRefs.pwCheck}
              />
              <div className="alertText" hidden={!alertState.onAlert.pwCheck}>
                {alertState.alertText.pwCheck}
              </div>
            </div>
          </>
        )}
        <div className={["birthWrap", "inputWrap"].join(" ")}>
          <label htmlFor="birth">생년월일</label>
          <input
            className={["input", "large"].join(" ")}
            id="birth"
            name="birth"
            type="date"
            placeholder="생년월일"
            value={inputState.birth}
            onChange={changeInput}
            onBlur={bluerInput}
          />
        </div>
        <div className={["tellWrap", "inputWrap"].join(" ")}>
          <label htmlFor="tell">전화번호</label>
          <input
            className={
              ["input", "large"].join(" ") +
              (alertState.onAlert.tell ? " alert" : "")
            }
            id="tell"
            name="tell"
            type="text"
            placeholder=" - 를 제외하고 입력하세요."
            value={inputState.tell}
            onChange={changeInput}
            onBlur={bluerInput}
            ref={inputRefs.tell}
          />
          <div className="alertText" hidden={!alertState.onAlert.tell}>
            {alertState.alertText.tell}
          </div>
        </div>
        <div className={["emailWrap", "inputWrap"].join(" ")}>
          <label htmlFor="email">이메일</label>
          <input
            className={
              ["input", "large"].join(" ") +
              (alertState.onAlert.email ? " alert" : "")
            }
            id="email"
            name="email"
            type="email"
            placeholder="이메일 ex) omagabox@omaga.co.kr"
            value={inputState.email}
            onChange={changeInput}
            onBlur={bluerInput}
            ref={inputRefs.email}
            disabled={isGoogleSignup}
          />
          <div className="alertText" hidden={!alertState.onAlert.email}>
            {alertState.alertText.email}
          </div>
        </div>
        <button
          className={
            ["btnSignUp", "btn", "large"].join(" ") +
            (signAble ? " main fill" : " lightGray")
          }
          onClick={signUpEvent}
          disabled={!signAble}
        >
          회원가입
        </button>
      </section>
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
    </div>
  );
};

export default React.memo(SignUpForm);
