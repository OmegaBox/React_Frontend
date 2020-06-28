import React from "react";
import { Switch, Route } from "react-router-dom";
import MypageDashBoard from "../Components/Organisms/MyPage/MypageDashBoard";
import BookingHistoryWrap from "../Components/Organisms/MyPage/BookingHistoryWrap";

const BookingRouter = () => {
  return (
    <Switch>
      <Route exact path="/mypage" component={MypageDashBoard} />
      <Route path="/mypage/bookinghistory" component={BookingHistoryWrap} />
    </Switch>
  );
};

export default BookingRouter;
