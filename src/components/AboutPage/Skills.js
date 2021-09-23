import React, { Component } from 'react';

import classes from './Skills.module.css';

class Skills extends Component {
    render() {
        return (
            <div className={classes['tech-row']}>
                <img src={this.props.source} alt={this.props.skillsName}></img>
                <p>{this.props.skillName}</p>
            </div>
        )
    }
}

export default Skills;