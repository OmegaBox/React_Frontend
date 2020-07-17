import React from "react";
import "./style/MovieDetailComment.scss";
import { useSelector } from "react-redux";

const MovieDetailComment = () => {
  window.scrollTo(0, 520);
  const movie = useSelector((state) => state.Movie.detail);
  return (
    <div>
      <div className="movieCommentWrap">
        <p className="sTitle">
          #살아있다에 대한 <span>5,464</span>개의 이야기가 있어요!
        </p>
        <div className="myComment">
          <div className="profile">
            <div className="photo">
              <img
                src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-mega-profile.png"
                alt=""
              />
            </div>
            <p className="id">MEGABOX</p>
          </div>
          <div className="box">
            <p className="content">
              <span className="userName">홍길동</span>님{" "}
              <span className="movieTitle">나의 첫 번째 슈퍼스타</span>재미있게
              보셨나요? 영화의 어떤 점이 좋았는지 이야기해주세요.
            </p>
            <button
              type="button"
              className={["btn", "xSmall", "outLine", "white"].join(" ")}
            >
              <span className={["icon", "write"].join(" ")}></span>
              <span>관람평쓰기</span>
            </button>
          </div>
        </div>
        <ul className="commentList">
          {movie.ratings !== undefined &&
            movie.ratings.map((rating, i) => {
              return (
                <li key={`rating.${i}`} className="movieComment">
                  <div className="profile">
                    <div className="photo"></div>
                    <p className="id">{rating.member}</p>
                  </div>
                  <div className="box">
                    <h3 className="title">관람평</h3>
                    <p className="ratePoint">{rating.score}</p>
                    <p className="hashTag">
                      <span>{rating.key_point}</span>
                    </p>
                    <p className="comment">{rating.comment}</p>
                    {/* <button type="button">
                    <span className={["icon", "like"].join(" ")}></span>
                    <span>0</span>
                  </button> */}
                    <button type="button">
                      <span className={["icon", "btnMore"].join(" ")}></span>
                    </button>
                  </div>
                  <div className="writeDateCount">5일전</div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetailComment;
