import React, { useState } from "react";
import MyMovieStoryTimeLine from "../../Molecules/MyMovieStoryTimeLine";
import MyMovieStoryFavorite from "../../Molecules/MyMovieStoryFavorite";
import MyMovieStoryComment from "../../Molecules/MyMovieStoryComment";
import MyMovieStoryWatched from "../../Molecules/MyMovieStoryWatched";
import "./style/MyMovieStory.scss";

const MyMovieStory = () => {
  const [currentView, setCurrentView] = useState({
    view: "timeline",
  });

  console.log(currentView.view);
  const changeView = (view) =>
    setCurrentView({
      ...currentView,
      view,
    });
  const movieStoryView = () => {
    switch (currentView.view) {
      case "timeline":
        return <MyMovieStoryTimeLine />;
      case "comment":
        return <MyMovieStoryComment />;
      case "watched":
        return <MyMovieStoryWatched />;
      case "favorite":
        return <MyMovieStoryFavorite />;
      default:
        return <MyMovieStoryTimeLine />;
    }
  };
  return (
    <div className="myMovieStoryWrap">
      <h3 className="mypageTitle">나의 무비스토리</h3>
      <ul className="myMovieStoryTab">
        <li className={currentView.view === "timeline" ? "active" : ""}>
          <button
            type="button"
            className={["btn", "regular"].join(" ")}
            onClick={() => changeView("timeline")}
          >
            무비타임라인
          </button>
        </li>
        <li className={currentView.view === "comment" ? "active" : ""}>
          <button
            type="button"
            className={["btn", "regular"].join(" ")}
            onClick={() => changeView("comment")}
          >
            한줄평
          </button>
        </li>
        <li className={currentView.view === "watched" ? "active" : ""}>
          <button
            type="button"
            className={["btn", "regular"].join(" ")}
            onClick={() => changeView("watched")}
          >
            본영화
          </button>
        </li>
        <li className={currentView.view === "favorite" ? "active" : ""}>
          <button
            type="button"
            className={["btn", "regular"].join(" ")}
            onClick={() => changeView("favorite")}
          >
            보고싶어
          </button>
        </li>
      </ul>
      {movieStoryView()}
    </div>
  );
};

export default MyMovieStory;
