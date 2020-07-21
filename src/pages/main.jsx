import React from 'react'
import '../styles/main.scss';
import Layout from '../components/Layout';

function Main() {
    return (
        <div className="homepage">
            <Layout>
                <div className="homepage__hero-text-container">
                    <p className="homepage__hero-text">render catchy quotes here about coffee or exploration</p>
                </div>
            </Layout>
        </div>
    )
}

export default Main
