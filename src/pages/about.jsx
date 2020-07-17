import React from 'react';
import Typed from 'react-typed';
import Layout from '../components/Layout';
import '../styles/about.scss';


export default function About() {
    return (
        <Layout>
            <Typed 
            className="header"
            strings={['hello world']}
            typeSpeed={100}
            />
            <h1>About</h1>
            <p>bio here</p>
        </Layout>

    )
}
