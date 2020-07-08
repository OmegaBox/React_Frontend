import React, { useEffect } from "react";
import MovieDetail from "../Templates/MovieDetail";
import { useDispatch } from "react-redux";
import { getMovie } from "../../Reducer/movieReducer";

const MovieDetailPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch])
  return <MovieDetail />
};

export default MovieDetailPage;