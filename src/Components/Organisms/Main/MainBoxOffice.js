import React from "react";
import "./style/MainBoxOffice.scss";
// import { Link } from "react-router-dom";
// import movieReducer from "../../../Reducer/movieReducer";

const MainBoxOffice = () => {
  return (
    <div className="mainBoxOfficeLayout">
      <div className="mainBoxOffice">
        <div>
          <h2 className="boxOfficeHeader">박스오피스</h2>
          <a href="#"><span>더 많은 영화보기 +</span></a>
        </div>
        <div className="mainMovieList">
          <ul class="mainMoviesWrap">
            <li>
              <img
                class="boxOfficeMoviePoster"
                alt="살아있다"
                src="https://img.megabox.co.kr/SharedImg/2020/06/02/xIBdAOS5lJNBe1CBXovcV1WYE9Q6DWPV_420.jpg"
              />
              <div className="boxOfficeBtnWrap">
                <button className={["boxOfficeFavoriteBtn", "btn", "outLine", "lightGray", "large"].join(" ")}>
                  <span className="icon Mainfavorite"></span>
                  <span className="boxOfficeFavoriteScore">1000</span>
                </button>
                <button className={["boxOfficeBookingBtn", "btn", "fill", "subLight", "large"].join(" ")}>
                  예매
              </button>
              </div>
            </li>
            <li>
              <img
                class="boxOfficeMoviePoster"
                alt="살아있다"
                src="https://img.megabox.co.kr/SharedImg/2020/06/02/xIBdAOS5lJNBe1CBXovcV1WYE9Q6DWPV_420.jpg"
              />
              <div className="boxOfficeBtnWrap">
                <button className={["boxOfficeFavoriteBtn", "btn", "outLine", "lightGray", "large"].join(" ")}>
                  <span class="icon Mainfavorite"></span>
                  <span class="boxOfficeFavoriteScore">1000</span>
                </button>
                <button className={["boxOfficeBookingBtn", "btn", "fill", "subLight", "large"].join(" ")}>
                  예매
              </button>
              </div>
            </li>
            <li>
              <img
                class="boxOfficeMoviePoster"
                alt="살아있다"
                src="https://img.megabox.co.kr/SharedImg/2020/06/02/xIBdAOS5lJNBe1CBXovcV1WYE9Q6DWPV_420.jpg"
              />
              <div className="boxOfficeBtnWrap">
                <button className={["boxOfficeFavoriteBtn", "btn", "outLine", "lightGray", "large"].join(" ")}>
                  <span class="icon Mainfavorite"></span>
                  <span class="boxOfficeFavoriteScore">1000</span>
                </button>
                <button className={["boxOfficeBookingBtn", "btn", "fill", "subLight", "large"].join(" ")}>
                  예매
              </button>
              </div>
            </li>
            <li>
              <img
                class="boxOfficeMoviePoster"
                alt="살아있다"
                src="https://img.megabox.co.kr/SharedImg/2020/06/02/xIBdAOS5lJNBe1CBXovcV1WYE9Q6DWPV_420.jpg"
              />
              <div className="boxOfficeBtnWrap">
                <button className={["boxOfficeFavoriteBtn", "btn", "outLine", "lightGray", "large"].join(" ")}>
                  <span class="icon Mainfavorite"></span>
                  <span class="boxOfficeFavoriteScore">1000</span>
                </button>
                <button className={["boxOfficeBookingBtn", "btn", "fill", "subLight", "large"].join(" ")}>
                  예매
              </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="boxOfficeSearchBar">
          <input
            type="text"
            className="searchBar"
            placeholder="영화명을 입력해주세요."
          />
          <button type="button" className="searchBtn"></button>
        </div>
      </div>
    </div >
  );
};

export default MainBoxOffice;