import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Skill from "./skill";


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
                  <div className="frontend-tech">
                    <Skill source="https://icon-library.net/images/css3-icon/css3-icon-3.jpg"
                      skillName="HTML" />

                    <Skill source="https://pbs.twimg.com/profile_images/630569055729131520/v0I_dVu5_400x400.jpg"
                      skillName="CSS" />

                    <Skill source="https://alansimpson.me/assets/images/homejs.jpg"
                      skillName="Javascript" />

                    <Skill source="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"
                      skillName="React" />

                    <Skill source="https://extensions.typo3.org/typo3temp/assets/tx_terfe2/images/adx_scss_1.0.2.png"
                      skillName="SASS" />

                    <Skill source="http://www.myiconfinder.com/uploads/iconsets/256-256-addfd91beb329ef73f608f8b40cb144c.png"
                      skillName="jQuery" />

                    <Skill source="https://equestsolutions.net/wp-content/uploads/2014/08/bootstrap-logo.jpg"
                      skillName="Bootstrap" />

                    <Skill source="https://www.321webmarketing.com/wp-content/themes/321-web-marketing/assets/images/semantic-logo-256.png"
                      skillName="Semantic UI" />

                    <Skill source="https://i.pinimg.com/originals/e0/33/78/e033782707e204310b524ce384df2b8f.png"
                      skillName="React MDL" />
                  </div>
                </div>
              </Cell>

              <Cell col={7}>
                <h4>Education</h4>
                <Education instituteName="The University of Sheffield"
                  courseName="BEng - Aerospace Engineering"
                  startYear={2015} endYear={2018} />

                <Education instituteName=" Wembley High Technology College (WHTC)"
                  courseName="Mathematics, Physics, Further mathematics and IT"
                  startYear={2013} endYear={2015} />

              </Cell>
            </Grid>

            <Grid>
              <Cell col={5}>
                <h5 style={{ margin: "0 0 10px 0" }}>Back-end Skills</h5>

                <div className="back-tech">
                  <Skill source="https://www.iihglobal.com/wp-content/uploads/2019/06/nodejs-development-256x256.jpg"
                    skillName="Node.js" />

                  <Skill source="https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_mongodb_v2@2x.png"
                    skillName="MongoDB" />

                  <Skill source="https://static-s.aa-cdn.net/img/ios/485729872/9b82da58cdf1dd6d75427cf37ac580f7"
                    skillName="Python" />

                  <Skill source="https://static-s.aa-cdn.net/img/ios/486208408/ab391a5c7c63ed46fd14e0af525a3cbb?v=1"
                    skillName="C#/.NET" />

                  <Skill source="https://i.imgur.com/1J0fRfY.jpg"
                    skillName="Matlab" />
                </div>
              </Cell>

              <Cell col={7}>
                <h5 style={{ margin: "0 0 10px 0" }}>Other Skills</h5>

                <div className="other-skills">
                  <div className="other-tech">
                    <Skill source="data:image/png;base64,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"
                      skillName="Github" />

                    <Skill source="https://s3.amazonaws.com/hackdesign/tools/app_images/000/000/037/icon_small/heroku-logo-6e6c2ed8be2ad02ac96455d53e4e7e43.png?1385326105"
                      skillName="Heroku" />

                    <Skill source="https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1439425175/easvowgtoy62fgnpbz6p.png"
                      skillName="Cloud9" />

                    <Skill source="https://cdn.iconscout.com/icon/free/png-256/visual-studio-569577.png"
                      skillName="Visual Studio" />

                    <Skill source="https://code.visualstudio.com/assets/favicon.ico"
                      skillName="VS Code" />
                  </div>
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
