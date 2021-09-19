import React, { Component } from 'react';

import Skills from './Skills';

const frontendSkills = [
    {"skillName": "HTML", "source": "https://icon-library.net/images/css3-icon/css3-icon-3.jpg"},
    {"skillName": "CSS", "source": "https://pbs.twimg.com/profile_images/630569055729131520/v0I_dVu5_400x400.jpg"},
    {"skillName": "Javascript", "source": "https://alansimpson.me/assets/images/homejs.jpg"},
    {"skillName": "React", "source": "https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"},
    {"skillName": "SASS", "source": "https://extensions.typo3.org/typo3temp/assets/tx_terfe2/images/adx_scss_1.0.2.png"},
    {"skillName": "jQuery", "source": "http://www.myiconfinder.com/uploads/iconsets/256-256-addfd91beb329ef73f608f8b40cb144c.png"},
    {"skillName": "Bootstrap", "source": "https://equestsolutions.net/wp-content/uploads/2014/08/bootstrap-logo.jpg"},
    {"skillName": "Semantic UI", "source": "https://www.321webmarketing.com/wp-content/themes/321-web-marketing/assets/images/semantic-logo-256.png"},
    {"skillName": "React MDL", "source": "https://i.pinimg.com/originals/e0/33/78/e033782707e204310b524ce384df2b8f.png"},
];

class FrontendSkills extends Component {
    render() {
        return (
            <div className="skills-container">
                <h5>Front-End Skills</h5>
                <div className="frontend-tech">
                    {frontendSkills.map((item) => <Skills source={item.source} skillName={item.skillName} />)}
                </div>
            </div>
        );
    }
}

export default FrontendSkills;