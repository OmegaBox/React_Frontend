import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import NavSample from "../Organisms/NavSample";
import WholeMovieListWrap from "../Organisms/WholeMovieList/WholeMovieListWrap";

const MovieDetail = () => {
  return (
    <div>
      <Header />
      <WholeMovieListWrap />
      <Footer />
      <NavSample />
    </div>
  );
};

export default MovieDetail;
