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
                    <Header className={classes['header-color']} title={<Link to="/website">
                        <a rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-home" aria-hidden="true" />
                        </a></Link>}>

                        <div className={classes['header-links']}>
                            <a href="/website/aboutme">About</a>
                            <a href="/website/projects">Projects</a>
                            <a href="mailto:chatim.yash@yahoo.co.uk">Contact</a>
                            <a href={Pdf} target="_blank" rel="noopener noreferrer">View CV</a>
                        </div>
                    </Header>
                    <Drawer>
                        {/* Drawer - provide access to destinations in the app */}
                        <Navigation className="navbar">
                            <Link className="nav-1" to="/website">Home</Link>
                            <Link className="nav-2" to="/website/aboutme">About</Link>
                            <Link className="nav-3" to="/website/projects">Projects</Link>
                            <a href="mailto:chatim.yash@yahoo.co.uk">Contact</a>
                            <a href={Pdf} target="_blank" rel="noopener noreferrer">View CV</a>
                            {/* Link - allow to navigate around the app by rendering fully accessible anchor tag with proper href */}
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