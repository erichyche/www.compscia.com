import React from 'react';
import '../styles/footer.scss';

const socialLinks = [
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/compscia'
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/compscia'
    },
    //<i class="fa fa-linkedin-square"></i><i class="fa fa-instagram"></i><i class="fa fa-facebook"></i>
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/comp.scia'

    },
    {
        name: 'github',
        link: 'https://github.com/comp-scia'
    }
]

const Footer = () => {
    return (
        <footer>
            <div className="social-icons">
                { socialLinks.map((link,i) => (
                    <a href={link.link} key={i}>{link.name}</a>
                )) }
                <a >LinkedIn</a>
                <a >Facebook</a>
                <a >Instagram</a>
            </div>
            <div className="copyright">
                <small>&copy; 2019-{ (new Date()).getFullYear() } Computer Science Association</small>
            </div>
        </footer>
    );
}

export default Footer;