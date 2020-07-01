import React from "react";

const PopupChoiceTheater = ({ onClose }) => {
  return (
    <div className="popupWrap">
      <div className={["popupBox", "likeTheater"].join(" ")}>
        <h2>선호극장 관리</h2>
        <button
          className={["btn", "xSmall", "closed"].join(" ")}
          onClick={onClose}
        >
          <span className={["icon", "closed"].join(" ")}></span>
        </button>
        <div className="popupContent">
          <div className="termWrap">
            <div className="selectWrap">
              <select
                name="country"
                id="countrySelectBox"
                className={["select", "regular"].join(" ")}
              >
                <option value=""> - </option>
                <option value="0:30">30분</option>
                <option value="1:00">1시간</option>
                <option value="1:30">1시간 30분</option>
                <option value="2:00">2시간</option>
                <option value="2:30">2시간 30분</option>
                <option value="3:00">3시간</option>
                <option value="3:30">3시간 30분</option>
                <option value="4:00">4시간</option>
                <option value="4:30">4시간 30분</option>
                <option value="5:00">5시간</option>
              </select>
              <span className={["icon", "arrowBottom"].join(" ")}></span>
            </div>
            <div className="selectWrap">
              <select
                name="country"
                id="countrySelectBox"
                className={["select", "regular"].join(" ")}
              >
                <option value=""> - </option>
                <option value="0:30">30분</option>
                <option value="1:00">1시간</option>
                <option value="1:30">1시간 30분</option>
                <option value="2:00">2시간</option>
                <option value="2:30">2시간 30분</option>
                <option value="3:00">3시간</option>
                <option value="3:30">3시간 30분</option>
                <option value="4:00">4시간</option>
                <option value="4:30">4시간 30분</option>
                <option value="5:00">5시간</option>
              </select>
              <span className={["icon", "arrowBottom"].join(" ")}></span>
            </div>
            <button
              type="button"
              className={["btn", "xSmall", "fill", "darkGray"].join(" ")}
            >
              추가
            </button>
          </div>
          <ul className="selectList">
            <li className="selectComplete">
              강남
              <button
                type="button"
                className={["btn", "fill", "white"].join(" ")}
              >
                <span className={["icon", "closedWhite"].join(" ")}></span>
              </button>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="btnWrap">
          <button
            type="button"
            className={["btn", "small", "main", "outLine"].join(" ")}
            onClick={onClose}
          >
            취소
          </button>
          <button
            type="button"
            className={["btn", "small", "main", "fill"].join(" ")}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupChoiceTheater;
