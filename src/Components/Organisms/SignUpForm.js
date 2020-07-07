import React, { useState, useRef } from "react";

import "./style/SignUpForm.scss";

import { getToday, regExp } from "../../Utils/ultil";

const initSignState = {
  name: "",
  id: "",
  pw: "",
  pwCheck: "",
  birth: getToday(),
  tell: "",
  email: "",
};

const SignUpForm = () => {
  // 회원가입 상태
  const [inputState, inputDispatch] = useState(initSignState);

  // 경고 문구 출력 여부
  const [alertState, alertDispatch] = useState({
    name: false,
    id: false,
    pw: false,
    pwCheck: false,
    tell: false,
    email: false,
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

  // 중복 체크
  const [checkDouble, doubleDispatch] = useState(null);

  // 정규식 체크
  const checkRegExp = (key) => {
    console.log(key);
    return regExp[key].test(inputState[key]);
  };

  // input onChangeEvent
  const changeInput = (e) => {
    const name = e.target.name;
    if (alertState[name])
      alertDispatch({
        ...alertState,
        [name]: false,
      });
    let value = e.target.value.split(" ").join("");
    if (name === "id") doubleDispatch(false);
    if (name === "tell")
      value = [...value].filter((v) => /[0-9]/g.test(v)).join("");
    inputDispatch({
      ...inputState,
      [e.target.name]: value,
    });
  };

  // input onBluerEvent
  const bluerInput = (e) => {
    const name = e.target.name;
    if (name === "pwCheck" && inputState.pw !== inputState.pwCheck) {
      alertDispatch({
        ...alertState,
        [name]: true,
      });
    }
    if (!regExp[name] || (name === "id" && checkDouble)) return;
    if (name === "id" && !checkDouble) {
      alertDispatch({
        ...alertState,
        [name]: true,
      });
    } else if (!checkRegExp(name)) {
      alertDispatch({
        ...alertState,
        [name]: true,
      });
    }
  };

  // 회원가입 버튼 활성화
  const signAble = Object.values(inputState).every((v) => v !== "");

  // 회원 가입 이벤트
  const signUpEvent = () => {
    Object.keys(inputState).forEach((key) => {
      console.log(`${key} : ${inputState[key]}`);
    });
  };

  return (
    <div className="signWrap">
      <section className="signUpSec">
        <h2>회원가입</h2>
        <p className="textInfo">서비스를 이용하려면 가입하세요.</p>
        <button
          className={["btnGoogleSignUp", "btn", "white", "fill", "large"].join(
            " "
          )}
        >
          <span className="logo"></span>
          <span>구글 회원 가입</span>
        </button>
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
            className={["input", "large"].join(" ")}
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
            onClick={() => {}}
          >
            중복확인
          </button>
          <div className="alertText" hidden={!alertState.id}>
            중복체크를 해주세요
          </div>
          <div
            className={
              ["alertText"].join(" ") +
              (checkDouble ? " passibleId" : " impassibleId")
            }
            hidden={checkDouble === null}
          >
            {checkDouble
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
            className={["input", "large"].join(" ")}
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
    </div>
  );
};

export default SignUpForm;
