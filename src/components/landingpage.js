import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div className="landing-page">
        <Grid className="landing-grid">
          {/* Grid - custom component to use to render the grid, Cell - set the column size */}
          <Cell col={4}>
            <div className="navigation-buttons">
              <div className="about-button">
                <a href="https://dry-thicket-44569.herokuapp.com/aboutme">
                  <i class="about fa fa-user" aria-hidden="true"></i>
                </a>
              </div>

              <div className="projects-button">
                <a href="https://dry-thicket-44569.herokuapp.com/projects">
                  <i class="projects fa fa-laptop" aria-hidden="true"></i>
                </a>
              </div>

              <div className="contact-button">
                <a href="mailto:chatim.yash@yahoo.co.uk">
                  <i class="contact fa fa-envelope-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
          <Cell col={8}>
            <div className="banner-text">
              <h1>YASH CHATIM</h1>
              <h2>D E V E L O P E R  /  P R O G R A M M E R</h2>

              <hr /> {/* hr - thematic break in HTML e.g. topic change */}

              <div className="social-links"> {/* target - specifies where to open the link, _blank - 	opens link in new window/tab */}
                <a href="https://www.linkedin.com/in/yash-chatim-a2624b174/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                <a href="https://github.com/YashChatim/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                <a href="https://www.facebook.com/yash.chatim" rel="noopener noreferrer" target="_blank">
                  <i class="fa fa-facebook-square" aria-hidden="true"></i>
                </a>

                <a href="https://www.instagram.com/yashie_kun/" rel="noopener noreferrer" target="_blank">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
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
