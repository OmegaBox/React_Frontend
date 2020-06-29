import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import MainBoxOffice from "../Organisms/Main/MainBoxOffice";
import MainBenefits from "../Organisms/Main/MainBenefits";
import MainGrandOpening from "../Organisms/Main/MainGrandOpening";
import MainCuration from "../Organisms/Main/MainCuration";
import MainLink from "../Organisms/Main/MainLink";
import MainNotice from "../Organisms/Main/MainNotice";
import MainTheater from "../Organisms/Main/MainTheater";
import NavSample from "../Organisms/NavSample";

const Main = () => {
  return (
    <div>
      <Header />
      <MainBoxOffice />
      <MainBenefits />
      <MainLink />
      <MainGrandOpening />
      <MainCuration />
      <MainTheater />
      <MainNotice />
      <Footer />
      <NavSample />
    </div>
  );
};

export default Main;
