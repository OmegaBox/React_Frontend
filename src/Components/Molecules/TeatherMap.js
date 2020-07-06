import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";
import { useSelector } from "react-redux";

import "./style/TheaterMap.scss";

const TheaterMap = () => {
  const selectedOption = useSelector((state) => state.Booking.selectedOption);
  const selectedTheaters = selectedOption.selectedTheaters;

  const lastSelectedTheater = selectedTheaters[selectedTheaters.length - 1];
  const lat = lastSelectedTheater
    ? lastSelectedTheater.location.lat
    : 37.5417438;
  const lng = lastSelectedTheater
    ? lastSelectedTheater.location.lng
    : 127.044786;

  const isSelectCompelte =
    selectedOption.selectedDate && selectedOption.selectedTheaters.length;

  const moveBtnClassName = isSelectCompelte ? "moveBtn" : "moveBtn disabled";

  return (
    <div className="theaterMapContainer">
      <h3 className="mapHeading">상영관 위치</h3>
      <div className="theaterMap">
        <RenderAfterNavermapsLoaded
          ncpClientId={"oesge9qaxj"} // 자신의 네이버 계정에서 발급받은 Client ID
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <NaverMap
            mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
            style={{
              width: "100%", // 네이버지도 가로 길이
              height: "100%", // 네이버지도 세로 길이
            }}
            center={{ lat, lng }} // 지도 초기 위치
            defaultZoom={18} // 지도 초기 확대 배율
          >
            <Marker
              key={1}
              title={
                lastSelectedTheater
                  ? lastSelectedTheater.name + " 메가박스"
                  : ""
              }
              position={{ lat, lng }}
              animation={1}
              onClick={() => {
                alert("여기는 N서울타워입니다.");
              }}
            />
          </NaverMap>
        </RenderAfterNavermapsLoaded>
      </div>
      <div className="moveBtnContainer">
        <button
          className={"moveBtn goMain"}
          disabled={
            !selectedOption.selectedDate &&
            !selectedOption.selectedTheaters.length
          }
        >
          이전
        </button>
        <button className={moveBtnClassName} disabled={!isSelectCompelte}>
          다음
        </button>
      </div>
    </div>
  );
};

export default TheaterMap;
