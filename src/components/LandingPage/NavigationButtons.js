import React, { Component } from 'react';

const baseURL = "https://my-react-portfolio-website.herokuapp.com";

const navigationButtons = [
    {"className": "about-button", "href": baseURL + "/aboutme", "class": "about fa fa-user"},
    {"className": "projects-button", "href": baseURL + "/projects", "class": "projects fa fa-laptop"},
    {"className": "contact-button", "href": "mailto:chatim.yash@yahoo.co.uk", "class": "contact fa fa-envelope-o"}
];

class NavigationButtons extends Component {
    render() {
        return (
            <div className="navigation-buttons">
                {navigationButtons.map((item) => 
                    <div className={item.className}><a href={item.href}><i class={item.class} aria-hidden="true"></i></a></div>
                )}
            </div>
        );
    }
}

export default NavigationButtons;