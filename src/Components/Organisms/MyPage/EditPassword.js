import React from "react";

const EditPassword = () => {
  return (
    <div className="editPassword">
      <h3 className="mypageTitle">비밀번호 변경</h3>
      <section>
        <p className="bullet">
          현재 비밀번호를 입력한 후 새로 사용할 비밀번호를 입력하세요
        </p>
        <table cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <th>현재 비밀번호</th>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th>새 비밀번호</th>
              <td className="newPassword">
                <input type="text" />
                &#8251; 영문, 숫자, 특수문자 중 2가지 이상 조합하여 10자리
                이상으로 입력 해 주세요.
              </td>
            </tr>
            <tr>
              <th>새 비밀번호 재입력</th>
              <td className="newPassword">
                <input type="text" />
                &#8251; 비밀번호 확인을 위해 한 번 더 입력해 주시기 바랍니다.
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="bullet">
          <li>
            생년월일, 전화번호 등 개인 정보와 관련된 숫자, 연속된 숫자와 같이
            쉬운 비밀번호는 다른 사람이 쉽게 알아낼 수 있으니 사용을 자제해
            주세요.
          </li>
          <li>비밀번호는 3~6개월마다 꼭 바꿔주세요.</li>
          <li>
            비밀번호 변경시 모바일 기기와 홈페이지에서 모두 로그아웃됩니다.
            변경한 비밀번호로 다시 로그인해주세요.
          </li>
          <li>
            비밀번호 설정 시 사용가능한 특수문자는 ~ ! # $ % ^ & * + = ? _
            입니다.
          </li>
        </ul>
        <div className="btnWrap">
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
            수정
          </button>
        </div>
      </section>
    </div>
  );
};

export default React.memo(EditPassword);
