import React, { Component } from "react";

class Skill extends Component {
    render() {
        return (
            <div className="tech-row">
                <img src={this.props.source} alt={this.props.skillName}></img>
                <p>{this.props.skillName}</p>
            </div>
        )
    }
}

export default Skill;