import React, {useState} from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled, {createGlobalStyle} from "styled-components";
import './Nav.scss';


export default function Nav() {
    return (
        <nav className="nav__menu-wrap">
            <input type="checkbox" className="nav__toggler"/>
            <div className="nav__hamburger"><div className="nav__hamburger-inner"></div></div>
            <div className="nav__menu">
                <div>
                    <div>
                        <ul>
                            <li className="nav__menu-link"><AniLink className="nav__link" to='/about'>About</AniLink></li>
                            <li className="nav__menu-link"><AniLink className="nav__link" to='/learn'>Learn</AniLink></li>
                            <li className="nav__menu-link"><AniLink className="nav__link" to='/method'>Method</AniLink></li>
                            <li className="nav__menu-link"><AniLink className="nav__link" to='/explore'>Explore</AniLink></li>
                            <li className="nav__menu-link"> <AniLink className="nav__link" to='/shop'>Shop</AniLink></li>
                            <li className="nav__menu-link"><AniLink className="nav__link" to='/blog'>Blog</AniLink></li>
                            <li className="nav__menu-link"><AniLink className="nav__link" to='/contactus'>Contact</AniLink></li>
                        </ul>
                    </div>
                </div>
            </div>
      </nav>
    )
}
