import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style/WholeMovieListWrap.scss";
import { Link, useHistory } from "react-router-dom";
import { selectMovie } from "../../../Reducer/bookingReducer";
import {
  getSearchMovie,
  SET_SEARCH_KEYWORD,
  SET_SEARCH_INPUT,
} from "../../../Reducer/movieReducer";
import { SEND_FAVORITE } from "../../../Reducer/userInfoReducer";
import { openModal } from "../../../Reducer/modalReducer";
import SkeletonWholeMoviePage from "../../Atoms/SkeletonWholeMoviePage";
import "intersection-observer";

const WholeMovieListWrap = () => {
  const movies = useSelector((state) => state.Movie.movies);
  const searchMovies = useSelector((state) => state.Movie.searchMoiveList);
  const searchKeyword = useSelector((state) => state.Movie.searchKeyword);
  const searchInput = useSelector((state) => state.Movie.searchInput);
  const renderMovies = searchKeyword ? searchMovies : movies;

  const isLoading = useSelector((state) => state.Movie.loading);
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLogin, favoriteMovies } = useSelector((state) => state.userInfo);
  // const searchInputRef = useRef(null);

  const enterKeyword = (e) => {
    if (e.keyCode !== 13) return;
    dispatch({ type: SET_SEARCH_KEYWORD, keyword: e.target.value });
    dispatch(getSearchMovie(e.target.value));
  };

  const inputChange = (e) => {
    dispatch({ type: SET_SEARCH_INPUT, input: e.target.value });
  };

  const searchBtn = () => {
    dispatch({ type: SET_SEARCH_KEYWORD, keyword: searchInput });
    dispatch(getSearchMovie(searchInput));
  };

  // 해당 영화가 보고싶어 등록이 되있는지 확인하는 함수
  const isFavorite = (movieId) => {
    return (
      favoriteMovies.length !== 0 &&
      favoriteMovies.map((favorite) => favorite.movie_id).includes(movieId)
    );
  };

  const clickFavorite = (movieId) => {
    if (isLogin) {
      dispatch({
        type: SEND_FAVORITE,
        movieId,
      });
    } else {
      dispatch(
        openModal("로그인이 필요한 기능입니다.", () => {
          history.push("/memberlogin");
        })
      );
    }
  };

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const target = entry.target;
        const posterImgTag = target.querySelector(".wholeMoviePoster");
        const rank = target.querySelector(".mainRank");

        posterImgTag.style.backgroundImage = `url(${posterImgTag.dataset.poster})`;
        posterImgTag.style.backgroundSize = "cover";
        posterImgTag.style.animation = "fadein 1s";
        rank.style.display = " block";

        observer.unobserve(target);
      });
    },
    {
      threshold: 0.5,
    }
  );

  useEffect(() => {
    Array.from(document.querySelectorAll(".wholeMovie")).forEach((el) => {
      io.observe(el);
    });
  }, [io, renderMovies]);

  return (
    <div className="WholeMovieListLayout">
      <h1 className="WholeMovieHeader">전체영화</h1>
      <ul className="movieListTap">
        <li className="active">
          <button className="movieListNav" type="button">
            박스오피스
          </button>
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
      <p className="searchResults">
        {searchKeyword ? (
          <span>
            <span className="searchKeyword">{searchKeyword + " "}</span>
            키워드 검색으로
          </span>
        ) : (
          ""
        )}
        <span>{" " + renderMovies.length}</span>
        개의 영화가 검색되었습니다.
      </p>
      <div className="wholeMovieSearchBarWrap">
        <input
          type="text"
          className="wholeMovieSearchBar"
          placeholder="영화명 검색"
          title="영화 검색"
          onKeyDown={enterKeyword}
          onChange={inputChange}
          value={searchInput}
        />
        <button type="button" className="iconSearchBtn" onClick={searchBtn} />
      </div>
      {isLoading ? (
        <SkeletonWholeMoviePage />
      ) : (
        <ul className="wholeMovieList">
          {renderMovies.map((movie, i) => {
            let iconClassName = "icon";
            switch (movie.grade) {
              case "18+":
                iconClassName += " ageGrade19Small";
                break;
              case "15+":
                iconClassName += " ageGrade15Small";
                break;
              case "12+":
                iconClassName += " ageGrade12Small";
                break;
              case "all":
              default:
                iconClassName += " ageGradeSmall";
                break;
            }
            return (
              <li className="wholeMovie" key={i}>
                <Link to={"detail/" + movie.id}>
                  <p className="mainRank">{movie.rank}</p>
                  <img
                    className="wholeMoviePoster"
                    alt={movie.title}
                    data-poster={movie.poster}
                  />
                  <div className="wholeMovieInforWrap">
                    <p className="wholeMovieSummary">{movie.description}</p>
                    <div className="boxOfficeMovieScore">
                      <div>
                        <p>관람평</p>
                        <strong>{movie.average_point.toFixed(1)}</strong>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="movieListTitleWrap">
                  <span className={iconClassName} />
                  <span className="movieListTitle">{movie.name_kor}</span>
                </div>
                <div className="movieListRateandDay">
                  <span className="movieListBookingRate">
                    예매율 {movie.reservation_rate}%
                  </span>
                  <span className="movieListOpeningDay">
                    개봉일 {movie.open_date}
                  </span>
                </div>

                <div className="wholeBtnWrap">
                  <button
                    className={[
                      "wholeFavoriteBtn",
                      "btn",
                      "outLine",
                      "lightGray",
                      "small",
                    ].join(" ")}
                    onClick={() => clickFavorite(movie.id)}
                  >
                    <span
                      className={
                        "icon" +
                        (isFavorite(movie.id)
                          ? " favorite select"
                          : " favorite")
                      }
                    ></span>
                    <span className="wholeFavoriteScore">
                      {movie.acc_favorite}
                    </span>
                  </button>
                  <Link to="/booking">
                    <button
                      onClick={() =>
                        dispatch(
                          selectMovie({
                            title: movie.name_kor,
                            poster: movie.poster,
                            id: movie.id,
                          })
                        )
                      }
                      className={[
                        "wholeBookingBtn",
                        "btn",
                        "fill",
                        "subLight",
                        "small",
                      ].join(" ")}
                    >
                      예매
                    </button>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default WholeMovieListWrap;
