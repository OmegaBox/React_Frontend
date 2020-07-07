import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectMovie } from "../../Reducer/bookingReducer";

import "./style/BookingMovieList.scss";

const BookingMovieList = () => {
  const dispatch = useDispatch();
  const selectedMovies = useSelector(
    (state) => state.Booking.selectedOption.selectedMovies
  );
  const unSelectedMovies = new Array(3 - selectedMovies.length).fill(0);

  const movies = useSelector((state) => state.Booking.movies); // 호영이가 상태 만들면 교체해야 함

  return (
    <div className="bookingMovieList">
      <h3>영화</h3>
      <ul className="movieLists">
        {movies.map((movie) => {
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

          let selectedClassName = "";
          selectedClassName += selectedMovies.find(
            (selectedMovie) => selectedMovie.title === movie.name_kor
          )
            ? "selectedInfoDarker"
            : "";

          return (
            <li key={`movieList${movie.id}`} className={selectedClassName}>
              <button
                type="button"
                onClick={() =>
                  dispatch(
                    selectMovie({
                      title: movie.name_kor,
                      poster: movie.poster,
                      id: movie.id,
                    })
                  )
                }
              >
                <span className={iconClassName} />
                <span>{movie.name_kor}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="selectedMoviePosterBox">
        <ul>
          {unSelectedMovies.length !== 3 ? (
            <>
              {selectedMovies.map((movie) => {
                return (
                  <li key={`selectedMoviesPoster${movie.id}`}>
                    <img
                      className="poster"
                      src={movie.poster}
                      alt={movie.title}
                    />
                    <button
                      onClick={() =>
                        dispatch(
                          selectMovie({
                            title: movie.title,
                            poster: movie.poster,
                          })
                        )
                      }
                    />
                  </li>
                );
              })}
              {unSelectedMovies.map((_, i) => {
                return <li key={`unSelectedMoviesPoster${i}`}>+</li>;
              })}
            </>
          ) : (
            <div className="emptySeletedList">
              <span>모든영화</span>
              <span>목록에서 영화를 선택하세요.</span>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(BookingMovieList);
