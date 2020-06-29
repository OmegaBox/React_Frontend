import React from "react";
import './MainTheater.scss';

const MainTheater = () => {
  return (
    <div>
      <div className="mainTheaterLayout">메가박스 안내</div>
      <ul className="theaterMenu">
        <li className="theaterBoutique"></li>
        <li className="theaterMX"></li>
        <li className="theaterComfort"></li>
        <li className="theaterKids"></li>
        <li className="theaterFirstclub"></li>
      </ul>
    </div>
  );
};

export default MainTheater;
