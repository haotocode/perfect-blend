import React from 'react'
import {Link} from 'gatsby';
import './Nav.scss';

export default function Nav() {
    return (
        <nav className="nav">
            <Link className="nav__link" to='/about'>About</Link>
            <Link className="nav__link" to='/learn'>Learn</Link>
            <Link className="nav__link" to='/method'>Method</Link>
            <Link className="nav__link" to='/explore'>Explore</Link>
            <Link className="nav__link" to='shop'>Shop</Link>
            <Link className="nav__link" to='blog'>Blog</Link>
            <Link className="nav__link" to='contactus'>Contact</Link>
      </nav>
    )
}
