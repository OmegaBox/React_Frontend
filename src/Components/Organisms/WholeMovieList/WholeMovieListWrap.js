import React from "react";
import "./style/WholeMovieListWrap.scss"

const WholeMovieListWrap = () => {
  return (
    <div className="WholeMovieListLayout">
      <h1>전체영화</h1>
      <ul className="movieListTap">
        <li className="active">
          <button type="button">박스오피스</button>
        </li>
        <li>
          <button type="button">상영예정작</button>
        </li>
        <li>
          <button type="button">필름소사이어티</button>
        </li>
        <li>
          <button type="button">클래식소사이어티</button>
        </li>
      </ul>

    </div>
  )
}

export default WholeMovieListWrap;

