import React from "react";
import "./style/MainBoxOffice.scss";
// import { Link } from "react-router-dom";
// import movieReducer from "../../../Reducer/movieReducer";

const MainBoxOffice = () => {
  return (
    <div className="mainBoxOfficeLayout">
      <div className="mainBoxOffice">
        <h2>박스오피스</h2>
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
                  <span class="icon favorite">
                    <span class="">1000</span>
                  </span>
                </button>
                <button className={["boxOfficeBookingBtn", "btn", "fill", "subDark", "large"].join(" ")}>
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