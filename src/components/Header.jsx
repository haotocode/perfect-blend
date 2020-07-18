import React from 'react';
import {Link} from 'gatsby';
import '../styles/header.scss'
// import './Header.module.scss'
// import HeaderStyles from './Header.module.scss';

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__link">PERFECT BLEND</Link>
        </header>
    )
}

export default Header;