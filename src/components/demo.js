import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";

class Demo extends Component {
    render() {
        return (
            <div className="projects-grid">
                <Grid className={this.props.gridClassName}>
                    <Cell col={6}>
                        <img src={this.props.source} alt={this.props.title} className="image-pic"></img>
                    </Cell>

                    <Cell col={6}>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p>
                        <Button href={this.props.gitURL} target="_blank" colored>{this.props.gitButtonText}</Button>
                        <Button href={this.props.demoURL} target="_blank" colored>{this.props.demoButtonText}</Button>
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Demo;