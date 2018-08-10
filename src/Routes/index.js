import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "../Pages/About";
import FloorPlans from "../Pages/FloorPlans";
import Gallery from "../Pages/Gallery";
import HomesAvailable from "../Pages/HomesAvailable";
import Home from "../Pages/Home";
import NewHome from "../Pages/NewHome";
import NotFoundPage from "../Pages/NotFoundPage";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/floorplans" exact component={FloorPlans} />
      <Route path="/homesavailable/:key" exact component={HomesAvailable} />
      <Route path="/homesavailable" exact component={HomesAvailable} />
      <Route path="/gallery" exact component={Gallery} />
      <Route path="/about" exact component={About} />
      <Route path="/newhome" exact component={NewHome} />
      <Route path="/" exact component={Home} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
