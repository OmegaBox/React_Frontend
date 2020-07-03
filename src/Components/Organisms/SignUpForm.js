import React from "react";

import "./style/SignUpForm.scss";

const SignUpForm = () => {
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
            type="text"
            placeholder="아이디"
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
          type="password"
          placeholder="비밀번호"
        />
        <input
          className={["input", "large"].join(" ")}
          type="email"
          placeholder="이메일"
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
