import React, { useEffect } from "react";
import MyMegaBox from "../Templates/MyMegaBox";
import { useDispatch, useSelector } from "react-redux";
import {
  checkLogin,
  GET_RESERVED,
  GET_MEMBER_DETAIL,
  GET_RESERVED_CANCELED,
  GET_TIMELINE_RATING,
  GET_TIMELINE_WATCHED,
  GET_TIMELINE_LIKE,
} from "../../Reducer/userInfoReducer";
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
    if (isLoginCheck) {
      dispatch({ type: GET_MEMBER_DETAIL });
      dispatch({ type: GET_RESERVED });
      dispatch({ type: GET_RESERVED_CANCELED });
      dispatch({ type: GET_TIMELINE_RATING });
      dispatch({ type: GET_TIMELINE_WATCHED });
      dispatch({ type: GET_TIMELINE_LIKE });
    }
  }, [dispatch]);

  return (
    <div>
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
    </div>
  );
};

export default React.memo(MyPage);
