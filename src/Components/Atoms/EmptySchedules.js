import React from "react";
import "./style/EmptySchedules.scss";

const EmptySchedules = () => {
  return (
    <div className="emptySchedules">
      <img
        src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-movie-time.png"
        alt="영화아이콘"
      ></img>
      <span>영화와 극장을 선택하시면</span>
      <span>상영시간표를 비교하여 볼 수 있습니다.</span>
    </div>
  );
};

export default EmptySchedules;
