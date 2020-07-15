import React from "react";

const SkeletonMainMovies = () => {
  return (
    <>
      <div className="skeleton boxOfficeMoviePoster"></div>
      <div className="boxOfficeBtnWrap">
        <div className="skeleton boxOfficeFavoriteBtn"></div>
        <div className="skeleton boxOfficeBookingBtn"></div>
      </div>
    </>
  );
};

export default SkeletonMainMovies;
