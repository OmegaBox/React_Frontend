import React, { useEffect } from "react";
import MovieDetail from "../Templates/MovieDetail";
import { useDispatch } from "react-redux";
import { getMovie } from "../../Reducer/movieReducer";

const MovieDetailPage = ({ match }) => {
  console.log(`이거슨 ${match.params.idx}`);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0)

    dispatch(getMovie(1));
    console.log('여길봐', `${match.params.idx}`);
  }, [dispatch])
  return <MovieDetail />
};

export default MovieDetailPage;