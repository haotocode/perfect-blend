import React, {useState} from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled, {createGlobalStyle} from "styled-components";
import './Nav.scss';


// export default function Nav() {
//     return (
//         <nav className="nav">
//             <AniLink swipe direction="left" className="nav__link" to='/about'>About</AniLink>
//             <AniLink swipe direction="left" className="nav__link" to='/learn'>Learn</AniLink>
//             <AniLink swipe direction="left" className="nav__link" to='/method'>Method</AniLink>
//             <AniLink swipe direction="left" className="nav__link" to='/explore'>Explore</AniLink>
//             <AniLink swipe direction="left" className="nav__link" to='/shop'>Shop</AniLink>
//             <AniLink swipe direction="left" className="nav__link" to='/blog'>Blog</AniLink>
//             <AniLink swipe direction="left" className="nav__link" to='/contactus'>Contact</AniLink>
//       </nav>
//     )
// }


const StyledNav = styled.nav` 
    width: 200px;
    height: 50vh;
    background: #E86856;
    transform: ${({showNav}) => showNav ? 'translateX(0px)' : 'translateX(-500px)'};
    transition: transform 250ms ease-in-out;
`;

const StyledHamburger = styled.button`
    position: absolute;
    top: 5px;
    left: 5px;
    padding: 10px;
    display: inline-block;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    z-index: 999;
    transform: ${({hamburger}) => hamburger ? 'translate(0,0)' : 'translate(0px, 0px)'};
    transition: transform 250ms ease-in-out;
`;

// TBD StyledHamburger, do I like the transition?? 
// transform: ${({hamburger}) => hamburger ? 'translate(0,0)' : 'translate(20px, 20px)'};


const HamburgerBox = styled.span`
    width: 24px;
    height: 20px;
    display: inline-block;
    position: relative;
`;

const HamburgerInner = styled.span`
    width: 100%;
    height: 3px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({hamburger}) => hamburger ? 'transparent' : '#333'};
    transition: background-color 100ms ease-in-out;
    
    &::after {
        content: '';
        left: 0;
        width: 100%;
        height: 3px;
        position: absolute;
        background-color: #333;
        top: 8px;
        transform: ${({hamburger}) => hamburger ? 'translateY(-8px) rotate(-135deg)' : 'translateY(0) rotate(0)'};
        transition: transform 250ms ease-in-out;
    }

    &::before{
        content: '';
        left: 0;
        width: 100%;
        height: 3px;
        position: absolute;
        background-color: #333;
        top: -8px;
        transform: ${({hamburger}) => hamburger ? 'translateY(8px) rotate(135deg)' : 'translateY(0) rotate(0)'};
        transition: transform 250ms ease-in-out;
    }

`;

const Nav = () => {
    const [menu, showMenu] = useState(false)
    return (
    <>
        <StyledNav showNav={menu}/>
        <StyledHamburger hamburger={menu} onClick={() => showMenu(!menu)}>
            <HamburgerBox>
                <HamburgerInner hamburger={menu}/>
            </HamburgerBox>
        </StyledHamburger>
    </>
    )
}

export default Nav;
