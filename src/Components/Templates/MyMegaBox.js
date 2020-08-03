import React, { useEffect } from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import SubMypageRouter from "../../Router/SubMypageRouter";
import Snb from "../Organisms/MyPage/Snb";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../Reducer/userInfoReducer";
import { useHistory } from "react-router-dom";

const MyMegaBox = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const goLogin = () => {
    history.push("/memberlogin");
  };

  useEffect(() => {
    console.log("mypage useEffect");
    dispatch(checkLogin(goLogin));
  });

  return (
    <>
      <Header />
      <main className={["myMegaBox", "clearfix"].join(" ")}>
        <Snb />
        <h2 className="a11yHidden">마이페이지</h2>
        <SubMypageRouter />
      </main>
      <Footer />
    </>
  );
};

export default React.memo(MyMegaBox);
