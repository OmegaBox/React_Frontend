const MOVIESTORY_TIMELINE = "MOVIESTORY_TIMELINE";
const MOVIESTORY_RATING = "MOVIESTORY_RATING";
const MOVIESTORY_LIKE = "MOVIESTORY_LIKE";
const MOVIESTORY_WATCHED = "MOVIESTORY_WATCHED";

export const changeView = (view) => {
  switch (view) {
    case "timeline":
      return {
        type: MOVIESTORY_TIMELINE,
      };
    case "comment":
      return {
        type: MOVIESTORY_RATING,
      };
    case "watched":
      return {
        type: MOVIESTORY_WATCHED,
      };
    case "favorite":
      return {
        type: MOVIESTORY_LIKE,
      };
    default:
      return;
  }
};

const initTab = {
  view: "timeline",
};

const myMovieStoryReducer = (state = initTab, action) => {
  switch (action.type) {
    case MOVIESTORY_TIMELINE:
      return {
        ...state,
        view: "timeline",
      };
    case MOVIESTORY_RATING:
      return {
        ...state,
        view: "comment",
      };
    case MOVIESTORY_LIKE:
      return {
        ...state,
        view: "favorite",
      };
    case MOVIESTORY_WATCHED:
      return {
        ...state,
        view: "watched",
      };
    default:
      return {
        ...state,
      };
  }
};

export default myMovieStoryReducer;
