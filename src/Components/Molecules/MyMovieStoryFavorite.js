import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectMovie } from "../../Reducer/bookingReducer";
import { changeView } from "../../Reducer/myMovieStoryReducer";
import { SEND_FAVORITE } from "../../Reducer/userInfoReducer";

const MyMovieStoryFavorite = () => {
  const dispatch = useDispatch();
  const { favoriteMovies } = useSelector((state) => ({
    favoriteMovies: state.userInfo.favoriteMovies,
  }));
  const ageGrade = (grade) => {
    let gradeName = "";
    switch (grade) {
      case 0:
        gradeName = "ageGrade";
        break;
      case 12:
        gradeName = "ageGrade12";
        break;
      case 15:
        gradeName = "ageGrade15";
        break;
      case 18:
        gradeName = "ageGrade19";
        break;
      default:
        break;
    }
    return gradeName;
  };

  const clickFavorite = (movieId) => {
    dispatch({
      type: SEND_FAVORITE,
      movieId,
    });
    dispatch(changeView("favorite"));
  };
  return (
    <section className={["likeMovie", "clearfix"].join(" ")}>
      <h4 className="a11yHidden">보고싶어</h4>
      <p className="listCounter">
        총 <span>{favoriteMovies.length}</span>건
      </p>
      <ul className="movieList">
        {favoriteMovies ? (
          favoriteMovies.map((movie) => (
            <li key={movie.movie_id} className="wantMovie">
              <article className="movieItem">
                <div className="poster">
                  <img src={movie.poster} alt={`${movie.movie_name} 포스터`} />
                </div>
                <ul className={["info", "clearfix"].join(" ")}>
                  <li className="title">
                    <h5 className="a11yHidden">영화명</h5>
                    <p>
                      <span
                        className={["icon", ageGrade(movie.grade)].join(" ")}
                      ></span>
                      {movie.movie_name}
                    </p>
                  </li>
                  <li className="btnWrap">
                    <button
                      type="button"
                      className={["btn", "small", "outLine", "lightGray"].join(
                        " "
                      )}
                      onClick={() => {
                        clickFavorite(movie.movie_id);
                      }}
                    >
                      <span
                        className={["icon", "favorite", "select"].join(" ")}
                      ></span>
                      {movie.acc_favorite}
                    </button>
                    <Link to="/booking">
                      <button
                        onClick={() => {
                          dispatch(
                            selectMovie({
                              title: movie.movie_name,
                              poster: movie.poster,
                              id: movie.movie_id,
                            })
                          );
                        }}
                        type="button"
                        className={["btn", "small", "fill", "main"].join(" ")}
                      >
                        예매
                      </button>
                    </Link>
                  </li>
                </ul>
              </article>
            </li>
          ))
        ) : (
          <li key="0" className="listNull">
            리스트가 없습니다.
          </li>
        )}
      </ul>
    </section>
  );
};

export default React.memo(MyMovieStoryFavorite);
