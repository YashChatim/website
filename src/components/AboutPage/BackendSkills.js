import React, { Component, Fragment } from 'react';

import Skills from './Skills';

import classes from './BackendSkills.module.css';

const backendSkills = [
    {id: 1, "skillName": "Node.js", "source": "https://www.iihglobal.com/wp-content/uploads/2019/06/nodejs-development-256x256.jpg"},
    {id: 2, "skillName": "MongoDB", "source": "https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_mongodb_v2@2x.png"},
    {id: 3, "skillName": "MySQL", "source": "https://i1.wp.com/torbjornzetterlund.com/wp-content/uploads/2013/08/mysql-logo.png?resize=300%2C300&ssl=1"},
    {id: 4, "skillName": "Python", "source": "https://static-s.aa-cdn.net/img/ios/485729872/9b82da58cdf1dd6d75427cf37ac580f7"},
    {id: 5, "skillName": "C#/.NET", "source": "https://static-s.aa-cdn.net/img/ios/486208408/ab391a5c7c63ed46fd14e0af525a3cbb?v=1"},
    {id: 6, "skillName": "WinForms", "source": "https://www.windowsq.com/data/covers/thread/o/0/515.jpg?1607966974"},
    {id: 7, "skillName": "WPF", "source": "https://twitter.com/CsharpCorner/status/855771933639454720/photo/1"},
    {id: 8, "skillName": "Xamarin Forms", "source": "https://pbs.twimg.com/profile_images/471641515756769282/RDXWoY7W_400x400.png"},
    {id: 9, "skillName": "Matlab", "source": "https://i.imgur.com/1J0fRfY.jpg"},
    {id: 10, "skillName": "PHP", "source": "https://laravelnews.imgix.net/images/phplogo-1617378886.jpg?ixlib=php-3.3.1"},
    {id: 11, "skillName": "Magento", "source": "https://d1sjtleuqoc1be.cloudfront.net/wp-content/uploads/2016/07/magento-logo-860x421.jpg"}
];

class BackendSkills extends Component {
    render() {
        return (
            <Fragment>
                <h5 style={{ margin: "0 0 10px 0" }}>Back-end Skills</h5>
                <div className={classes['back-tech']}>
                    {backendSkills.map((item) => <Skills key={item.id} source={item.source} skillName={item.skillName} />)}
                </div>
            </Fragment>
        );
    }
}

export default BackendSkills;