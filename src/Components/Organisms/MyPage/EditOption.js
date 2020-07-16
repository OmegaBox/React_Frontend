import React from "react";
import "./style/EditOption.scss";

const EditOption = () => {
  return (
    <div className="editOption">
      <h3 className="mypageTitle">선택정보 수정</h3>
      <h4 className="titleText">부가정보</h4>
      <table cellSpacing="0" cellPadding="0">
        <tbody>
          <tr>
            <th>선호극장</th>
            <td className="selectTheater">
              선호 영화관은 최대 3개까지 등록 가능합니다.
              <ul className="preferredTheater">
                <li>
                  <span>1 순위</span>
                  <div className="selectWrap">
                    <select className={["select", "large"].join(" ")}>
                      <option>서울</option>
                    </select>
                    <span className={["icon", "arrowBottom"].join(" ")}></span>
                  </div>
                  <div className="selectWrap">
                    <select className={["select", "large"].join(" ")}>
                      <option>서울</option>
                    </select>
                    <span className={["icon", "arrowBottom"].join(" ")}></span>
                  </div>
                </li>
                <li>
                  <span>2 순위</span>
                  <div className="selectWrap">
                    <select className={["select", "large"].join(" ")}>
                      <option>서울</option>
                    </select>
                    <span className={["icon", "arrowBottom"].join(" ")}></span>
                  </div>
                  <div className="selectWrap">
                    <select className={["select", "large"].join(" ")}>
                      <option>서울</option>
                    </select>
                    <span className={["icon", "arrowBottom"].join(" ")}></span>
                  </div>
                </li>
                <li>
                  <span>3 순위</span>
                  <div className="selectWrap">
                    <select className={["select", "large"].join(" ")}>
                      <option>서울</option>
                    </select>
                    <span className={["icon", "arrowBottom"].join(" ")}></span>
                  </div>
                  <div className="selectWrap">
                    <select className={["select", "large"].join(" ")}>
                      <option>서울</option>
                    </select>
                    <span className={["icon", "arrowBottom"].join(" ")}></span>
                  </div>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>선호장르 (3개 선택)</th>
            <td className="genre">
              <div className="selectWrap">
                <select className={["select", "large"].join(" ")}>
                  <option>서울</option>
                </select>
                <span className={["icon", "arrowBottom"].join(" ")}></span>
              </div>
              <div className="selectWrap">
                <select className={["select", "large"].join(" ")}>
                  <option>서울</option>
                </select>
                <span className={["icon", "arrowBottom"].join(" ")}></span>
              </div>
              <div className="selectWrap">
                <select className={["select", "large"].join(" ")}>
                  <option>서울</option>
                </select>
                <span className={["icon", "arrowBottom"].join(" ")}></span>
              </div>
            </td>
          </tr>
          <tr>
            <th>선호시간</th>
            <td>
              <ul className="preferredTime">
                <li className="inputWrap">
                  <input type="radio" name="timeGroup" id="timeBefore10" />
                  <label for="timeBefore10">
                    <span className="inputIcon"></span>10시 이전
                  </label>
                </li>
                <li className="inputWrap">
                  <input type="radio" name="timeGroup" id="time10to13" />
                  <label for="time10to13">
                    <span className="inputIcon"></span>10시 ~ 13시
                  </label>
                </li>
                <li className="inputWrap">
                  <input type="radio" name="timeGroup" id="time13to16" />
                  <label for="time13to16">
                    <span className="inputIcon"></span>13시 ~ 16시
                  </label>
                </li>
                <li className="inputWrap">
                  <input type="radio" name="timeGroup" id="time16to18" />
                  <label for="time16to18">
                    <span className="inputIcon"></span>16시 ~ 18시
                  </label>
                </li>
                <li className="inputWrap">
                  <input type="radio" name="timeGroup" id="time18to21" />
                  <label for="time18to21">
                    <span className="inputIcon"></span>18시 ~ 21시
                  </label>
                </li>
                <li className="inputWrap">
                  <input type="radio" name="timeGroup" id="timeAfter21" />
                  <label for="timeAfter21">
                    <span className="inputIcon"></span>21시 이후
                  </label>
                </li>
              </ul>
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
    </div>
  );
};

export default React.memo(EditOption);
