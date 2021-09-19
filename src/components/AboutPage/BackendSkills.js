import React, { Component } from 'react';

import Skills from './Skills';

const backendSkills = [
    {"skillName": "Node.js", "source": "https://www.iihglobal.com/wp-content/uploads/2019/06/nodejs-development-256x256.jpg"},
    {"skillName": "MongoDB", "source": "https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_mongodb_v2@2x.png"},
    {"skillName": "Python", "source": "https://static-s.aa-cdn.net/img/ios/485729872/9b82da58cdf1dd6d75427cf37ac580f7"},
    {"skillName": "C#/.NET", "source": "https://static-s.aa-cdn.net/img/ios/486208408/ab391a5c7c63ed46fd14e0af525a3cbb?v=1"},
    {"skillName": "Matlab", "source": "https://i.imgur.com/1J0fRfY.jpg"},
];

class BackendSkills extends Component {
    render() {
        return (
            <div className="back-tech">
                {backendSkills.map((item) => <Skills source={item.source} skillName={item.skillName} />)}
            </div>
        );
    }
}

export default BackendSkills;