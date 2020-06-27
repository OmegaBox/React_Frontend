import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import SubMypageRouter from "../../Router/SubMypageRouter";
const MyMegaBox = () => {
  return (
    <div>
      <Header />
      <SubMypageRouter />
      <Footer />
    </div>
  );
};

export default MyMegaBox;
