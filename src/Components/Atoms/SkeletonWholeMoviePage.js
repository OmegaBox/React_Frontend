import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonWholeMoviePage = () => {
  return (
    <div>
      <ContentLoader
        speed={2}
        width={1100}
        height={1500}
        backgroundColor={"#444"}
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="30" rx="3" ry="3" width="230" height="331" />
        <rect x="0" y="380" rx="3" ry="3" width="230" height="80" />
        <rect x="290" y="30" rx="3" ry="3" width="230" height="331" />
        <rect x="290" y="380" rx="3" ry="3" width="230" height="80" />
        <rect x="580" y="30" rx="3" ry="3" width="230" height="331" />
        <rect x="580" y="380" rx="3" ry="3" width="230" height="80" />
        <rect x="870" y="30" rx="3" ry="3" width="230" height="331" />
        <rect x="870" y="380" rx="3" ry="3" width="230" height="80" />

        <rect x="0" y="520" rx="3" ry="3" width="230" height="331" />
        <rect x="0" y="870" rx="3" ry="3" width="230" height="80" />
        <rect x="290" y="520" rx="3" ry="3" width="230" height="331" />
        <rect x="290" y="870" rx="3" ry="3" width="230" height="80" />
        <rect x="580" y="520" rx="3" ry="3" width="230" height="331" />
        <rect x="580" y="870" rx="3" ry="3" width="230" height="80" />
        <rect x="870" y="520" rx="3" ry="3" width="230" height="331" />
        <rect x="870" y="870" rx="3" ry="3" width="230" height="80" />
      </ContentLoader>
    </div>
  )
}

export default SkeletonWholeMoviePage;