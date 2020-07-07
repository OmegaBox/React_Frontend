import React from "react";
// import { movieApi } from "../../../Api/api";
import "./style/MainBoxOffice.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MainBoxOffice = () => {
  let movieBox = useSelector((state) => state.Movie.movies);
  movieBox = movieBox.filter((_, i) => i < 4);

  return (
    <div className="mainBoxOfficeLayout">
      <div className="mainBoxOffice">
        <div className="mainBoxOfficeHeader">
          <h2>박스오피스</h2>
          <Link to="/moviesList">
            <div className="boxOfficeMoreMovieWrap">
              <div className="boxOfficeMoreMovie">더 많은 영화보기 </div>
              <div className="icon moreMovieIcon"></div>
            </div>
          </Link>
        </div>
        <div className="mainMovieList">
          <ul className="mainMoviesWrap">
            {movieBox.map((movie, i) => {
              return (
                <li key={i}>
                  <Link to={"movie/" + movie.id}>
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
                          <strong>{movie.average_point}</strong>
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
                    >
                      <span className="icon favoriteOutLine"></span>
                      <span className="boxOfficeFavoriteScore">{movie.acc_favorite}</span>
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
            }
            )}
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
