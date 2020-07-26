import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import TheaterMap from "../Molecules/TeatherMap";
import "./style/TheaterInfo.scss";
import TheaterInfoSelect from "../Molecules/TheaterInfoSelect";

const TheaterInfo = () => {
  return (
    <>
      <Header />
      <main className="theaterInfoWrap">
        <TheaterInfoSelect />
        <TheaterMap />
      </main>
      <Footer />
    </>
  );
};

export default TheaterInfo;
