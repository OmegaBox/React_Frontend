import React, { useEffect } from "react";
import WholeMovieList from "../Templates/WholeMovieList";
import "./style/mypage.scss";
import { useDispatch } from "react-redux";
import { getMovies } from "../../Reducer/movieReducer";

const WholeMovieListPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getMovies());
  }, [dispatch]);
  return <WholeMovieList />;
};

export default WholeMovieListPage;
