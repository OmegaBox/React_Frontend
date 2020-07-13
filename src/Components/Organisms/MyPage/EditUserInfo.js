import React from "react";
import "./style/EditUserInfo.scss";

const EditUserInfo = () => {
  return (
    <div className="editUserInfo">
      <h3 className="mypageTitle">개인정보 수정</h3>
      <section>
        <h4 className="titleText">기본정보</h4>
        <p className="bullet">회원님의 정보를 정확히 입력해주세요.</p>
        <table cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <th>아이디</th>
              <td>test1</td>
            </tr>
            <tr>
              <th>
                이름 <span className="textRed">*</span>
              </th>
              <td className="name">
                김규리
                <button
                  type="button"
                  className={["btn", "xSmall", "outLine", "lightGray"].join(
                    " "
                  )}
                >
                  이름변경
                </button>
                &#8251; 개명으로 이름이 변경된 경우, 회원정보의 이름을 변경하실
                수 있습니다.
              </td>
            </tr>
            <tr>
              <th>
                생년월일 <span className="textRed">*</span>
              </th>
              <td>1984년 8월 25일</td>
            </tr>
            <tr>
              <th>
                휴대폰 <span className="textRed">*</span>
              </th>
              <td>
                010-7137-1722{" "}
                <button
                  type="button"
                  className={["btn", "xSmall", "outLine", "lightGray"].join(
                    " "
                  )}
                >
                  휴대폰 변경
                </button>
              </td>
            </tr>
            <tr>
              <th>
                이메일 <span className="textRed">*</span>
              </th>
              <td className="email">
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th>
                비밀번호 <span className="textRed">*</span>
              </th>
              <td className="password">
                <button
                  type="button"
                  className={["btn", "xSmall", "outLine", "lightGray"].join(
                    " "
                  )}
                >
                  비밀번호 변경
                </button>{" "}
                마지막 비밀번호 변경 : 2일전에 함 (2020-06-25 02:54:13)
              </td>
            </tr>
            <tr>
              <th>회원탈퇴</th>
              <td className="memberOut">
                <button
                  type="button"
                  className={["btn", "xSmall", "outLine", "darkGray"].join(" ")}
                >
                  회원탈퇴
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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

export default EditUserInfo;
