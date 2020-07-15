import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import MovieDetailWrap from "../Organisms/MovieDetail/MovieDetailWrap";
import MovieDetailTab from "../Organisms/MovieDetail/MovieDetailTab";

const MovieDetail = () => {
  return (
    <div>
      <Header />
      <MovieDetailWrap />
      <MovieDetailTab />
      <Footer />
    </div>
  );
};

export default MovieDetail;
