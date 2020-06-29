import React from "react";
import "./MainBoxOffice.scss";
// import { Link } from "react-router-dom";
// import movieReducer from "../../../Reducer/movieReducer";

const MainBoxOffice = () => {
  return (
    <div className="mainBoxOfficeLayout">
      <div className="mainBoxoffice">
        <div className="boxOffice">
          박스오피스
      </div>
        <div className="mainSearchBar">
          <div><input className="searchBar" placeholder="영화명을 입력해주세요." type="text" />
            <button type="button" className="searchBtn"></button></div>
          <div>
            상영시간표
            </div>
          <div>박스오피스</div>
          <div>빠른예매</div>
        </div>
      </div>
      {/* <img
        className="mainImg"
        src="https://img.megabox.co.kr/SharedImg/2020/06/09/4ukWkF6Z9Q80RY6g3l1UWJoR4q0SrGf7_380.jpg"
        alt="1. #살아있다_캐릭터 포스터(유아인ver).jpg"
      /> */}
    </div>
  );
};

export default MainBoxOffice;

