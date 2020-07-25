import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../Components/Pages/MainPage";
import BookingPage from "../Components/Pages/BookingPage";
import MyPage from "../Components/Pages/MyPage";
import EventPage from "../Components/Pages/EventPage";
import NotFoundPage from "../Components/Pages/NotFoundPage";
import ComponentSample from "../ComponentSample";
import MovieDetailPage from "../Components/Pages/MovieDetailPage";
import WholeMovieListPage from "../Components/Pages/WholeMovieListPage";
import SignUpForm from "../Components/Organisms/SignUpForm";
import LoginForm from "../Components/Organisms/LoginForm";
import TheaterInfoPage from "../Components/Pages/TheaterInfoPage";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/booking" component={BookingPage} />
      <Route path="/detail/:idx" component={MovieDetailPage} />
      <Route path="/listMovies" component={WholeMovieListPage} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/event" component={EventPage} />
      <Route path="/membersignup" component={SignUpForm} />
      <Route path="/memberlogin" component={LoginForm} />
      <Route path="/stylesample" component={ComponentSample} />
      <Route path="/theaters" component={TheaterInfoPage} />
      <Route render={NotFoundPage} />
    </Switch>
  );
};

export default MainRouter;
