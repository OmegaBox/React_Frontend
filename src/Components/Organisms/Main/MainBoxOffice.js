import React from "react";
import { movieApi } from "../../../Api/api";

import "./style/MainBoxOffice.scss";
import { Link } from "react-router-dom";

const initMovie = async () => {
  const test = await movieApi.getMovies();
  console.log(test);
};

const MainBoxOffice = () => {
  const initialState = {};

  const mainBoxOfficeReducer = (state = initialState, action) => {};
  return (
    <div className="mainBoxOfficeLayout">
      <div className="mainBoxOffice">
        <div className="mainBoxOfficeHeader">
          <h2>박스오피스</h2>
          <Link to="/">
            <span className="boxOfficeMoreMovie">더 많은 영화보기 +</span>
          </Link>
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
                <button
                  className={[
                    "boxOfficeFavoriteBtn",
                    "btn",
                    "outLine",
                    "lightGray",
                    "small",
                  ].join(" ")}
                >
                  <span className="icon favoriteOutLine"></span>
                  <span className="boxOfficeFavoriteScore">1000</span>
                </button>
                <button
                  className={[
                    "boxOfficeBookingBtn",
                    "btn",
                    "fill",
                    "subLight",
                    "small",
                  ].join(" ")}
                >
                  예매
                </button>
              </div>
            </li>
          </ul>
        </div>
        <ul className="boxOfficeSubBarWrap">
          <li className="boxOfficeSearchBarWrap">
            <input
              type="text"
              className="boxOfficeSearchBar"
              placeholder="영화명을 입력해주세요."
            />
            <button type="button" className="iconSearchBtn"></button>
          </li>
          <li>
            <span className="iconSchedule" />
            <span className="boxOfficeSearchBarText">상영시간표</span>
          </li>
          <li>
            <span className="iconBoxOffice" />
            <span className="boxOfficeSearchBarText">박스오피스</span>
          </li>
          <li>
            <span className="iconBoxOfficeBooking" />
            <span className="boxOfficeSearchBarText">빠른예매</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainBoxOffice;
