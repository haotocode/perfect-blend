import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import '../styles/header.scss'
// import './Header.module.scss'
// import HeaderStyles from './Header.module.scss';

const Header = () => {
    return (
        <header className="header">
            <AniLink paintDrip duration={1} to="/" className="header__link">PERFECT BLEND</AniLink>
        </header>
    )
}

export default Header;