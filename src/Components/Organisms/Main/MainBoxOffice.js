import React, { useState } from "react";
import "./style/MainBoxOffice.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { selectMovie } from "../../../Reducer/bookingReducer";
import { getSearchMovie } from "../../../Reducer/movieReducer";
import SkeletonMainMovies from "../../Atoms/SkeletonMainMovies";
import { isLogin } from "../../../Api/api";
import { setSize, openModal } from "../../../Reducer/modalReducer";

const MainBoxOffice = () => {
  const [movieBox, movieLoading] = useSelector((state) => [
    state.Movie.movies.filter((_, i) => i < 4),
    state.Movie.loading,
  ]);
  const isLoginCheck = useSelector((state) => state.userInfo.isLogin);
  console.log(isLoginCheck);

  const dispatch = useDispatch();
  const history = useHistory();

  // 좋아요버튼 상태변경 
  const [likeState, setLikeState] = useState({ active: false });
  const clickLikeState = () => {
    setLikeState({
      active: !likeState.active,
    });
  };




  const handleClick = () => {
    dispatch(setSize(null, null));
    dispatch(openModal("로그인 후 이용가능한 서비스입니다."))
  }

  const mainEnterKeyword = (e) => {
    if (e.keyCode === 13) {
      history.push("/listMovies");
      dispatch(getSearchMovie(e.target.value));
    }
  };

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
                      <div className="boxOfficeMovieSummary">
                        <p>{movie.description}</p>
                      </div>
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

                      onClick={isLoginCheck === true ? clickLikeState : handleClick}
                      className={[
                        "boxOfficeFavoriteBtn",
                        "btn",
                        "outLine",
                        "lightGray",
                        "small",
                        "select"
                      ].join(" ")}
                    >
                      <span className="icon favoriteOutLine"></span>
                      <span className="boxOfficeFavoriteScore">
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

export default MainBoxOffice;
