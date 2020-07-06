import React, { useEffect } from "react";
import { movieApi } from "../../../Api/api";
import { useSelector, useDispatch } from "react-redux";
import "./style/WholeMovieListWrap.scss"
import {
  setLoadingState,
  setSuccessState,
} from "../../../Reducer/movieReducer";

const WholeMovieListWrap = () => {
  const wholeMovie = useSelector((state) => state.Movie.movies);
  const dispatch = useDispatch();

  const Movie = async () => {
    try {
      dispatch(setLoadingState());
      const test = await movieApi.getMovies();

      if (test.status === 200) {
        if (!Array.isArray(test.data)) return console.error("배열이 아닙니다.");
        dispatch(setSuccessState(test.data.sort((a, b) => a.rank - b.rank)));
      } else {
        dispatch({
          type: "ERROR",
          error: {
            state: true,
            message: test.statusText,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: "ERROR",
        error: {
          state: true,
          message: error.message,
        },
      });
    }
  };

  useEffect(() => {
    Movie();
  }, []);
  return (
    <div className="WholeMovieListLayout">
      <h1 className="WholeMovieHeader">전체영화</h1>
      <ul className="movieListTap">
        <li className="active">
          <button type="button">박스오피스</button>
        </li>
        <li>
          <button type="button">상영예정작</button>
        </li>
        <li>
          <button type="button">필름소사이어티</button>
        </li>
        <li>
          <button type="button">클래식소사이어티</button>
        </li>
      </ul>
      <div className="wholeMovieSearchBarWrap">
        <input
          type="text"
          // value={searchInputState}
          // onChange={changeSearchInput}
          className="wholeMovieSearchBar"
          placeholder="영화명 검색"
          title="영화 검색"
        />
        <button type="button" className="iconSearchBtn"></button>
      </div>
      <ul className="wholeMovieList">
        {wholeMovie.map((v, i) => {
          console.log(v.rank);
          return (
            <li key={i}>
              <p className="mainRank">{v.rank}</p>
              <img
                className="boxOfficeMoviePoster"
                alt="영화이미지"
                src="https://img.megabox.co.kr/SharedImg/2020/06/02/xIBdAOS5lJNBe1CBXovcV1WYE9Q6DWPV_420.jpg"
              />
              <div className="boxOfficeMovieInforWrap">
                <div className="boxOfficeMovieSummary">
                  <p>{v.description}</p>
                </div>
                <div className="boxOfficeMovieScore">
                  <div>
                    <p>관람평</p>
                    <strong>{v.average_point}</strong>
                  </div>
                </div>
              </div>
              <ul className="movieListTitleWrap">
                {/* <li className="movieListTitle">등급</li> */}
                <li className="movieListTitle">{v.name_kor}</li>
              </ul>

              <div className="movieListRateandDay">
                <span className="movieListBookingRate">예매율{v.reservation_rate}%</span>
                <span className="movieListOpeningDay">개봉일{v.open_date}</span>
              </div>

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
                  <span className="icon favorite"></span>
                  <span className="boxOfficeFavoriteScore">{v.acc_favorite}</span>
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
          )
        })}
      </ul>
      <div className="wholeMovieListMore">
        <button type="button" className={["btn", "regular"].join(" ")}>
          더보기
          <span className={["icon", "arrowBottom"].join(" ")}></span>
        </button>
      </div>
    </div>
  )
}

export default WholeMovieListWrap;

