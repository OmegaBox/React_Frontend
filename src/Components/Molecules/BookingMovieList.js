import React from "react";

import "./style/BookingMovieList.scss";

const BookingMovieList = () => {
  return (
    <div className="bookingMovieList">
      <h3>영화</h3>
      <ul className="movieLists">
        <li>
          <button type="button">
            <span className="ageGrade" />
            #살아있다
          </button>
        </li>
        <li>
          <button type="button">온워드: 단 하루의 기적</button>
        </li>
        <li>
          <button type="button">소리꾼</button>
        </li>
        <li>
          <button type="button">결백</button>
        </li>
        <li>
          <button type="button">#살아있다</button>
        </li>
        <li>
          <button type="button">온워드: 단 하루의 기적</button>
        </li>
        <li>
          <button type="button">소리꾼</button>
        </li>
        <li>
          <button type="button">결백</button>
        </li>
        <li>
          <button type="button">#살아있다</button>
        </li>
        <li>
          <button type="button">온워드: 단 하루의 기적</button>
        </li>
        <li>
          <button type="button">소리꾼</button>
        </li>
        <li>
          <button type="button">결백</button>
        </li>
        <li>
          <button type="button">#살아있다</button>
        </li>
        <li>
          <button type="button">온워드: 단 하루의 기적</button>
        </li>
        <li>
          <button type="button">소리꾼</button>
        </li>
        <li>
          <button type="button">결백</button>
        </li>
        <li>
          <button type="button">#살아있다</button>
        </li>
        <li>
          <button type="button">온워드: 단 하루의 기적</button>
        </li>
        <li>
          <button type="button">소리꾼</button>
        </li>
        <li>
          <button type="button">결백</button>
        </li>
        <li>
          <button type="button">#살아있다</button>
        </li>
        <li>
          <button type="button">온워드: 단 하루의 기적</button>
        </li>
        <li>
          <button type="button">소리꾼</button>
        </li>
        <li>
          <button type="button">결백</button>
        </li>
      </ul>
      <div className="selectedMovie">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(BookingMovieList);
