import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from '../components/Layout';
import '../styles/method.scss';
import Next from '../assets/images/icons/next.svg';

function Method() {
    return (
        <section className="method">
            <Layout>
                <div className="method__content-container">
                    <h1 className="method__title">Method</h1>
                    <p className="method__content">As a coffee drinker, your daily routine probably consist of you either brewing a cup at home or buying a cup before going about your day.  Now think, how many times you think to yourself “what should I make (or buy) this time?”  The result usually is the same as the last time.  Why?  We are creatures of habit. When we talk about habits, how many times you think about something you’ve done thousands of times? Probably not a lot, or perhaps never…because you’ve already done it a thousand times. In the context of coffee, after each, same, cup of coffee you drink, the less likelihood you’ll think about what you’re drinking. When I ask people why they drink that particular blend of coffee, the answer is usually “I’m used to it”.</p>
                    <p className="method__content">Coffee is a very personal topic for most, one bad cup, can perceptually ruin someone’s day. What if, you want to try a different blend, but afraid to buy anything off the shelf based on label? Enter, <AniLink to='/explore'>explore</AniLink> . The purpose of the explore section is to help everyone, pinpoint their specific preference by a series of questions, from how coffee is brewed, to flavour preferences, and then recommend a new coffee blend that is within their preference range but still new type of blend.</p>
                    
                    <AniLink swipe direction="left" to='/explore' className="method__link-container">
                        <img className="method__next-arrow" src={Next} alt="next arrow"/>
                    </AniLink>
                </div>
            </Layout>
        </section>
    )
}

export default Method
