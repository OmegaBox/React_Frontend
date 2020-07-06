import React, { useState } from "react";

import "../../common.scss";
import "./style/SignUpForm.scss";

import { getToday, regExp } from "../../Utils/ultil";

const SignUpForm = () => {
  const [inputState, inputDispatch] = useState({
    id: "",
    pw: "",
    birth: getToday(),
    tell: "",
    email: "",
  });
  const changeInput = (e) => {
    let value = e.target.value.split(" ").join("");
    if (e.target.name === "tell")
      value = [...value].filter((v) => /[0-9]/g.test(v)).join("");
    inputDispatch({
      ...inputState,
      [e.target.name]: value,
    });
  };

  // 중복 체크
  const [checkDouble, doubleDispatch] = useState(false);

  // 정규식 체크
  const checkRegExp = (e) => {
    console.log(inputState[e.target.name]);
    console.log(regExp[e.target.name].test(inputState[e.target.name]));
  };

  const signon = Object.values(inputState).every((v) => v !== "");

  const alertState = {
    id: false,
    pw: false,
    pwCheck: false,
    tell: false,
    email: false,
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
        <div className={["idWrap", "inputWrap"].join(" ")}>
          <label for="id">아이디</label>
          <input
            className={["input", "large"].join(" ")}
            id="id"
            name="id"
            type="text"
            placeholder="6자리 이상 (대/소문자, 숫자, 특수문자(_))"
            onChange={changeInput}
            value={inputState.id}
          />
          <button
            className={["btnCheckDouble", "btn"].join(" ")}
            disabled={!regExp.id.test(inputState.id)}
          >
            중복확인
          </button>
          <div className="alertText" hidden={!alertState.id}>
            중복체크를 해주세요.
          </div>
          <div className="alertText" hidden={!alertState.id}>
            중복체크를 해주세요.
          </div>
        </div>
        <div className={["pwWrap", "inputWrap"].join(" ")}>
          <label for="pw">비밀번호</label>
          <input
            className={["input", "large"].join(" ")}
            id="pw"
            name="pw"
            type="password"
            placeholder="특수문자(!@#$%^&*)를 포함한 8자리 이상"
            onChange={changeInput}
            value={inputState.pw}
          />
          <div className="alertText" hidden={!alertState.pw}>
            비밀번호를 규칙에 맞게 입력해주세요
          </div>
        </div>
        <div className={["pwCheckWrap", "inputWrap"].join(" ")}>
          <label for="pw">비밀번호 확인</label>
          <input
            className={["input", "large"].join(" ")}
            id="pwCheck"
            name="pwCheck"
            type="password"
            placeholder="비밀번호 확인"
          />
          <div className="alertText" hidden={!alertState.pwCheck}>
            비밀번호가 일치하지 않습니다
          </div>
        </div>
        <div className={["birthWrap", "inputWrap"].join(" ")}>
          <label for="birth">생년월일</label>
          <input
            className={["input", "large"].join(" ")}
            id="birth"
            name="birth"
            type="date"
            placeholder="생년월일"
            onChange={changeInput}
            value={inputState.birth}
          />
        </div>
        <div className={["tellWrap", "inputWrap"].join(" ")}>
          <label for="tell">전화번호</label>
          <input
            className={["input", "large"].join(" ")}
            id="tell"
            name="tell"
            type="text"
            placeholder=" - 를 제외하고 입력하세요."
            onChange={changeInput}
            value={inputState.tell}
          />
          <div className="alertText" hidden={!alertState.tell}>
            전화번호 형식이 아닙니다
          </div>
        </div>
        <div className={["emailWrap", "inputWrap"].join(" ")}>
          <label for="email">이메일</label>
          <input
            className={["input", "large"].join(" ")}
            id="email"
            name="email"
            type="email"
            placeholder="이메일 ex) omagabox@omaga.co.kr"
            onChange={changeInput}
            value={inputState.email}
          />
          <div className="alertText" hidden={!alertState.email}>
            이메일을 규칙에 맞게 입력해주세요
          </div>
        </div>
        <button
          className={
            ["btnSignUp", "btn", "large"].join(" ") +
            (signon ? " main fill" : " lightGray")
          }
          disabled={!signon}
        >
          회원가입
        </button>
      </section>
    </div>
  );
};

export default SignUpForm;
