import React, { useEffect } from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";
import SubMypageRouter from "../../Router/SubMypageRouter";
import Snb from "../Organisms/MyPage/Snb";
import { useSelector, useDispatch } from "react-redux";
import { setOneBtn } from "../../Reducer/modalReducer";
import { checkLogin } from "../../Reducer/userInfoReducer";
import ModalPortal from "../../Modules/ModalPortal";
import PopupNotice from "../Molecules/PopupNotice";
import { useHistory } from "react-router-dom";

const MyMegaBox = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoginCheck = useSelector((state) => state.userInfo.isLogin);

  if (!isLoginCheck) dispatch(setOneBtn());

  useEffect(() => {
    dispatch(checkLogin());
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
      {!isLoginCheck && (
        <ModalPortal>
          <PopupNotice
            text={"로그인이 필요한 페이지 입니다"}
            onEvent={() => {
              history.push("/memberlogin");
            }}
          />
        </ModalPortal>
      )}
    </>
  );
};

export default React.memo(MyMegaBox);
