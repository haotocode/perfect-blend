import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Nav from '../components/Nav/Nav';
import '../styles/header.scss';

const Header = () => {
    return (
        <header className="header">
            <Nav />
            <AniLink paintDrip duration={1} hex="#E0D3C3" to="/" className="header__link">PERFECT BLEND</AniLink>
        </header>
    )
}

export default Header;