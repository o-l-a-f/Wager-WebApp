import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./screens/Landing";

const CurrentScreen = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
  );
};

export default CurrentScreen;
