import React, { Component } from 'react';

import Skills from './Skills';

import classes from './FrontendSkills.module.css';

import data from '../../data.json';

class FrontendSkills extends Component {
    render() {
        return (
            <div className={classes['skills-container']}>
                <h5>Front-End Skills</h5>
                <div className={classes['frontend-tech']}>
                    {data.pages.about.frontendSkills.map((item) => <Skills key={item.id} source={item.source} skillName={item.skillName} />)}
                </div>
            </div>
        );
    }
}

export default FrontendSkills;