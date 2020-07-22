import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function Recommendation() {
    return (
        <div>
            <h1>Recommendation</h1>
            <p>we think you'll enjoy our recommendation.</p>
            <AniLink to='/main' paintDrip duration={1}><button>Home</button></AniLink>
        </div>
    )
}
