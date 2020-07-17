import React from 'react';
import {Link} from 'gatsby';
import '../styles/partials/fonts.scss';
import '../styles/header.scss'
// import './Header.module.scss'
// import HeaderStyles from './Header.module.scss';

export default function Header () {
    return (
        <header className="header">
            <Link to="/" className="header__link">Perfect blend logo</Link>
        </header>
    )
}