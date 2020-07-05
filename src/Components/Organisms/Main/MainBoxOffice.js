import React, { useEffect, useState } from "react";
import { movieApi } from "../../../Api/api";
import "./style/MainBoxOffice.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setLoadingState,
  setSuccessState,
} from "../../../Reducer/movieReducer";

const MainBoxOffice = () => {
  let movieBox = useSelector((state) => state.Movie.movies);
  movieBox = movieBox.filter((_, i) => i < 4);
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

  // const [searchInputState, setSearchInputState] = useState('');

  // const changeSearchInput = (e) => {
  //   setSearchInputState(e.target.value);
  // };
  // const initSearchInput = () => {
  //   setSearchInputState('');
  // };

  return (
    <div className="mainBoxOfficeLayout">
      <div className="mainBoxOffice">
        <div className="mainBoxOfficeHeader">
          <h2>박스오피스</h2>
          <Link to="/">
            <div className="boxOfficeMoreMovieWrap">
              <div className="boxOfficeMoreMovie">더 많은 영화보기 </div>
              <div className="icon moreMovieIcon"></div>
            </div>
          </Link>
        </div>
        <div className="mainMovieList">
          <ul className="mainMoviesWrap">
            {movieBox.map((v, i) => {
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
                      <span className="boxOfficeFavoriteScore">{100}</span>
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
        </div>
        <ul className="boxOfficeSubBarWrap">
          <li className="boxOfficeSearchBarWrap">
            <form>
              <input
                type="text"
                // value={searchInputState}
                // onChange={changeSearchInput}
                className="boxOfficeSearchBar"
                placeholder="영화명을 입력해주세요."
                title="영화 검색"
              />
              <button type="button" className="iconSearchBtn"></button>
            </form>
          </li>
          <li>
            <span className="iconSchedule" />
            <span className="boxOfficeSearchBarText">상영시간표</span>
          </li>
          <li>
            <span className="iconBoxOffice" />
            <span className="boxOfficeSearchBarText">박스오피스</span>
          </li>
          <Link to="/Booking">
            <li>
              <span className="iconBoxOfficeBooking" />
              <span className="boxOfficeSearchBarText">빠른예매</span>
            </li>
          </Link>


        </ul>
      </div>
    </div>
  );
};

export default MainBoxOffice;
