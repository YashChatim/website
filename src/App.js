import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/main";
import Pdf from "./cv.pdf"

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header-color" title={<Link to="/">
            <a rel="noopener noreferrer" target="_blank">
              <i className="fa fa-home" aria-hidden="true" />
            </a></Link>}>

            <div className="resume-container">
              <a href={Pdf} target="_blank" rel="noopener noreferrer">View CV</a>
              <a href="mailto:chatim.yash@yahoo.co.uk">Contact</a>
            </div>
          </Header>
          <Drawer>
            {/* Drawer - provide access to destinations in the app */}
            <Navigation className="navbar">
              <Link className="nav-1" to="/aboutme">About</Link>
              <Link className="nav-2" to="/projects">Projects</Link>
              {/* Link - allow to navigate around the app by rendering fully accessible anchor tag with proper href */}
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
