import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import RecommendEvent from "../Organisms/Event/RecommendEvent";
import MegaPick from "../Organisms/Event/MegaPick";
import MovieEvent from "../Organisms/Event/MovieEvent";
import TheaterEvent from "../Organisms/Event/TheaterEvent";
import DiscountEvent from "../Organisms/Event/DiscountEvent";
import PremiereEvent from "../Organisms/Event/PremiereEvent";
import "../Organisms/Event/style/EventCommon.scss";
const Event = () => {
  return (
    <div>
      <Header />
      <main className="event">
        <h2 className="pageTitle">진행중인 이벤트</h2>
        <RecommendEvent />
        <MegaPick />
        <MovieEvent />
        <TheaterEvent />
        <DiscountEvent />
        <PremiereEvent />
      </main>
      <Footer />
    </div>
  );
};

export default Event;
