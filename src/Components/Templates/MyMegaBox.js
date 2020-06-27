import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import NavSample from "../Organisms/NavSample";
import SubMypageRouter from "../../Router/SubMypageRouter";

const MyMegaBox = () => {
  return (
    <div>
      <Header />
      <SubMypageRouter />
      <Footer />
      <NavSample />
    </div>
  );
};

export default MyMegaBox;
