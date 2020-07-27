import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import TheaterMap from "../Molecules/TeatherMap";
import "./style/TheaterInfo.scss";
import TheaterInfoSelect from "../Molecules/TheaterInfoSelect";
import TheaterInfoTitle from "../Atoms/TheaterInfoTitle";

const TheaterInfo = () => {
  return (
    <>
      <Header />
      <main className="theaterInfoWrap">
        <TheaterInfoTitle />
        <div className="theaterInfoContents">
          <TheaterInfoSelect />
          <TheaterMap />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TheaterInfo;
