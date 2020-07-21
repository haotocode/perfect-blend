import React from 'react';
// import Typed from 'react-typed';
import Layout from '../components/Layout';
import BackArrow from '../assets/images/icons/left.svg'
import '../styles/about.scss';


export default function About() {
    return (
        <div className="about">
            <Layout>
                {/* <Typed 
                strings={['hello world']}
                typeSpeed={100}
                /> */}
                <div className="about__content-container">
                    <h1 className="about__title">About</h1>
                    <p className="about__content">It all started with a liking for coffee. Why do you drink the coffee you drink? Is it the flavour? The type? Or simply just a routine? Let's explore your coffee together!</p>
                </div>
            </Layout>
        </div>
    )
}
