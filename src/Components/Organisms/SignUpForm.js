import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../images/omegabox_logo.jpg";
import "./style/SignUpForm.scss";

import { getToday, regExp } from "../../Utils/util";
import { userApi } from "../../Api/api";

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

const SignUpForm = ({ history }) => {
  const dispatch = useDispatch();
  // 회원가입 상태
  const [inputState, setInput] = useState(initSignState);

  // 중복 체크 상태
  const [checkDoubleState, doubleDispatch] = useState(null);

  // 경고 문구 출력 여부
  const [alertState, setAlert] = useState({
    name: false,
    id: false,
    pw: false,
    pwCheck: false,
    tell: false,
    email: false,
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

  // 정규식 체크
  const checkRegExp = (key) => {
    return regExp[key].test(inputState[key]);
  };

  // input onChangeEvent
  const changeInput = (e) => {
    const name = e.target.name;
    let value = e.target.value.split(" ").join("");

    if (alertState[name])
      setAlert({
        ...alertState,
        [name]: false,
      });

    if (name === "id") doubleDispatch(null);

    if (name === "tell")
      value = [...value].filter((v) => /[0-9]/g.test(v)).join("");

    setInput({
      ...inputState,
      [name]: value,
    });
  };

  // input onBluerEvent
  const bluerInput = (e) => {
    const name = e.target.name;
    if (inputState[name] === "") return;
    if (name === "pwCheck" && inputState.pw !== inputState.pwCheck) {
      console.log("패스워드 체크");
      setAlert({
        ...alertState,
        [name]: true,
      });
    }
    if (!regExp[name] || name === "id") return;
    else if (!checkRegExp(name)) {
      console.log("정규식 오류");
      setAlert({
        ...alertState,
        [name]: true,
      });
    }
  };

  // 아이디 중복체크
  const checkDouble = async (id) => {
    try {
      await userApi.idDoubleCheck(id);
      doubleDispatch(true);
    } catch (e) {
      doubleDispatch(false);
    }
    setAlert({
      ...alertState,
      id: false,
    });
  };

  // 회원가입 버튼 활성화
  const signAble = Object.values(inputState).every((v) => v !== "");

  // 회원 가입 이벤트
  const signUpEvent = async () => {
    if (checkDoubleState === null) {
      setAlert({
        ...alertState,
        id: true,
      });
      inputRefs.id.current.focus();
      return;
    } else if (!Object.values(alertState).every((ale) => !ale)) {
      const keys = ["name", "id", "pw", "pwCheck", "tell", "email"];
      const alertKey = keys.find((key) => alertState[key] === true);
      console.log(inputRefs[alertKey]);
      inputRefs[alertKey].current.focus();
    } else {
      try {
        const res = await userApi.signup({
          name: inputState.name,
          id: inputState.id,
          pw: inputState.pw,
          pwCheck: inputState.pwCheck,
          birth: inputState.birth,
          tell: inputState.tell,
          email: inputState.email,
        });
        dispatch(setOneBtn());
        dispatch(
          openModal("회원가입에 성공하셨습니다.", () => {
            history.push("/memberlogin");
          })
        );
      } catch (e) {
        console.log(e.response);
        if (e.response.status === 400) {
          let errorText = "회원가입 실패:";
          Object.keys(e.response.data).forEach((key) => {
            const errorDetail = `${key}: ${e.response.data[key]}`;
            errorText += `
  ${errorDetail}`;
          });
          console.error(errorText);
          // dispatch(openModal(errorText));
        }
      }
    }
  };

  return (
    <div className="signWrap">
      <section className="signUpSec">
        <span className="omega_logo">
          <img src={logo} alt="omegabox Logo" />
        </span>
        <h2>회원가입</h2>
        <p className="textInfo">서비스를 이용하려면 가입하세요.</p>
        <div className="googleSignUp">
          <button
            className={[
              "btnGoogleSignUp",
              "btn",
              "white",
              "fill",
              "large",
            ].join(" ")}
          >
            <span className="logo"></span>
            <span>구글 회원 가입</span>
          </button>
        </div>
        <div className={["nameWrap", "inputWrap"].join(" ")}>
          <label htmlFor="name">이름</label>
          <input
            className={
              ["input", "large"].join(" ") + (alertState.name ? " alert" : "")
            }
            id="name"
            name="name"
            type="text"
            placeholder="이름을 입력하세요."
            value={inputState.name}
            onChange={changeInput}
            onBlur={bluerInput}
            ref={inputRefs.name}
          />
          <div className="alertText" hidden={!alertState.name}>
            이름 형식에 맞지 않습니다.
          </div>
        </div>
        <div className={["idWrap", "inputWrap"].join(" ")}>
          <label htmlFor="id">아이디</label>
          <input
            className={
              ["input", "large"].join(" ") + (alertState.id ? " alert" : "")
            }
            id="id"
            name="id"
            type="text"
            placeholder="6자리 이상 (대/소문자, 숫자, 특수문자(_))"
            value={inputState.id}
            onChange={changeInput}
            ref={inputRefs.id}
          />
          <button
            className={["btnCheckDouble", "btn"].join(" ")}
            disabled={!regExp.id.test(inputState.id)}
            onClick={checkDouble}
            ref={btnCheckDoubleRef}
          >
            중복확인
          </button>
          <div className="alertText" hidden={!alertState.id}>
            중복체크를 해주세요
          </div>
          <div
            className={
              ["alertText"].join(" ") +
              (checkDoubleState ? " passibleId" : " impassibleId")
            }
            hidden={checkDoubleState === null}
          >
            {checkDoubleState
              ? "사용가능한 아이디입니다."
              : "중복되는 아이디입니다."}
          </div>
        </div>
        <div className={["pwWrap", "inputWrap"].join(" ")}>
          <label htmlFor="pw">비밀번호</label>
          <input
            className={
              ["input", "large"].join(" ") + (alertState.pw ? " alert" : "")
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
          <div className="alertText" hidden={!alertState.pw}>
            비밀번호를 규칙에 맞게 입력해주세요
          </div>
        </div>
        <div className={["pwCheckWrap", "inputWrap"].join(" ")}>
          <label htmlFor="pw">비밀번호 확인</label>
          <input
            className={
              ["input", "large"].join(" ") +
              (alertState.pwCheck ? " alert" : "")
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
          <div className="alertText" hidden={!alertState.pwCheck}>
            비밀번호가 일치하지 않습니다
          </div>
        </div>
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
              ["input", "large"].join(" ") + (alertState.tell ? " alert" : "")
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
          <div className="alertText" hidden={!alertState.tell}>
            전화번호 형식이 아닙니다
          </div>
        </div>
        <div className={["emailWrap", "inputWrap"].join(" ")}>
          <label htmlFor="email">이메일</label>
          <input
            className={
              ["input", "large"].join(" ") + (alertState.email ? " alert" : "")
            }
            id="email"
            name="email"
            type="email"
            placeholder="이메일 ex) omagabox@omaga.co.kr"
            value={inputState.email}
            onChange={changeInput}
            onBlur={bluerInput}
            ref={inputRefs.email}
          />
          <div className="alertText" hidden={!alertState.email}>
            이메일을 규칙에 맞게 입력해주세요
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
