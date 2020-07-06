import React from "react";
import "./style/MovieDetailWrap.scss";

const MovieDetailWrap = () => {
  return (
    <div className="movieVisual">
      <div className="movieBg">
        <img
          src="https://img.megabox.co.kr/SharedImg/2020/07/03/tYL5aEGMlMIZODmDFWdwfLyVD2DW13OJ_570.jpg"
          alt=""
        />
      </div>
      <div className="movieInfo">
        <div className="summary">
          <h3 className="title">
            #살아있다
            <span className="engTitle">#ALIVE</span>
          </h3>
          <div className="btnWrap">
            <button
              type="button"
              className={["btn", "outLine", "regular", "white"].join(" ")}
            >
              1k
            </button>
            <button
              type="button"
              className={["btn", "outLine", "regular", "white"].join(" ")}
            >
              공유하기
            </button>
          </div>
          <ul className="eval">
            <li>
              <h4 className="title">실관람 평점</h4>
              <div className="rating">
                <span className={["icon", "rating"].join(" ")}></span>
                <span>6.9</span>
              </div>
            </li>
            <li>
              <h4 className="title">예매율</h4>
              <div className="bookingRate">
                <span className={["icon", "bookingRate"].join(" ")}></span>
                <span>1</span>
                <span className="smallTxt">위 (25.5%)</span>
              </div>
            </li>
            <li className="acc">
              <h4 className="title">
                누적관객수<span className={["icon", "info"].join(" ")}></span>
              </h4>
              <div className="accCumlative">
                <span className={["icon", "accCumlative"].join(" ")}></span>
                <span>1,342,958</span>
                <span className="smallTxt">명</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="posterButton">
          <div className="poster">
            <img
              src="https://img.megabox.co.kr/SharedImg/2020/06/02/xIBdAOS5lJNBe1CBXovcV1WYE9Q6DWPV_420.jpg"
              alt=""
            />
          </div>
          <button
            type="button"
            className={["btn", "fill", "regular", "sub"].join(" ")}
          >
            예매
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailWrap;
