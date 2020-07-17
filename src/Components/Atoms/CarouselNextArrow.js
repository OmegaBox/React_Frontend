import React from "react";

const CarouselNextArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

export { CarouselNextArrow };
