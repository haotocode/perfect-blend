import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
// import {Link} from 'gatsby';
import './Nav.scss';

export default function Nav() {
    return (
        <nav className="nav">
            <AniLink swipe direction="left" className="nav__link" to='/about'>About</AniLink>
            <AniLink swipe direction="left" className="nav__link" to='/learn'>Learn</AniLink>
            <AniLink swipe direction="left" className="nav__link" to='/method'>Method</AniLink>
            <AniLink swipe direction="left" className="nav__link" to='/explore'>Explore</AniLink>
            <AniLink swipe direction="left" className="nav__link" to='/shop'>Shop</AniLink>
            <AniLink swipe direction="left" className="nav__link" to='/blog'>Blog</AniLink>
            <AniLink swipe direction="left" className="nav__link" to='/contactus'>Contact</AniLink>
      </nav>
    )
}
