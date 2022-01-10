import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage';
import AboutMe from './AboutPage/AboutPage';
import Projects from './projectspage';

// Routing
const Main = () => (
  <Switch>
    <Route exact path="/website" component={LandingPage} />
    <Route path="/website/aboutme" component={AboutMe} />
    <Route path="/website/projects" component={Projects} />
  </Switch> // Switch - renders first child's <Route>/<Redirect> location.
);

export default Main;
