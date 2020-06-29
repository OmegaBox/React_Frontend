import React from "react";
import "./MainBoxOffice.scss";
// import { Link } from "react-router-dom";
// import movieReducer from "../../../Reducer/movieReducer";

const MainBoxOffice = () => {
  return (
    <div className="mainBoxOfficeLayout">
      <div className="mainBoxOffice">
        <h2>박스오피스</h2>
        <div className="boxOffice">
        </div>
        <div className="mainSearchBar">
          <input
            type="text"
            className="searchBar"
            placeholder="영화명을 입력해주세요."
          />
          <button type="button" className="searchBtn"></button>
        </div>
      </div>
    </div >
  );
};

export default MainBoxOffice;

//  {/* <img
//         className="mainImg"
//         src="https://img.megabox.co.kr/SharedImg/2020/06/09/4ukWkF6Z9Q80RY6g3l1UWJoR4q0SrGf7_380.jpg"
//         alt="1. #살아있다_캐릭터 포스터(유아인ver).jpg"
//       /> */}