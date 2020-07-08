import React, { useState } from "react";
import "./style/MovieDetailWrap.scss";
import { useSelector } from "react-redux";




const MovieDetailWrap = () => {
  const movieDetail = useSelector((state) => state.Movie.movieDetail);

  return (
    <div className="movieVisual">
      {movieDetail.map((movie, i) => {
        return (
          <div key={`movies${movie.id}`}>
            <div className="movieBg">
              <img
                src="https://img.megabox.co.kr/SharedImg/2020/07/03/tYL5aEGMlMIZODmDFWdwfLyVD2DW13OJ_570.jpg"
                alt=""
              />
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
                    className={["btn", "outLine", "regular", "white"].join(" ")}
                  >
                    {movie.acc_favortie}
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
                      <span>{movie.average_point}</span>
                    </div>
                  </li>
                  <li>
                    <h4 className="title">예매율</h4>
                    <div className="bookingRate">
                      <span className={["icon", "bookingRate"].join(" ")}></span>
                      <span>{movie.rank}</span>
                      <span className="smallTxt">위 ({movie.reservation_rate})</span>
                    </div>
                  </li>
                  <li className="acc">
                    <h4 className="title">
                      누적관객수<span className={["icon", "info"].join(" ")}></span>
                    </h4>
                    <div className="accCumlative">
                      <span className={["icon", "accCumlative"].join(" ")}></span>
                      <span>{movie.acc_audience}</span>
                      <span className="smallTxt">명</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="posterButton">
                <div className="poster">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                  />
                </div>
                <button
                  type="button"
                  className={["btn", "fill", "regular", "sub"].join(" ")}
                >
                  예매
          </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default MovieDetailWrap;