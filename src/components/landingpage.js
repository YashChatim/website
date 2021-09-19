import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import SocialLinks from './SocialLinks/SocialLinks';

const baseURL = "https://my-react-portfolio-website.herokuapp.com";

const navigationButtons = [
  {"className": "about-button", "href": baseURL + "/aboutme", "class": "about fa fa-user"},
  {"className": "projects-button", "href": baseURL + "/projects", "class": "projects fa fa-laptop"},
  {"className": "contact-button", "href": "mailto:chatim.yash@yahoo.co.uk", "class": "contact fa fa-envelope-o"}
];

class Landing extends Component {
  render() {
    return (
      <div className="landing-page">
        <Grid className="landing-grid">
          {/* Grid - custom component to use to render the grid, Cell - set the column size */}
          <Cell col={4} className="mdl-cell--1-col-tablet">
            <div className="navigation-buttons">
              {navigationButtons.map((item) => 
                <div className={item.className}><a href={item.href}><i class={item.class} aria-hidden="true"></i></a></div>)}
            </div>
          </Cell>
          <Cell col={8} className="mdl-cell--6-col-tablet">
            <div className="banner-text">
              <h1>YASH CHATIM</h1>
              <h2>D E V E L O P E R  /  P R O G R A M M E R</h2>

              <hr /> {/* hr - thematic break in HTML e.g. topic change */}

              <SocialLinks />

              <div className="contact-info">
                <i className="fa fa-mobile" aria-hidden="true" /> (+44) 7507704668
          <i className="fa fa-envelope" aria-hidden="true" /> chatim.yash@yahoo.co.uk
        </div>

            </div>
          </Cell>
        </Grid>
      </div >

    );
  }
}

export default Landing;
