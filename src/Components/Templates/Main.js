import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import MainBoxOffice from "../Organisms/Main/MainBoxOffice";
import MainBenefits from "../Organisms/Main/MainBenefits";
import MainGrandOpening from "../Organisms/Main/MainGrandOpening";
import MainCuration from "../Organisms/Main/MainCuration";
import MainLink1 from "../Organisms/Main/MainLink1";
import MainLink2 from "../Organisms/Main/MainLink2";
import MainNotice from "../Organisms/Main/MainNotice";
import MainTheater from "../Organisms/Main/MainTheater";

const Main = () => {
  return (
    <div>
      <Header />
      <MainBoxOffice />
      <MainBenefits />
      <MainLink1 />
      <MainGrandOpening />
      <MainCuration />
      <MainTheater />
      <MainNotice />
      <MainLink2 />
      <Footer />
    </div>
  );
};

export default Main;
