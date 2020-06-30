import React from "react";

const BookingSeatReset = () => {
  return (
    <button
      className={["btn", "xSmall", "white", "fill", "bookingSeatReset"].join(
        " "
      )}
      aria-label="초기화 버튼"
    >
      <span>초기화</span>
    </button>
  );
};

export default BookingSeatReset;
