import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../Components/Pages/MainPage";
import BookingPage from "../Components/Pages/BookingPage";
import MyPage from "../Components/Pages/MyPage";
import LoginAndSignUpPage from "../Components/Pages/LoginAndSignUpPage";
import NotFoundPage from "../Components/Pages/NotFoundPage";
import ComponentSample from "../ComponentSample";
import MovieDetailPage from "../Components/Pages/MovieDetailPage";
import WholeMovieLIstPage from "../Components/Pages/WholeMovieListPage";
import SignUpForm from "../Components/Organisms/SignUpForm";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/booking" component={BookingPage} />
      <Route path="/movieDetail" component={MovieDetailPage} />
      <Route path="/wholeMovieList" component={WholeMovieLIstPage} />
      <Route path="/mypage" component={MyPage} />
      {/* <Route path={["/login", "/signup"]} component={LoginAndSignUpPage} /> */}
      <Route path="/signup" component={SignUpForm} />
      <Route path="/stylesample" component={ComponentSample} />
      <Route render={NotFoundPage} />
    </Switch>
  );
};

export default MainRouter;
