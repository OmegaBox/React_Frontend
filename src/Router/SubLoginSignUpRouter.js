import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "../Components/Organisms/LoginForm";
import SignUpForm from "../Components/Organisms/SignUpForm";

const SubLoginSignUpRouter = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignUpForm} />
    </Switch>
  );
};

export default SubLoginSignUpRouter;
