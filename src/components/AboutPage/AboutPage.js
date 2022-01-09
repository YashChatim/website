import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import Education from './Education';
import FrontendSkills from './FrontendSkills';
import BackendSkills from './BackendSkills';
import OtherSkills from './OtherSkills';

import classes from './AboutPage.module.css';

import data from '../../data.json';

class About extends Component {
    render() {
        return (
            <div className={classes['about-body']}>
                <Grid className={classes['about-grid']}>
                    <Cell col={4}>
                        <div style={{ textAlign: "center" }}>
                            <img src="https://i.pinimg.com/originals/fc/4f/72/fc4f726b36792d548f77896de0568a3a.jpg"
                                alt="profile" className={classes['profile-pic']} />
                        </div>
                    </Cell>

                    <Cell col={8}>
                        <div className={classes['statement-container']}>
                            <p>I am a proficient frontend web developer with knowledge and competency in backend.
                            I have 3 years of academic experience in Javascript as well as 2 years in python, C# and Matlab.
                            Additionally, I have 2 years of self-assigned experience working with the entire frontend pipeline
                            which I have demonstrated through independent projects. My passion for development makes me a selfsufficient
                            candidate eager to adapt to up-coming technologies and as such, refining my knowledge and skills further through
                            professional experience.</p>
                        </div>
                        <Grid>
                            <Cell className="institute" col={7}>
                                <h4>Education</h4>
                                {data.pages.about.educations.map((item) => <Education key={item.id} instituteName={item.instituteName} courseName={item.courseName} startYear={item.startYear} endYear={item.endYear} />)}
                            </Cell>
                            <Cell col={5}>
                                <h4>Technical Skills</h4>
                                <FrontendSkills />
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={5}>
                                <BackendSkills />                
                            </Cell>

                            <Cell col={5}>
                                <OtherSkills />
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default About;