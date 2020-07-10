import React, { useEffect } from "react";
import MovieDetail from "../Templates/MovieDetail";
import { useDispatch } from "react-redux";
import { getMovie } from "../../Reducer/movieReducer";

const MovieDetailPage = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getMovie(`${match.params.idx}`));
    console.log("여길봐", `${match.params.idx}`);
  }, [dispatch]);
  return <MovieDetail />;
};

export default MovieDetailPage;
