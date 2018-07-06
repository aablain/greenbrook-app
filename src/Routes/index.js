import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "../Pages/About";
import FloorPlans from "../Pages/FloorPlans";
import Gallery from "../Pages/Gallery";
import HomesAvailable from "../Pages/HomesAvailable";
import Home from "../Pages/Home";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/floorplans" component={FloorPlans} />
      <Route path="/homesavailable" component={HomesAvailable} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);
