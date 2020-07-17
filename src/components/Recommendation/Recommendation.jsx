import React from 'react';
import {Link} from 'gatsby';

export default function Recommendation() {
    return (
        <div>
            <h1>Recommendation</h1>
            <p>we think you'll enjoy our recommendation.</p>
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}
