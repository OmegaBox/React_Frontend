import React from "react";
import "./style/MovieTrailer.scss";

const MovieTrailer = () => {
  return (
    <div className="movieTrailerLayout">
      <ul className="tab">
        <li className="active">
          <button type="button">주요정보</button>
        </li>
        <li>
          <button type="button">한줄평</button>
        </li>
        <li>
          <button type="button">무비포스트</button>
        </li>
        <li>
          <button type="button">예고편/스틸컷</button>
        </li>
      </ul>
    </div>
  )
}

export default MovieTrailer;