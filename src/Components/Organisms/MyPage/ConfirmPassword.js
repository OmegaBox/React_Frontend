import React from "react";
import "./style/ConfirmPassword.scss";

const ConfirmPassword = () => {
  return (
    <div className="confirmPassword">
      <h3 className="mypageTitle">회원정보</h3>
      <section>
        <div>
          <p className="notice">
            회원님의 개인정보 보호를 위해 비밀번호를 입력하셔야 합니다.
          </p>
          <p>메가박스 로그인시 사용하시는 비밀번호를 입력해 주세요.</p>
          <input type="text" className={["input", "large"].join(" ")} />
        </div>
        <button
          type="button"
          className={["btn", "xLarge", "outLine", "main"].join(" ")}
        >
          취소
        </button>
        <button
          type="button"
          className={["btn", "xLarge", "fill", "main"].join(" ")}
        >
          확인
        </button>
      </section>
    </div>
  );
};

export default ConfirmPassword;
