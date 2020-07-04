import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../Components/Pages/MainPage";
import BookingPage from "../Components/Pages/BookingPage";
import MyPage from "../Components/Pages/MyPage";
import LoginAndSignUpPage from "../Components/Pages/LoginAndSignUpPage";
import NotFoundPage from "../Components/Pages/NotFoundPage";
import ComponentSample from "../ComponentSample";
import MovieDetailPage from "../Components/Pages/MovieDetailPage";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/booking" component={BookingPage} />
      <Route path="/movieDetail" component={MovieDetailPage} />
      <Route path="/mypage" component={MyPage} />
      <Route path={["/login", "/signup"]} component={LoginAndSignUpPage} />
      <Route path="/stylesample" component={ComponentSample} />
      <Route render={NotFoundPage} />
    </Switch>
  );
};

export default MainRouter;
