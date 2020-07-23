import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Typist from 'react-typist';
import './Recommendation.scss';

export default function Recommendation() {
    return (
        <div className="recommendation">
            <h5>Our Recommendation</h5>
            <span>image here</span>
            <p>some kind of description about the coffee matching the preference</p>
            <p>we think you'll enjoy our recommendation.</p>
            <AniLink to='/main' paintDrip duration={1}><button>Home</button></AniLink>
        </div>
    )
}