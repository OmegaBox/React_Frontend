import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSelectRegion, selectTheater } from "../../Reducer/bookingReducer";

import { movieApi } from "../../Api/api";

import "./style/BookingMovieList.scss";

const BookingMovieList = () => {
  // 호영이가 상태 만들면 교체해야 함
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.Booking.movies);

  return (
    <div className="bookingMovieList">
      <h3>영화</h3>
      <ul className="movieLists">
        {movies.map((moive) => {
          let iconClassName = "icon";
          switch (movies.grade) {
            case "청소년관람불가":
              iconClassName += " ageGrade19Small";
              break;
            case "15세이상관람가":
              iconClassName += " ageGrade15Small";
              break;
            case "12세이상관람가":
              iconClassName += " ageGrade12Small";
              break;
            case "전체관람가":
            default:
              iconClassName += " ageGradeSmall";
              break;
          }
        })}
        <li>
          <button type="button">
            <span className="icon ageGrade15Small" />
            #살아있다
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            온워드: 단 하루의 기적
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGrade19Small" />
            소리꾼
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGrade15Small" />
            결백
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            #살아있다
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            온워드: 단 하루의 기적
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            소리꾼
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            결백
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            #살아있다
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            온워드: 단 하루의 기적
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            소리꾼
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            결백
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            #살아있다
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            온워드: 단 하루의 기적
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            소리꾼
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            결백
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            #살아있다
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            온워드: 단 하루의 기적
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            소리꾼
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            결백
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            #살아있다
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            온워드: 단 하루의 기적
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            소리꾼
          </button>
        </li>
        <li>
          <button type="button">
            <span className="icon ageGradeSmall" />
            결백
          </button>
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
