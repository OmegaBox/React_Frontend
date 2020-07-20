import React from "react";
import "./style/MainTheater.scss";

const MainTheater = () => {
  return (
    <>
      <div className="mainTheaterLayout">메가박스 안내</div>
      <ul className="theaterMenu">
        <li className="theaterBoutique"></li>
        <li className="theaterMX"></li>
        <li className="theaterComfort"></li>
        <li className="theaterKids"></li>
        <li className="theaterFirstclub"></li>
      </ul>
    </>
  );
};
export default MainTheater;
