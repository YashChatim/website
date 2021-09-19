import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div className="tech-row">
                <img src={this.props.source} alt={this.props.skillsName}></img>
                <p>{this.props.skillName}</p>
            </div>
        )
    }
}

export default Skills;