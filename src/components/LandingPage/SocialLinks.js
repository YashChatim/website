import React, { Component, Fragment } from 'react';

import classes from './SocialLinks.module.css';

import data from '../../data.json';

class SocialLinks extends Component {
    render() {
        return (
            <Fragment>
                <div className={classes['social-links']}> {/* target - specifies where to open the link, _blank - 	opens link in new window/tab */}
                    {data.pages.landing.socialLinks.map((item) =>
                        <a key={item.id} href={item.href} rel="noopener noreferrer" target="_blank">
                            <i className={item.class} aria-hidden="true"></i>
                        </a>
                    )}
                </div>
                <div className={classes['contact-info']}>
                    <i className="fa fa-mobile" aria-hidden="true" /> (+91) 9284493944
                    <i className="fa fa-envelope" aria-hidden="true" /> chatim.yash@yahoo.co.uk
                </div>
            </Fragment>
        );
    }
}

export default SocialLinks;