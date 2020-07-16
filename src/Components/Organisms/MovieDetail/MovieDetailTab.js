import React, { useState } from "react";
import MovieInforWrap from "./MovieInforWrap";
import MovieTrailer from "./MovieTrailer";
import MovieDetailComment from "../../Molecules/MovieDetailComment";
import "./style/MovieDetailTab.scss";

const MovieDetailTab = () => {
  const [detailTab, setDetailTab] = useState({
    view: "detailInfor",
  });

  const changeTab = (view) => {
    setDetailTab({
      ...detailTab,
      view,
    });
  }

  const detailTabView = () => {
    switch (detailTab.view) {
      case "detailInfor":
        return <MovieInforWrap />;
      case "detailComment":
        return <MovieDetailComment />;
      case "detailTrailer":
        return <MovieTrailer />;
      default:
        return <MovieInforWrap />;
    }
  };
  return (
    <div className="movieDetailInforLayout">
      <ul className="tab">
        <li className={detailTab.view === "detailInfor" ? "active" : ""}>
          <button
            type="button"
            onClick={() => changeTab("detailInfor")}
          >
            주요정보
          </button>
        </li>
        <li className={detailTab.view === "detailComment" ? "active" : ""}>
          <button
            type="button"
            onClick={() => changeTab("detailComment")}
          >
            한줄평
          </button>
        </li>
        <li>
          <button type="button">무비포스트</button>
        </li>
        <li className={detailTab.view === "detailTrailer" ? "active" : ""}>
          <button
            type="button"
            onClick={() => changeTab("detailTrailer")}
          >
            예고편/스틸컷
          </button>
        </li>
      </ul>
      {detailTabView()}
    </div>
  );
};

export default MovieDetailTab;
