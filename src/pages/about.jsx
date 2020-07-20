import React from 'react';
// import Typed from 'react-typed';
import Layout from '../components/Layout';
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
                    <p className="about__content">bio here</p>
                </div>
            </Layout>
        </div>
    )
}
