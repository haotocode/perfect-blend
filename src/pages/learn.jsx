import React from 'react';
import Typed from 'react-typed';
import Layout from '../components/Layout';


export default function Learn() {
    return (
        <Layout>
            <Typed 
            className="header"
            strings={['welcome to learn']}
            typeSpeed={100}
            />
            <h1>Learn</h1>
        </Layout>

    )
}
