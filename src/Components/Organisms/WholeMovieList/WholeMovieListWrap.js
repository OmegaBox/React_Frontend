import React from "react";
// import { movieApi } from "../../../Api/api";
import { useSelector } from "react-redux";
import "./style/WholeMovieListWrap.scss"
import { Link } from "react-router-dom";

const WholeMovieListWrap = () => {
  const movies = useSelector((state) => state.Movie.movies);

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
          className="wholeMovieSearchBar"
          placeholder="영화명 검색"
          title="영화 검색"
        />
        <button type="button" className="iconSearchBtn"></button>
      </div>
      <ul className="wholeMovieList">
        {movies.map((movie, i) => {
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
              <Link to={"movie/" + movie.id}>
                <p className="mainRank">{movie.rank}</p>
                <img
                  className="wholeMoviePoster"
                  alt={movie.title}
                  src={movie.poster}
                />
                <div className="wholeMovieInforWrap">
                  <div className="wholeMovieSummary">
                    <p>{movie.description}</p>
                  </div>
                  <div className="boxOfficeMovieScore">
                    <div>
                      <p>관람평</p>
                      <strong>{movie.average_point}</strong>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="movieListTitleWrap">
                <span className={iconClassName} />
                <span className="movieListTitle">{movie.name_kor}</span>
              </div>
              <div className="movieListRateandDay">
                <span className="movieListBookingRate">예매율{movie.reservation_rate}%</span>
                <span className="movieListOpeningDay">개봉일{movie.open_date}</span>
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
                >
                  <span className="icon favorite"></span>
                  <span className="wholeFavoriteScore">{movie.acc_favorite}</span>
                </button>
                <button
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

