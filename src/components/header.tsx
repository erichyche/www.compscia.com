import React from 'react';
import { Link } from 'gatsby';
import '../styles/header.scss';

type Page = {
    link: string,
    caption: string
};

const Header = () => {
    const seasonal = false;
    const pages: Page[] = [
        { link: "/", caption: "Home" },
        { link: "/programs", caption: "Programs" },
        { link: "/resources", caption: "Resources" },
        { link: "/about", caption: "About" },
        { link: "/contact", caption: "Contact" },
    ];
    return (
        <header>
            <Link to='/'><img className="logo" src="/images/logo-transparent.png" /></Link>
            { seasonal
                ? <button>VOTE NOW</button>
                : false
            }
            <nav className="navbar">
                { pages.map(
                    (page) => (<Link to={ page.link }>{ page.caption }</Link>)
                ) }
            </nav>
        </header>
    );
}

export default Header;