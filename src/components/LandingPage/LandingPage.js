import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import NavigationButtons from './NavigationButtons';
import SocialLinks from './SocialLinks';

class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <Grid className="landing-grid">
                {/* Grid - custom component to use to render the grid, Cell - set the column size */}
                    <Cell col={4} className="mdl-cell--1-col-tablet">
                        <NavigationButtons />
                    </Cell>
                    <Cell col={8} className="mdl-cell--6-col-tablet">
                        <div className="banner-text">
                            <h1>YASH CHATIM</h1>
                            <h2>D E V E L O P E R  /  P R O G R A M M E R</h2>
                            <hr /> {/* hr - thematic break in HTML e.g. topic change */}
                            <SocialLinks />
                            <div className="contact-info">
                                <i className="fa fa-mobile" aria-hidden="true" /> (+44) 7507704668
                                <i className="fa fa-envelope" aria-hidden="true" /> chatim.yash@yahoo.co.uk
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;