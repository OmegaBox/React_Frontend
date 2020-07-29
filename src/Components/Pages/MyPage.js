import React, { useEffect } from "react";
import MyMegaBox from "../Templates/MyMegaBox";
import { useDispatch } from "react-redux";
import { getMemberProfile } from "../../Reducer/userInfoReducer";
import "./style/mypage.scss";

const MyPage = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getMemberProfile());
  }, [dispatch]);

  return <MyMegaBox history={history} />;
};

export default React.memo(MyPage);
