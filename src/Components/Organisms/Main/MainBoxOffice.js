import React, { useEffect } from "react";
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
        dispatch(setSuccessState(test.data));
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
    <div className="mainBoxOfficeLayout">
      <div className="mainBoxOffice">
        <div className="mainBoxOfficeHeader">
          <h2>박스오피스</h2>
          <Link to="/">
            <span className="boxOfficeMoreMovie">더 많은 영화보기 +</span>
          </Link>
        </div>
        <div className="mainMovieList">
          <ul className="mainMoviesWrap">
            {movieBox.map((v, i) => (
              <li key={i}>
                <p className="mainRank">1</p>
                <img
                  className="boxOfficeMoviePoster"
                  alt="영화이미지"
                  src="https://img.megabox.co.kr/SharedImg/2020/06/02/xIBdAOS5lJNBe1CBXovcV1WYE9Q6DWPV_420.jpg"
                />
                <div className="boxOfficeMovieInforWrap">
                  <div className="boxOfficeMovieSummary">
                    <p>
                      원인불명 증세의 사람들의 공격에 통제 불능에 빠진 도시.{" "}
                    </p>
                    <p>
                      영문도 모른 채 잠에서 깬 ‘준우’(유아인)는 아무도 없는 집에
                      혼자 고립된 것을 알게 된다.
                      <br />
                      영문도 모른 채 잠에서 깬 ‘준우’(유아인)는 아무도 없는 집에
                      혼자 고립된 것을 알게 된다.
                    </p>
                  </div>
                  <div className="boxOfficeMovieScore">
                    <div>
                      <p>관람평</p>
                      <strong>6.9</strong>
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
            ))}
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
