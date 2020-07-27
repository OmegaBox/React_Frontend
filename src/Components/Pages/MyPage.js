import React, { useEffect } from "react";
import MyMegaBox from "../Templates/MyMegaBox";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin, getMemberProfile } from "../../Reducer/userInfoReducer";
import { openModal } from "../../Reducer/modalReducer";
import "./style/mypage.scss";

const MyPage = ({ history }) => {
  const dispatch = useDispatch();
  const isLoginCheck = useSelector((state) => state.userInfo.isLogin);

  const goLogin = () => {
    history.push("/memberlogin");
  };

  if (!isLoginCheck)
    dispatch(
      openModal("로그인이 필요한 페이지 입니다", goLogin, {
        oneBtn: true,
      })
    );
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(checkLogin());
    dispatch(getMemberProfile());
  }, [dispatch]);

  return <MyMegaBox history={history} />;
};

export default React.memo(MyPage);
