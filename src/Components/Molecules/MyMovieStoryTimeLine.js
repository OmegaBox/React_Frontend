import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  sliceDate,
  sliceTime,
  createDay,
  changeKeyPoint,
} from "../../Utils/util";

const MyMovieStoryTimeLine = () => {
  const { commentMovie, favoriteMovies, watchedMovies } = useSelector(
    (state) => ({
      commentMovie: state.userInfo.commentMovies,
      favoriteMovies: state.userInfo.favoriteMovies,
      watchedMovies: state.userInfo.watchedMovies,
    })
  );

  const newComment = commentMovie.map((movie) => ({
    ...movie,
    sortId: `cm${movie.rating_id}`,
    category: "관람평",
    sortDate: movie.created_at,
  }));
  const newWatched = watchedMovies.map((movie) => ({
    ...movie,
    sortId: `wm${movie.payment_id}`,
    category: "본영화",
    sortDate: sliceDate(movie.start_time),
    poster: movie.movie.poster,
    movie_name: movie.movie.movie_name,
  }));
  const newFavorite = favoriteMovies.map((movie) => ({
    ...movie,
    sortId: `fm${movie.movie_id}`,
    category: "보고싶어",
    sortDate: movie.liked_at,
  }));
  let dateList = [];
  const getDate = () => {
    let tempArray = newComment.concat(newWatched).concat(newFavorite);
    tempArray.forEach((movie, index, arr) => {
      arr[index] = movie.sortDate;
    });
    tempArray = tempArray.filter((date, i, arr) => arr.indexOf(date) === i);
    return tempArray;
  };
  dateList = getDate();
  const totalList = newComment.concat(newWatched).concat(newFavorite);
  const getTimelineList = dateList.map((date) => {
    const getArray = totalList.filter((movie) => date === movie.sortDate);
    return {
      date: date,
      movieList: getArray,
    };
  });
  const [timeline, setTimeLine] = useState(getTimelineList);
  return (
    <section className="timeLine">
      <h4 className="a11yHidden">무비타임라인</h4>
      <div className="yearCarouselWrap">
        <button type="button" className="btnPrev"></button>
        <ul className="carousel">
          <li>
            <button type="button" className="active">
              2020
            </button>
          </li>
        </ul>
        <button type="button" className="btnNext"></button>
      </div>
      <ul className="movieList">
        {timeline.length ? (
          timeline.map((datelist) => (
            <li className="dateDivision" key={datelist.date}>
              <div className="date">
                <p>{datelist.date}</p>
              </div>
              <ul>
                {datelist.movieList.map((movie) => (
                  <li className="movie" key={movie.sortId}>
                    <article className="movieItem">
                      <div className="poster">
                        <img
                          src={movie.poster}
                          alt={`${movie.movie_name} 포스터`}
                        />
                      </div>
                      <ul className={["info", "clearfix"].join(" ")}>
                        <li className="tag">
                          <h5 className="a11yHidden">구분</h5>
                          <p>{movie.category}</p>
                        </li>
                        <li className="title">
                          <h5 className="a11yHidden">영화명</h5>
                          <p>{movie.movie_name}</p>
                        </li>
                        {movie.category === "관람평" ? (
                          <>
                            <li className="evalPoint">
                              <h5 className="a11yHidden">평가점수</h5>
                              <p>{movie.score}</p>
                              <span className="hashTag">
                                {changeKeyPoint(movie.key_point)}
                              </span>
                            </li>
                            <li className="evalComment">
                              <h5 className="a11yHidden">관람평</h5>
                              <p>{movie.comment}</p>
                            </li>
                          </>
                        ) : (
                          ""
                        )}
                        {movie.category === "본영화" ? (
                          <>
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
                          </>
                        ) : (
                          ""
                        )}

                        {movie.category === "보고싶어" ? (
                          <>
                            <li className="point">
                              <h5>개봉일</h5>
                              <p>{movie.open_date}</p>
                            </li>
                            <li className="director">
                              <h5>감독</h5>
                              <p>{movie.directors.join(", ")}</p>
                            </li>
                            <li className="genre">
                              <h5>장르</h5>
                              <p>
                                {movie.genres.join(", ")} / {movie.running_time}
                                분
                              </p>
                            </li>
                          </>
                        ) : (
                          ""
                        )}
                      </ul>
                    </article>
                  </li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <li className="listNull">리스트가 없습니다.</li>
        )}
      </ul>
    </section>
  );
};

export default React.memo(MyMovieStoryTimeLine);
