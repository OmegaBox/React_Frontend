import React from "react";
import { useSelector } from "react-redux";
import {
  numWithComma,
  timeDateSplit,
  sliceDate,
  sliceTime,
  createDay,
} from "../../Utils/util";
const MyMovieStoryWatched = () => {
  const { watchedMovie } = useSelector((state) => ({
    watchedMovie: state.userInfo.watchedMovies,
  }));
  return (
    <section className="watched">
      <h4 className="a11yHidden">본영화</h4>
      {/* <div className="notice">
        <ul className="bullet">
          <li>
            극장에서 발권하신 티켓 바코드 하단의 거래번호를 통해 본 영화 등록을
            하실 수 있습니다.
          </li>
          <li>본 영화는 관람한 인원수에 한해 등록이 가능합니다.</li>
        </ul>
        <button
          type="button"
          className={["btn", "outLine", "small", "main"].join(" ")}
        >
          본 영화 등록
        </button>
      </div> */}
      <p className="listCounter">
        총 <span>{watchedMovie.length}</span>건
      </p>
      <ul className={["movieList", "clearfix"].join(" ")}>
        {watchedMovie.length ? (
          watchedMovie.map((movie) => (
            <li key={movie.payment_id} className="watchedMovie">
              <article className="movieItem">
                <div className="poster">
                  <img
                    src={movie.movie.poster}
                    alt={`${movie.movie.movie_name} 포스터`}
                  />
                </div>
                <ul className={["info", "clearfix"].join(" ")}>
                  <li className="title">
                    <h5 className="a11yHidden">영화명</h5>
                    <p>{movie.movie.movie_name}</p>
                  </li>
                  <li className="theater">
                    <h5 className="a11yHidden">극장</h5>
                    <p>{movie.theater_name}</p>
                  </li>
                  <li className="theater2">
                    <h5 className="a11yHidden">상영관</h5>
                    <p>{movie.screen_name}</p>
                  </li>
                  <li className="viewingDate">
                    <h5 className="a11yHidden">관람일시</h5>
                    <p>
                      {sliceDate(movie.start_time)}{" "}
                      {createDay(movie.start_time)}{" "}
                      {sliceTime(movie.start_time)}
                    </p>
                  </li>
                </ul>
                {/* <div className="btnWrap">
                  <button
                    type="button"
                    className={["btn", "outLine", "lightGray", "small"].join(
                      " "
                    )}
                  >
                    <span className={["icon", "write"].join(" ")}></span>
                    관람평보기
                  </button>
                  <button
                    type="button"
                    className={["btn", "outLine", "lightGray", "small"].join(
                      " "
                    )}
                  >
                    삭제
                  </button>
                </div> */}
              </article>
            </li>
          ))
        ) : (
          <li className="listNull">리스트가 없습니다.</li>
        )}
      </ul>
    </section>
  );
};

export default React.memo(MyMovieStoryWatched);
