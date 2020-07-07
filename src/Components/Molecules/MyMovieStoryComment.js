import React from "react";
import { useSelector } from "react-redux";

const MyMovieStoryComment = () => {
  const { commentMovie } = useSelector((state) => ({
    commentMovie: state.userInfo.commentMovies,
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
        총<span>{commentMovie.length}</span>건
      </p>
      <ul className="movieList">
        {commentMovie.length ? (
          commentMovie.map((movie) => (
            <li key={movie.id}>
              <article className="movieItem">
                <div className="poster">
                  <img src={movie.poster} alt={`${movie.title} 포스터`} />
                </div>
                <ul className={["info", "clearfix"].join(" ")}>
                  <li className="tag">
                    <h5 className="a11yHidden">구분</h5>
                    <p>관람평</p>
                  </li>
                  <li className="title">
                    <h5 className="a11yHidden">영화명</h5>
                    <p>{movie.title}</p>
                  </li>
                  <li className="evalPoint">
                    <h5 className="a11yHidden">평가점수</h5>
                    <p>{movie.rating}</p>
                    {movie.hashTag.map((tag) => (
                      <span key={tag.id} className="hashTag">
                        {tag.tag}
                      </span>
                    ))}
                  </li>
                  <li className="evalComment">
                    <h5 className="a11yHidden">관람평</h5>
                    <p>{movie.commentText}</p>
                  </li>
                  <li className="writeDate">
                    <h5 className="a11yHidden">작성일시</h5>
                    <p>
                      <span className={["icon", "like"].join(" ")}></span>
                      {getWriteTime("2020-07-05")} 일전
                    </p>
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
