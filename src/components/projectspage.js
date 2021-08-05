import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Button } from "react-mdl";
import Demo from "./demo";

const frontendProjects = [
  {
    "gridClassName": "colorgame-panel", 
    "source": "https://i.pinimg.com/originals/49/82/d9/4982d9cdf12076d44b968712ef188db1.jpg",
    "title": "COLOUR GAME",
    "description": "A web-based game focusing on HTML5, CSS3, Javascript, DOM manipulation and event handling.",
    "gitURL": "https://github.com/YashChatim/colorGame",
    "demoURL": "https://yashchatim.github.io/colorGame/"
  },
  {
    "gridClassName": "todolist-panel", 
    "source": "https://i.pinimg.com/originals/ec/af/59/ecaf5985044f1a38cc17b82efec8c348.jpg",
    "title": "TO-DO LIST APP",
    "description": "A jQuery based app heavily focus on CSS, animation and effects, bootstrap, and is also responsive.",
    "gitURL": "https://github.com/YashChatim/toDoList",
    "demoURL": "https://yashchatim.github.io/toDoList/"
  }
];

const backendProjects = [
  {
    "gridClassName": "movieapp-panel", 
    "source": "https://i.pinimg.com/originals/74/34/c8/7434c86da18e03235b1f7a7cb0652fa2.jpg",
    "title": "MOVIE APP",
    "description": "A node.js and express based app that uses an API which contains movie data.",
    "gitURL": "https://github.com/YashChatim/movie_app",
    "demoURL": "https://ymdb-movie-app.herokuapp.com/"
  },
  {
    "gridClassName": "restblogapp-panel", 
    "source": "https://i.pinimg.com/originals/7f/df/07/7fdf07740dfad7bfc430ae61301b9c18.jpg",
    "title": "REST BLOG APP",
    "description": "A node.js and express based app focusing on RESTful routing, and semantic UI.",
    "gitURL": "https://github.com/YashChatim/RESTBlogApp",
    "demoURL": "https://warm-meadow-52947.herokuapp.com/blogs"
  }
];

const csharpProjects = [
  {
    "className": "laserdefender-panel",
    "src": "https://i.pinimg.com/originals/3c/a8/8f/3ca88ff7f92eab510d2d9c13ecd6f799.jpg",
    "alt": "Laser defender",
    "text1": "LASER",
    "text2": "DEFENDER",
    "href": "https://github.com/YashChatim/Laser_Defender",

  },
  {
    "className": "blockbreaker-panel",
    "src": "https://i.pinimg.com/originals/0e/f6/2e/0ef62ec445336f3a31cf990253ab860f.jpg",
    "alt": "Bowling strike",
    "text1": "BLOCK",
    "text2": "BREAKER",
    "href": "https://github.com/YashChatim/Block_Breaker"
  }
];

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
          {frontendProjects.map((item) => 
            <Demo gridClassName={item.gridClassName} source={item.source} title={item.title} description={item.description} 
            gitURL={item.gitURL} gitButtonText="GitHub" demoURL={item.demoURL} demoButtonText="Live Demo" />)}
        </div>
      )
    }

    else if (this.state.activeTab === 1) {
      return (
        <div>
          {backendProjects.map((item) => 
            <Demo gridClassName={item.gridClassName} source={item.source} title={item.title} description={item.description} 
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
            demoURL="https://blueberry-pudding-25899.herokuapp.com/" demoButtonText="Live Demo" />
        </div>
      )
    }

    else if (this.state.activeTab === 3) {
      return (
        <div className="projects-container">
          <div className="projects-grid csharp">
            <Grid>
              {csharpProjects.map((item) => 
                <Cell col={4}>
                  <Grid className={item.className}>
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
