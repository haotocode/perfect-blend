import React from 'react';
import Layout from '../components/Layout';
import '../styles/about.scss';


export default function About() {
    return (
        <div className="about">
            <Layout>
                <div className="about__content-container">
                    <h1 className="about__title">About</h1>
                    <p className="about__content">It all started with a liking for coffee. Why do you drink the coffee you drink? Is it the flavour? The type? Or simply just a routine? Let's explore your coffee together!</p>
                </div>
            </Layout>
        </div>
    )
}
