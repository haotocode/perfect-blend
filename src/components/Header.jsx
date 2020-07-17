import React from 'react';
import {Link} from 'gatsby';
// import './Header.module.scss'
// import HeaderStyles from './Header.module.scss';

export default function Header () {
    return (
        <header>
            <Link to="/">Perfect blend logo</Link>
        </header>
    )
}

// export default function Header() {
//     return (
//         <header>
//             <h1>Hao's first Gatsby app</h1>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link className={HeaderStyles.link} to='/'>Home</Link>
//                     </li>
//                     <li>
//                         <Link to='/about'>About</Link>
//                     </li>
//                     <li>
//                         <Link to='/blog'>Blog</Link>
//                     </li>
//                     <li>
//                         <Link to='/contact'>Contact</Link>
//                     </li>
//                     <li>
//                         <Link to='/learn'>Learn</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }
