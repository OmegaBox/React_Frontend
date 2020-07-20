import React, { useEffect } from "react";
import "./style/MainBoxOffice.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  selectMovie,
  clearSelectedMovies,
} from "../../../Reducer/bookingReducer";
import { getSearchMovie } from "../../../Reducer/movieReducer";
import {
  GET_TIMELINE_LIKE,
  SEND_FAVORITE,
} from "../../../Reducer/userInfoReducer";
import { openModal } from "../../../Reducer/modalReducer";

import SkeletonMainMovies from "../../Atoms/SkeletonMainMovies";

const MainBoxOffice = () => {
  const [movieBox, movieLoading] = useSelector((state) => [
    state.Movie.movies.filter((_, i) => i < 4),
    state.Movie.loading,
  ]);
  const { isLogin, favoriteMovies } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const history = useHistory();

  const mainEnterKeyword = (e) => {
    if (e.keyCode === 13) {
      history.push("/listMovies");
      dispatch(getSearchMovie(e.target.value));
    }
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

  useEffect(() => {
    if (isLogin) {
      dispatch({ type: GET_TIMELINE_LIKE });
    }
  }, [isLogin, favoriteMovies.length]);

  return (
    <div className="mainBoxOfficeLayout">
      <div className="mainBoxOffice">
        <div className="mainBoxOfficeHeader">
          <h2>박스오피스</h2>
          <Link to="/listMovies">
            <div className="boxOfficeMoreMovieWrap">
              <div className="boxOfficeMoreMovie">더 많은 영화보기 </div>
              <div className="icon moreMovieIcon"></div>
            </div>
          </Link>
        </div>
        <div className="mainMovieList">
          <ul className="mainMoviesWrap">
            {movieLoading
              ? new Array(4).fill(0).map((v, i) => (
                  <li key={`skelton${i}`} className="skeletonMainMovieLi">
                    <SkeletonMainMovies />
                  </li>
                ))
              : movieBox.map((movie) => (
                  <li key={`movieList${movie.id}`}>
                    <Link to={"detail/" + movie.id}>
                      <p className="mainRank">{movie.rank}</p>
                      <img
                        className="boxOfficeMoviePoster"
                        alt={movie.title}
                        src={movie.poster}
                      />
                      <div className="boxOfficeMovieInforWrap">
                        <p className="boxOfficeMovieSummary">
                          {movie.description}
                        </p>
                        <div className="boxOfficeMovieScore">
                          <div>
                            <p>관람평</p>
                            <strong>
                              {Math.ceil(movie.average_point * 10) / 10}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="boxOfficeBtnWrap">
                      <button
                        className={[
                          "boxOfficeFavoriteBtn",
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
                              : " favoriteOutLine")
                          }
                        ></span>
                        <span className="boxOfficeFavoriteScore">
                          {movie.acc_favorite}
                        </span>
                      </button>
                      <Link to="/booking">
                        <button
                          onClick={() => {
                            dispatch(clearSelectedMovies());
                            dispatch(
                              selectMovie({
                                title: movie.name_kor,
                                poster: movie.poster,
                                id: movie.id,
                              })
                            );
                          }}
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
                      </Link>
                    </div>
                  </li>
                ))}
          </ul>
        </div>
        <ul className="boxOfficeSubBarWrap">
          <li className="boxOfficeSearchBarWrap">
            <form>
              <input
                type="text"
                onKeyDown={mainEnterKeyword}
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
      <div className="moviePosterBg">
        {movieBox.map((movie, i) => {
          return <img key={i} src={movie.poster} alt={movie.title} />;
        })}
      </div>
    </div>
  );
};

export default React.memo(MainBoxOffice);
