import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

import Main from '../main';

import '../../App.css';
import classes from './MainHeader.module.css';

import Pdf from '../../cv.pdf';

class MainHeader extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header className={classes['header-color']}>
                        <Navigation className={classes['header-links']}>
                            <Link className="nav-1" to="/website"><i className="fa fa-home" aria-hidden="true" /></Link>
                            <Link className="nav-3" to="/website/projects">Projects</Link>
                            <a href={Pdf} target="_blank" rel="noopener noreferrer">CV</a>
                            <a href="mailto:chatim.yash@yahoo.co.uk">Email Me</a>
                            {/* Link - allow to navigate around the app by rendering fully accessible anchor tag with proper href */}
                        </Navigation>
                    </Header>
                    <Drawer>
                        {/* Drawer - provide access to destinations in the app */}
                        <Navigation className="navbar">
                            <Link className="nav-1" to="/website">Home</Link>
                            <Link className="nav-3" to="/website/projects">Projects</Link>
                            <a href={Pdf} target="_blank" rel="noopener noreferrer">CV</a>
                            <a href="mailto:chatim.yash@yahoo.co.uk">Email Me</a>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content"></div>
                        <Main />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default MainHeader;