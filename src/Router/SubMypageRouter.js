import React from "react";
import { Switch, Route } from "react-router-dom";
import MypageDashBoard from "../Components/Organisms/MyPage/MypageDashBoard";
import BookingHistoryWrap from "../Components/Organisms/MyPage/BookingHistoryWrap";
import ConfirmPassword from "../Components/Organisms/MyPage/ConfirmPassword";
import EditOption from "../Components/Organisms/MyPage/EditOption";
import EditPassword from "../Components/Organisms/MyPage/EditPassword";
import EditUserInfo from "../Components/Organisms/MyPage/EditUserInfo";
import MyMovieStory from "../Components/Organisms/MyPage/MyMovieStory";
import Point from "../Components/Organisms/MyPage/Point";

const BookingRouter = () => {
  return (
    <Switch>
      <Route exact path="/mypage" component={MypageDashBoard} />
      <Route path="/mypage/bookinghistory" component={BookingHistoryWrap} />
      <Route path="/mypage/confirmpassword" component={ConfirmPassword} />
      <Route path="/mypage/editoption" component={EditOption} />
      <Route path="/mypage/editpassword" component={EditPassword} />
      <Route path="/mypage/edituserinfo" component={EditUserInfo} />
      <Route path="/mypage/mymoviestory" component={MyMovieStory} />
      <Route path="/mypage/point" component={Point} />
    </Switch>
  );
};

export default BookingRouter;
