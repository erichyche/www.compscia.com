import React from 'react';
import styles from '../styles/footer.module.scss';

const socialLinks = [
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/company/compscia'
    },
    {
        name: 'facebook-square',
        link: 'https://www.facebook.com/compscia'
    },
    //<i class="fa fa-linkedin-square"></i><i class="fa fa-instagram"></i><i class="fa fa-facebook"></i>
    {
        name: 'instagram-square',
        link: 'https://www.instagram.com/comp.scia'
    },
    {
        name: 'github-square',
        link: 'https://github.com/comp-scia'
    }
]

const Footer = () => {
    return (
        <footer id={styles.siteFoot}>
            <div className={styles.socialIcons}>
                { socialLinks.map((link,i) => (
                    <a href={link.link} className={styles.icon} key={i}><i className={"fab fa-".concat(link.name)}></i></a>
                )) }
            </div>
            <div className={styles.copyright}>
                <small>&copy; 2019 &ndash; { (new Date()).getFullYear() } Computer Science Association</small>
            </div>
        </footer>
    );
}

export default Footer;