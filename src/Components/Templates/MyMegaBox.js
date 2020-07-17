import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import SubMypageRouter from "../../Router/SubMypageRouter";
import Snb from "../Organisms/MyPage/Snb";

const MyMegaBox = () => {
  return (
    <div>
      <Header />
      <main className={["myMegaBox", "clearfix"].join(" ")}>
        <Snb />
        <h2 className="a11yHidden">마이페이지</h2>
        <SubMypageRouter />
      </main>
      <Footer />
    </div>
  );
};

export default React.memo(MyMegaBox);
