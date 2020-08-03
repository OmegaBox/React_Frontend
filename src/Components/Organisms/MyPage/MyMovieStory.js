import React, { useEffect, useCallback } from "react";
import MyMovieStoryTimeLine from "../../Molecules/MyMovieStoryTimeLine";
import MyMovieStoryFavorite from "../../Molecules/MyMovieStoryFavorite";
import MyMovieStoryComment from "../../Molecules/MyMovieStoryComment";
import MyMovieStoryWatched from "../../Molecules/MyMovieStoryWatched";
import { useSelector, useDispatch } from "react-redux";
import "./style/MyMovieStory.scss";
import { changeView } from "../../../Reducer/myMovieStoryReducer";
import { checkLogin, getMemberProfile } from "../../../Reducer/userInfoReducer";
import { useHistory } from "react-router-dom";

const MyMovieStory = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { view } = useSelector((state) => ({
    view: state.myMovieStory.view,
  }));
  const goLogin = useCallback(() => {
    history.push("/memberlogin");
  }, [history]);

  useEffect(() => {
    // window.scrollTo(0, 0);
    dispatch(checkLogin(goLogin));
    dispatch(getMemberProfile());
  }, [dispatch, goLogin]);
  const movieStoryView = () => {
    switch (view) {
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
        <li className={view === "timeline" ? "active" : ""}>
          <button
            type="button"
            className={["btn", "regular"].join(" ")}
            onClick={() => dispatch(changeView("timeline"))}
          >
            무비타임라인
          </button>
        </li>
        <li className={view === "comment" ? "active" : ""}>
          <button
            type="button"
            className={["btn", "regular"].join(" ")}
            onClick={() => dispatch(changeView("comment"))}
          >
            한줄평
          </button>
        </li>
        <li className={view === "watched" ? "active" : ""}>
          <button
            type="button"
            className={["btn", "regular"].join(" ")}
            onClick={() => dispatch(changeView("watched"))}
          >
            본영화
          </button>
        </li>
        <li className={view === "favorite" ? "active" : ""}>
          <button
            type="button"
            className={["btn", "regular"].join(" ")}
            onClick={() => dispatch(changeView("favorite"))}
          >
            보고싶어
          </button>
        </li>
      </ul>
      {movieStoryView()}
    </div>
  );
};

export default React.memo(MyMovieStory);
