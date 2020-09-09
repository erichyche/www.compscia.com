import React from 'react';
import { Link } from 'gatsby';
import '../styles/header.scss';

type Page = {
    link: string,
    caption: string
};

export default function Header() {
    const pages: Page[] = [
        { link: "/", caption: "Home" },
        { link: "/about", caption: "About" },
        { link: "/contact", caption: "Contact" },
    ];
    return (
        <header>
            <img />
            <nav>
                <ul>
                    { pages.map(
                        (page) => (
                        <li><Link to={ page.link }>{ page.caption }</Link></li>
                        )
                    ) }
                </ul>
            </nav>
        </header>
    );
}