import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import NavSample from "../Organisms/NavSample";
import MovieDetailWrap from "../Organisms/MovieDetail/MovieDetailWrap";
import MovieInforWrap from "../Organisms/MovieDetail/MovieInforWrap";

const MovieDetail = () => {
  return (
    <div>
      <Header />
      <MovieDetailWrap />
      <MovieInforWrap />
      <Footer />
      <NavSample />
    </div>
  );
};

export default MovieDetail;
