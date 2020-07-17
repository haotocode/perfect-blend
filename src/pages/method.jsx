import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';

function Method() {
    return (
        <Layout>
            <h1>Method</h1>
            <p>As a coffee drinker, your daily routine probably consist of you either brewing a cup at home or buying a cup before going about your day.  Now think, how many times you think to yourself “what should I make (or buy) this time?”  The result usually is the same as the last time.  Why?  We are creatures of habit. When we talk about habits, how many times you think about something you’ve done thousands of times? Probably not a lot, or perhaps never…because you’ve already done it a thousand times. In the context of coffee, after each, same, cup of coffee you drink, the less likelihood you’ll think about what you’re drinking. When I ask people why they drink that particular blend of coffee, the answer is usually “I’m used to it”.</p>
            <p>Coffee is a very personal topic for most, one bad cup, can perceptually ruin someone’s day. What if, you want to try a different blend, but afraid to buy anything off the shelf based on label? Enter, <Link to='/explore'>explore</Link> . The purpose of the explore section is to help everyone, pinpoint their specific preference by a series of questions, from how coffee is brewed, to flavour preferences, and then recommend a new coffee blend that is within their preference range but still new type of blend.</p>
            <h2>Fancy Link to explore section here</h2>
        </Layout>
    )
}

export default Method
