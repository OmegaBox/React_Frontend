import React, { useEffect } from "react";
import MovieDetail from "../Templates/MovieDetail";
import { useDispatch } from "react-redux";
import { getMovie } from "../../Reducer/movieReducer";

const MovieDetailPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getMovie());
  }, [dispatch])
  return <MovieDetail />
};

export default MovieDetailPage;