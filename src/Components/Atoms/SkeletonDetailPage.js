import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonDetailPage = () => {
  return (
    <div>
      <ContentLoader
        speed={2}
        width={1440}
        height={520}
        backgroundColor={"#444"}
        foregroundColor="#ecebeb"
      >
        <rect x="60" y="50" rx="3" ry="3" width="300" height="99" />
        <rect x="60" y="100" rx="3" ry="3" width="300" height="99" />
        <rect x="60" y="300" rx="3" ry="3" width="300" height="40" />
        <rect x="200" y="450" rx="3" ry="3" width="80" height="40" />
        <rect x="300" y="450" rx="3" ry="3" width="125" height="50" />
        <rect x="400" y="450" rx="3" ry="3" width="200" height="50" />
        <rect x="1000" y="50" rx="3" ry="3" width="260" height="374" />
        <rect x="1000" y="430" rx="3" ry="3" width="228" height="40" />
      </ContentLoader>
    </div>
  )
}

export default SkeletonDetailPage;