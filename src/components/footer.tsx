import React from 'react';
import styles from '../styles/components/footer.module.scss';

const socialLinks = [
    {
        name: 'linkedin',
        link: 'https://linkedin.com/company/compscia'
    },
    {
        name: 'facebook-square',
        link: 'https://facebook.com/compscia'
    },
    //<i class="fa fa-linkedin-square"></i><i class="fa fa-instagram"></i><i class="fa fa-facebook"></i>
    {
        name: 'instagram-square',
        link: 'https://instagram.com/comp.scia'
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
                <small>&copy; 2019 &ndash; { (new Date()).getFullYear() } Computer Science Association
                    | Made with <i style={{color: 'red'}} className="fas fa-heart"></i> by
                    <a style={{textDecoration: 'none', color: '#fff'}} href="https://github.com/avonbied"> @avonbied</a></small>
            </div>
        </footer>
    );
}

export default Footer;