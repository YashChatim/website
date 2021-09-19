import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage";
import AboutMe from "./aboutpage";
import Projects from "./projectspage";

// Routing
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/projects" component={Projects} />
  </Switch> // Switch - renders first child's <Route>/<Redirect> location.
);

export default Main;
