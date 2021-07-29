import React from "react";
import { Route, Switch } from "react-router-dom";
import { Averages, Home } from "./pages";

const Routes = () => (
  <div className="container">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/averages" exact component={Averages} />
    </Switch>
  </div>
);
export default Routes;
