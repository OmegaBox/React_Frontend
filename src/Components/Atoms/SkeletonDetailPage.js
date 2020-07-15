import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonDetailPage = () => {
  return (
    <div>
      <ContentLoader
        speed={2}
        width={1100}
        height={450}
        viewBox="0 0 1100 450"
        backgroundColor="#e81002"
      // foregroundColor="#ecebeb"
      >
        <rect x="62" y="31" rx="5" ry="5" width="174" height="22" />
        <rect x="62" y="57" rx="5" ry="5" width="174" height="19" />
        <rect x="62" y="80" rx="0" ry="0" width="174" height="21" />
        <rect x="67" y="176" rx="0" ry="0" width="40" height="22" />
        <rect x="111" y="176" rx="0" ry="0" width="59" height="22" />
        <rect x="175" y="176" rx="0" ry="0" width="80" height="22" />
        <rect x="416" y="17" rx="0" ry="0" width="108" height="157" />
        <rect x="415" y="179" rx="0" ry="0" width="110" height="18" />
      </ContentLoader>
    </div>
  )
}

export default SkeletonDetailPage;