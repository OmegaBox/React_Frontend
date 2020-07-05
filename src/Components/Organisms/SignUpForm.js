import React, { useState } from "react";

import "./style/SignUpForm.scss";

import { regExp } from "../../Utils/ultil";

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

  return (
    <div className="signWrap">
      <section className="signUpSec">
        <h2>회원가입</h2>
        <p className="textInfo">서비스를 이용하려면 가입하세요.</p>
        <button
          className={[
            "btnGoogleSignUp",
            "btn",
            "darkGray",
            "fill",
            "large",
          ].join(" ")}
        >
          구글 회원 가입
        </button>
        <div className="idWrap">
          <input
            className={["input", "large"].join(" ")}
            name="id"
            type="text"
            placeholder="아이디"
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
        </div>
        <input
          className={["input", "large"].join(" ")}
          name="pw"
          type="password"
          placeholder="비밀번호"
          onChange={changeInput}
          onBlur={checkRegExp}
          value={inputState.pw}
        />
        <input
          className={["input", "large"].join(" ")}
          name="email"
          type="email"
          placeholder="이메일"
          onChange={changeInput}
          onBlur={checkRegExp}
          value={inputState.email}
        />
        <button
          className={["btnSignUp", "btn", "darkGray", "fill", "large"].join(
            " "
          )}
          disabled={true}
        >
          회원가입
        </button>
      </section>
    </div>
  );
};

export default SignUpForm;
