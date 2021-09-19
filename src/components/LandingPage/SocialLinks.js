import React, { Component } from 'react';

const socialLinks = [
    {"href": "https://www.linkedin.com/in/yash-chatim-a2624b174/", "class": "fa fa-linkedin-square"},
    {"href": "https://github.com/YashChatim/", "class": "fa fa-github-square"},
    {"href": "https://www.facebook.com/yash.chatim", "class": "fa fa-facebook-square"},
    {"href": "https://www.instagram.com/yashie_kun/", "class": "fa fa-instagram"}
];

class SocialLinks extends Component {
    render() {
        return (
            <div className="social-links"> {/* target - specifies where to open the link, _blank - 	opens link in new window/tab */}
                {socialLinks.map((item) =>
                    <a href={item.href} rel="noopener noreferrer" target="_blank">
                        <i class={item.class} aria-hidden="true"></i>
                    </a>
                )}
            </div>
        );
    }
}

export default SocialLinks;