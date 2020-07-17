/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./style/MovieDetailWrap.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { selectMovie } from "../../../Reducer/bookingReducer";
import { resetMovies } from "../../../Reducer/movieReducer";
import { SEND_FAVORITE } from "../../../Reducer/userInfoReducer";
import { openModal } from "../../../Reducer/modalReducer";

import { numWithComma } from "../../../Utils/util";
import SkeletonDetailPage from "../../Atoms/SkeletonDetailPage";

const MovieDetailWrap = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const movie = useSelector((state) => state.Movie.detail);
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.Movie.detail.detail);
  const { isLogin, favoriteMovies } = useSelector((state) => state.userInfo);

  const isFavorite = (movieId) => {
    return (
      favoriteMovies.length !== 0 &&
      favoriteMovies.map((favorite) => favorite.movie_id).includes(movieId)
    );
  };

  console.log("체크");

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

  useEffect(() => {
    return () => {
      if (url.slice(0, 7) === "/detail") dispatch(resetMovies());
    };
  }, [url]);

  return (
    <div className="movieVisual">
      {isLoading ? (
        <SkeletonDetailPage />
      ) : (
        <div key={`movies${movie.id}`}>
          <div className="movieBg">
            <img src={movie.poster} alt={movie.title} />
          </div>
          <div className="movieInfo">
            <div className="summary">
              <h3 className="title">
                {movie.name_kor}
                <span className="engTitle">{movie.name_eng}</span>
              </h3>
              <div className="btnWrap">
                <button
                  type="button"
                  className={[
                    "btn",
                    "outLine",
                    "regular",
                    "white",
                    "favorite",
                  ].join(" ")}
                  onClick={() => clickFavorite(movie.id)}
                >
                  <span
                    className={
                      "icon" +
                      (isFavorite(movie.id)
                        ? " favorite select"
                        : " favoriteOutLine")
                    }
                  ></span>
                  <span>{movie.acc_favorite}</span>
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
                    <span>{Math.ceil(movie.average_point * 10) / 10}</span>
                  </div>
                </li>
                <li>
                  <h4 className="title">예매율</h4>
                  <div className="bookingRate">
                    <span className={["icon", "bookingRate"].join(" ")}></span>
                    <span>{movie.rank}</span>
                    <span className="smallTxt">
                      위 ({movie.reservation_rate}%)
                    </span>
                  </div>
                </li>
                <li className="acc">
                  <h4 className="title">
                    누적관객수
                    <span className={["icon", "info"].join(" ")}></span>
                  </h4>
                  <div className="accCumlative">
                    <span className={["icon", "accCumlative"].join(" ")}></span>
                    <span>{numWithComma(movie.acc_audience)}</span>
                    <span className="smallTxt">명</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="posterButton">
              <div className="poster">
                <img src={movie.poster} alt={movie.title} />
              </div>
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
                  type="button"
                  className={[
                    "btn",
                    "fill",
                    "regular",
                    "sub",
                    "detailBookingBtn",
                  ].join(" ")}
                >
                  예매
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailWrap;
