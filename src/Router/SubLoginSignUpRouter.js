import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "../Components/Organisms/LoginForm";
import SignUpForm from "../Components/Organisms/SignUpForm";

const SubLoginSignUpRouter = () => {
  return (
    <Switch>
      <Route path="/memberlogin" component={LoginForm} />
      <Route path="/membersignups" component={SignUpForm} />
    </Switch>
  );
};

export default SubLoginSignUpRouter;
