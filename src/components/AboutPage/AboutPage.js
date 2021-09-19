import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import Education from './Education';
import Skills from './Skills';
import FrontendSkills from './FrontendSkills';
import BackendSkills from './BackendSkills';
import OtherSkills from './OtherSkills';

const educations = [
  {"instituteName": "The University of Sheffield", "courseName": "BEng - Aerospace Engineering", "startYear": 2015, "endYear": 2018},
  {"instituteName": "Wembley High Technology College", "courseName": "Mathematics, Physics, Further mathematics and IT", "startYear": 2013, "endYear": 2015},
]

class About extends Component {
  render() {
    return (
      <div className="about-body">
        <Grid className="about-grid">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src="https://i.pinimg.com/originals/fc/4f/72/fc4f726b36792d548f77896de0568a3a.jpg"
                alt="profile" className="profile-pic" />
            </div>

          </Cell>

          <Cell col={8}>

            <div className="statement-container">
              <p>I am a proficient frontend web developer with knowledge and competency in backend.
              I have 3 years of academic experience in Javascript as well as 2 years in python, C# and Matlab.
              Additionally, I have 2 years of self-assigned experience working with the entire frontend pipeline
              which I have demonstrated through independent projects. My passion for development makes me a selfsufficient
              candidate eager to adapt to up-coming technologies and as such, refining my knowledge and skills further through
              professional experience.</p>
            </div>

            <Grid>
              <Cell col={5}>
                <h4>Technical Skills</h4>

                <div className="skills-container">
                  <h5>Front-End Skills</h5>
                  <FrontendSkills />
                </div>
              </Cell>

              <Cell className="institute" col={7}>
                <h4>Education</h4>
                {educations.map((item) => <Education instituteName={item.instituteName} courseName={item.courseName} startYear={item.startYear} endYear={item.endYear} />)}
              </Cell>
            </Grid>

            <Grid>
              <Cell col={5}>
                <h5 style={{ margin: "0 0 10px 0" }}>Back-end Skills</h5>
                <BackendSkills />                
              </Cell>

              <Cell col={5}>
                <h5 style={{ margin: "0 0 10px 0" }}>Other Skills</h5>

                <div className="other-skills">
                  <OtherSkills />
                </div>
              </Cell>

            </Grid>
          </Cell>
        </Grid>
      </div >
    );
  }
}

export default About;
