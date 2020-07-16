import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonWholeMoviePage = () => {
  return (
    <div>
      <ContentLoader
        speed={2}
        width={1440}
        height={1000}
        backgroundColor={"#444"}
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="30" rx="3" ry="3" width="230" height="331" />
        <rect x="0" y="380" rx="3" ry="3" width="230" height="80" />

        {/* <rect x="100" y="50" rx="3" ry="3" width="230" height="331" />
        <rect x="160" y="50" rx="3" ry="3" width="230" height="331" />
        <rect x="240" y="50" rx="3" ry="3" width="230" height="331" />
        <rect x="60" y="50" rx="3" ry="3" width="230" height="331" />
        <rect x="60" y="50" rx="3" ry="3" width="230" height="331" />
        <rect x="60" y="50" rx="3" ry="3" width="230" height="331" />
        <rect x="60" y="50" rx="3" ry="3" width="230" height="331" /> */}

      </ContentLoader>
    </div>
  )
}

export default SkeletonWholeMoviePage;