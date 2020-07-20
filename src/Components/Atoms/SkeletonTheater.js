import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonTheater = () => {
  return (
    <ContentLoader
      viewBox="0 0 150 350"
      backgroundColor={"#d8d8d8"}
      foregroundColor={"#eaeaea"}
    >
      <rect x="10" y="10" rx="4" ry="4" width="80" height="13" />
      <rect x="10" y="35" rx="4" ry="4" width="80" height="13" />
      <rect x="10" y="60" rx="4" ry="4" width="80" height="13" />
      <rect x="10" y="85" rx="4" ry="4" width="80" height="13" />
      <rect x="10" y="110" rx="4" ry="4" width="80" height="13" />
      <rect x="10" y="135" rx="4" ry="4" width="80" height="13" />
      <rect x="10" y="160" rx="4" ry="4" width="80" height="13" />
      <rect x="10" y="185" rx="4" ry="4" width="80" height="13" />
      <rect x="10" y="210" rx="4" ry="4" width="80" height="13" />
    </ContentLoader>
  );
};

export default SkeletonTheater;
