import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import TheaterMap from "../Molecules/TeatherMap";
import "./style/TheaterInfo.scss";

const TheaterInfo = () => {
  return (
    <>
      <Header />
      <main className="theaterInfoWrap">
        <TheaterMap />
      </main>
      <Footer />
    </>
  );
};

export default TheaterInfo;
