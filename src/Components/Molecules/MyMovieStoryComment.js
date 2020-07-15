import React from "react";
import { useSelector } from "react-redux";
import { changeKeyPoint } from "../../Utils/util";

const MyMovieStoryComment = () => {
  const { commentMovies } = useSelector((state) => ({
    commentMovies: state.userInfo.commentMovies,
  }));
  const getWriteTime = (writeTime) => {
    changeTimeFormat(writeTime);
    let days = Date.now() - Date.parse(changeTimeFormat(writeTime));
    days = Math.floor(days / 86400000);
    return days;
  };

  const changeTimeFormat = (writeTime) => {
    let newFormat = Array.from(writeTime);
    newFormat.splice(4, 1, "/");
    newFormat.splice(7, 1, "/");
    newFormat = newFormat.join("");
    return newFormat;
  };

  return (
    <section className="comment">
      <h4 className="a11yHidden">한줄평</h4>
      <p className="listCounter">
        총<span>{commentMovies.length}</span>건
      </p>
      <ul className="movieList">
        {commentMovies.length ? (
          commentMovies.map((movie) => (
            <li key={movie.rating_id}>
              <article className="movieItem">
                <div className="poster">
                  <img src={movie.poster} alt={`${movie.movie_name} 포스터`} />
                </div>
                <ul className={["info", "clearfix"].join(" ")}>
                  <li className="tag">
                    <h5 className="a11yHidden">구분</h5>
                    <p>관람평</p>
                  </li>
                  <li className="title">
                    <h5 className="a11yHidden">영화명</h5>
                    <p>{movie.movie_name}</p>
                  </li>
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
                  <li className="writeDate">
                    <h5 className="a11yHidden">작성일시</h5>
                    <p>{getWriteTime(movie.created_at)} 일전 </p>
                  </li>
                  <li className="btnWrap">
                    <button
                      type="button"
                      className={["btn", "xSmall", "outLine", "lightGray"].join(
                        " "
                      )}
                    >
                      수정
                    </button>
                    <button
                      type="button"
                      className={["btn", "xSmall", "outLine", "lightGray"].join(
                        " "
                      )}
                    >
                      삭제
                    </button>
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
      <ul className="paging">
        <li>
          <a href="#">1</a>
        </li>
      </ul>
    </section>
  );
};

export default MyMovieStoryComment;
