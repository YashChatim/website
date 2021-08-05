import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

const baseURL = "https://my-react-portfolio-website.herokuapp.com";

const navigationButtons = [
  {"className": "about-button", "href": baseURL + "/aboutme", "class": "about fa fa-user"},
  {"className": "projects-button", "href": baseURL + "/projects", "class": "projects fa fa-laptop"},
  {"className": "contact-button", "href": "mailto:chatim.yash@yahoo.co.uk", "class": "contact fa fa-envelope-o"}
];

const socialLinks = [
  {"href": "https://www.linkedin.com/in/yash-chatim-a2624b174/", "class": "fa fa-linkedin-square"},
  {"href": "https://github.com/YashChatim/", "class": "fa fa-github-square"},
  {"href": "https://www.facebook.com/yash.chatim", "class": "fa fa-facebook-square"},
  {"href": "https://www.instagram.com/yashie_kun/", "class": "fa fa-instagram"}
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

              <div className="social-links"> {/* target - specifies where to open the link, _blank - 	opens link in new window/tab */}
                {socialLinks.map((item) =>
                  <a href={item.href} rel="noopener noreferrer" target="_blank">
                    <i class={item.class} aria-hidden="true"></i>
                  </a>)}
              </div>

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
