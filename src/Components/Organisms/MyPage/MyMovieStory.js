import React, { useState } from "react";
import MyMovieStoryTimeLine from "../../Molecules/MyMovieStoryTimeLine";
import MyMovieStoryFavorite from "../../Molecules/MyMovieStoryFavorite";
import MyMovieStoryComment from "../../Molecules/MyMovieStoryComment";
import MyMovieStoryWatched from "../../Molecules/MyMovieStoryWatched";
import "./style/MyMovieStory.scss";

const MyMovieStory = () => {
  const [currentView, setCurrentView] = useState({
    view: "timeLine",
  });
  console.log(currentView.view);
  return (
    <div className="myMovieStoryWrap">
      <h3 className="mypageTitle">나의 무비스토리</h3>
      <ul className="myMovieStoryTab">
        <li className="active">
          <a href="#">무비타임라인</a>
        </li>
        <li>
          <a href="#">한줄평</a>
        </li>
        <li>
          <a href="#">본영화</a>
        </li>
        <li>
          <a href="#">보고싶어</a>
        </li>
      </ul>
      <MyMovieStoryTimeLine />
      <MyMovieStoryComment />
      <MyMovieStoryWatched />
      <MyMovieStoryFavorite />
    </div>
  );
};

export default MyMovieStory;
