import React from "react";
import "./style/MovieTrailer.scss";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

const MovieTrailer = () => {
  window.scrollTo(0, 786);

  const movie = useSelector((state) => state.Movie.detail);
  return (
    <div className="trailerWrap">
      <h2 className="trailerHeader">메인 예고편</h2>

      <div className="videoWrap">
        <ul className="iconWrap">
          <li className="prevIcon">
            <p>이전영상</p>
          </li>
          <li className="nextIcon">
            <p>다음영상</p>
          </li>
        </ul>
        <ReactPlayer
          url={movie.trailer}
          controls
          className="trailerPlayer"
          width="800px"
          height="450px"
        />
      </div>
    </div>
  );
};

export default MovieTrailer;
