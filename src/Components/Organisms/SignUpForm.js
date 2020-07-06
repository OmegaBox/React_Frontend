import React, { useState } from "react";

import "../../common.scss";
import "./style/SignUpForm.scss";

import { getToday, regExp } from "../../Utils/ultil";

const SignUpForm = () => {
  const [inputState, inputDispatch] = useState({
    id: "",
    pw: "",
    email: "",
  });
  const changeInput = (e) => {
    inputDispatch({
      ...inputState,
      [e.target.name]: e.target.value.split(" ").join(""),
    });
  };

  // 중복 체크
  const [checkDouble, doubleDispatch] = useState(false);

  // 정규식 체크
  const checkRegExp = (e) => {
    console.log(inputState[e.target.name]);
    console.log(regExp[e.target.name].test(inputState[e.target.name]));
  };

  const signon = false;

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
          구글 회원 가입
        </button>
        <div className={["idWrap", "inputWrap"].join(" ")}>
          <label for="id">아이디</label>
          <input
            className={["input", "large"].join(" ")}
            id="id"
            name="id"
            type="text"
            placeholder="대/소문자, 숫자, 특수문자(-_.) 조합 6자리 이상"
            onChange={changeInput}
            onBlur={checkRegExp}
            value={inputState.id}
          />
          <button
            className={["btnCheckDouble", "btn"].join(" ")}
            disabled={true}
          >
            중복확인
          </button>
          <div className="notice">아이디를 규칙에 맞게 입력해주세요</div>
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
            onBlur={checkRegExp}
            value={inputState.pw}
          />
        </div>
        <div className={["birthWrap", "inputWrap"].join(" ")}>
          <label for="birth">생년월일</label>
          <input
            className={["input", "large"].join(" ")}
            id="birth"
            name="birth"
            type="date"
            placeholder="생년월일"
            value={getToday()}
            // onChange={changeInput}
            // onBlur={checkRegExp}
            // value={inputState.birth}
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
            // onChange={changeInput}
            // onBlur={checkRegExp}
            // value={inputState.tell}
          />
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
            onBlur={checkRegExp}
            value={inputState.email}
          />
        </div>
        <button
          className={
            ["btnSignUp", "btn", "large"].join(" ") +
            (signon ? " lightGray" : " main fill")
          }
          disabled={signon}
        >
          회원가입
        </button>
      </section>
    </div>
  );
};

export default SignUpForm;
