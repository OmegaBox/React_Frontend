import React, { useEffect } from "react";
import WholeMovieList from "../Templates/WholeMovieList";
import "./mypage.scss";
import { useDispatch } from "react-redux";
import { getMovies } from "../../Reducer/movieReducer";

const WholeMovieListPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch])
  return <WholeMovieList />
};

export default WholeMovieListPage;
