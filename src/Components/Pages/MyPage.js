import React, { useEffect } from "react";
import MyMegaBox from "../Templates/MyMegaBox";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin, getMemberProfile } from "../../Reducer/userInfoReducer";
import { setOneBtn } from "../../Reducer/modalReducer";
import ModalPortal from "../../Modules/ModalPortal";
import PopupNotice from "../Molecules/PopupNotice";
import "./style/mypage.scss";

const MyPage = ({ history }) => {
  const dispatch = useDispatch();
  const isLoginCheck = useSelector((state) => state.userInfo.isLogin);

  if (!isLoginCheck) dispatch(setOneBtn());
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(checkLogin());
    dispatch(getMemberProfile());
  }, [dispatch]);

  return (
    <>
      <MyMegaBox history={history} />
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

export default React.memo(MyPage);
