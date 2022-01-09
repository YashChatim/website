import React, { Component } from 'react';

import Skills from './Skills';

import classes from './FrontendSkills.module.css';

const frontendSkills = [
    {id: 1, "skillName": "HTML", "source": "https://icon-library.net/images/css3-icon/css3-icon-3.jpg"},
    {id: 2, "skillName": "CSS", "source": "https://pbs.twimg.com/profile_images/630569055729131520/v0I_dVu5_400x400.jpg"},
    {id: 3, "skillName": "Javascript", "source": "https://alansimpson.me/assets/images/homejs.jpg"},
    {id: 4, "skillName": "React", "source": "https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"},
    {id: 5, "skillName": "Vue", "source": "https://miro.medium.com/max/1400/1*OrjCKmou1jT4It5so5gvOA.jpeg"},
    {id: 6, "skillName": "SCSS", "source": "https://extensions.typo3.org/typo3temp/assets/tx_terfe2/images/adx_scss_1.0.2.png"},
    {id: 7, "skillName": "jQuery", "source": "http://www.myiconfinder.com/uploads/iconsets/256-256-addfd91beb329ef73f608f8b40cb144c.png"},
    {id: 8, "skillName": "Bootstrap", "source": "https://equestsolutions.net/wp-content/uploads/2014/08/bootstrap-logo.jpg"},
    {id: 9, "skillName": "Semantic UI", "source": "https://www.321webmarketing.com/wp-content/themes/321-web-marketing/assets/images/semantic-logo-256.png"},
    {id: 10, "skillName": "React MDL", "source": "https://i.pinimg.com/originals/e0/33/78/e033782707e204310b524ce384df2b8f.png"}
];

class FrontendSkills extends Component {
    render() {
        return (
            <div className={classes['skills-container']}>
                <h5>Front-End Skills</h5>
                <div className={classes['frontend-tech']}>
                    {frontendSkills.map((item) => <Skills key={item.id} source={item.source} skillName={item.skillName} />)}
                </div>
            </div>
        );
    }
}

export default FrontendSkills;