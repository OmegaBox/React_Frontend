import React from "react";

import "./style/BookingMovieList.scss";

const BookingMovieList = () => {
  return (
    <div className="bookingMovieList">
      <h3>영화</h3>
      <ul className="movieLists">
        <li>#살아있다</li>
        <li>온워드: 단 하루의 기적</li>
        <li>소리꾼</li>
        <li>결백</li>
        <li>#살아있다</li>
        <li>온워드: 단 하루의 기적</li>
        <li>소리꾼</li>
        <li>결백</li>
        <li>#살아있다</li>
        <li>온워드: 단 하루의 기적</li>
        <li>소리꾼</li>
        <li>결백</li>
        <li>#살아있다</li>
        <li>온워드: 단 하루의 기적</li>
        <li>소리꾼</li>
        <li>결백</li>
        <li>#살아있다</li>
        <li>온워드: 단 하루의 기적</li>
        <li>소리꾼</li>
        <li>결백</li>
        <li>#살아있다</li>
        <li>온워드: 단 하루의 기적</li>
        <li>소리꾼</li>
        <li>결백</li>
        <li>#살아있다</li>
        <li>온워드: 단 하루의 기적</li>
        <li>소리꾼</li>
        <li>결백</li>
        <li>#살아있다</li>
        <li>온워드: 단 하루의 기적</li>
        <li>소리꾼</li>
        <li>결백</li>
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
