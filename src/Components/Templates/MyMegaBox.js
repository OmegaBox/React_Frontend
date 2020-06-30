import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import NavSample from "../Organisms/NavSample";
import SubMypageRouter from "../../Router/SubMypageRouter";
import Snb from "../Organisms/MyPage/Snb";

const MyMegaBox = () => {
  return (
    <div>
      <Header />
      <main className="clearfix">
        <Snb />
        <h2 className="a11yHidden">마이페이지</h2>
        <SubMypageRouter />
      </main>
      <Footer />
      <NavSample />
    </div>
  );
};

export default MyMegaBox;
