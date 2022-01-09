import React, { Component, Fragment } from 'react';

import Skills from './Skills';

import classes from './BackendSkills.module.css';

import data from '../../data.json';

class BackendSkills extends Component {
    render() {
        return (
            <Fragment>
                <h5 style={{ margin: "0 0 10px 0" }}>Back-end Skills</h5>
                <div className={classes['back-tech']}>
                    {data.pages.about.backendSkills.map((item) => <Skills key={item.id} source={item.source} skillName={item.skillName} />)}
                </div>
            </Fragment>
        );
    }
}

export default BackendSkills;