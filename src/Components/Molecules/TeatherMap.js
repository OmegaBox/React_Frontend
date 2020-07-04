import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

const TheaterMap = () => {
  const navermaps = window.naver.maps;

  return (
    <div style={{ width: "458px", height: "372px" }}>
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
          defaultCenter={new navermaps.LatLng(37.5417438, 127.044786)} // 지도 초기 위치
          defaultZoom={18} // 지도 초기 확대 배율
        >
          <Marker
            key={1}
            position={new navermaps.LatLng(37.5417438, 127.044786)}
            animation={2}
            onClick={() => {
              alert("여기는 N서울타워입니다.");
            }}
          />
        </NaverMap>
      </RenderAfterNavermapsLoaded>
    </div>
  );
};

export default TheaterMap;
