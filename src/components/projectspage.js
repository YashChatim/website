import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Button } from "react-mdl";

import Demo from "./demo";

import data from '../data.json';

class Projects extends Component {

  // React constructors - initialses local state by assigning object to this.state & bind event handler methods to an instance.
  constructor(props) {
    super(props); // super(props) - to access this.props in constructor
    this.state = { activeTab: 0 };
  }


  toggleCategories() {
    /* 0, 1, 2, 3,... - are index of the tabs
     Card - contain content and actions about single subject
     shadow - defines the shadow depth
     CardTitle - set the title for the card
     CardText - area to write the card description
     CardActions - component listing actions inside a Card
     Button - button for actions in forms/cards etc. 
   */

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-container">
          {data.pages.projects.frontendProjects.map((item) => 
            <Demo key={item.id} gridClassName={item.gridClassName} source={item.source} title={item.title} description={item.description} 
            gitURL={item.gitURL} gitButtonText="GitHub" demoURL={item.demoURL} demoButtonText="Live Demo" />)}
        </div>
      )
    }

    else if (this.state.activeTab === 1) {
      return (
        <div>
          {data.pages.projects.backendProjects.map((item) => 
            <Demo key={item.id} gridClassName={item.gridClassName} source={item.source} title={item.title} description={item.description} 
            gitURL={item.gitURL} gitButtonText="GitHub" demoURL={item.demoURL} demoButtonText="Live Demo" />)}
        </div>
      )
    }

    else if (this.state.activeTab === 2) {
      return (
        <div>
          <Demo gridClassName="yelpcamp-panel"
            source="https://i.pinimg.com/originals/dd/9c/77/dd9c77ec3f6065003436a2fa5933b9dd.jpg"
            title="YELP CAMP"
            description="A complete app that uses all the frontend, backend and other technical skills."
            gitURL="https://github.com/YashChatim/yelpCamp_v12-Deployed" gitButtonText="GitHub"
            demoURL="https://my-yelp-camp-application.herokuapp.com/" demoButtonText="Live Demo" />
        </div>
      )
    }

    else if (this.state.activeTab === 3) {
      return (
        <div className="projects-container">
          <div className="projects-grid csharp">
            <Grid>
              {data.pages.projects.csharpProjects.map((item) => 
                <Cell col={4}>
                  <Grid key={item.id} className={item.className}>
                    <img src={item.src} alt={item.alt} className="image-pic" />
                    <h3>{item.text1} <br></br>{item.text2}</h3>
                    <Button href={item.href} target="_blank" colored>GitHub</Button>
                  </Grid>
                </Cell>)}

              <Cell col={4}>
                <Grid className="bowlingstrike-panel">
                  <img src="https://i.pinimg.com/originals/c9/61/29/c96129825de96133a2f1a952987aa680.jpg"
                    alt="Bowling strike" className="image-pic" />
                  <h3>BOWLING <br></br>STRIKE</h3>
                </Grid>
              </Cell>
            </Grid>
          </div>
          <h4><a href="https://youtu.be/KZXPCGJRrpU">Click here to watch a reel of these games</a></h4>
        </div >
      )
    }
  }



  render() {
    return (
      <div className="category-tabs">
        {/* Tabs - set and allow navigation between groups of related content, onChange - callback fired when value changes, ripple - gives a wave effect when clicked on individual tab */}
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Front-end</Tab>
          <Tab>Back-end</Tab>
          <Tab>Full-stack</Tab>
          <Tab>C# (Unity)</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
