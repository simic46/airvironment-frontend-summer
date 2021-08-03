import React from "react";
import { Route, Switch } from "react-router-dom";
import { AllData, Averages, Home } from "./pages";

const Routes = () => (
  <div className="container">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/averages" exact component={Averages} />
      <Route path="/all-data" exact component={AllData} />
    </Switch>
  </div>
);
export default Routes;
