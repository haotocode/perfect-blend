import React from 'react'
import Tilt from 'react-tilt';
import '../styles/main.scss';
import Layout from '../components/Layout';
import Nav from '../components/Nav/Nav';

function Main() {
    return (
        <div className="homepage">
            <Layout>
                <Tilt className="Tilt" options={{ max : 25, scale: 1}}  style={{ height: 100, width: 100 }}>
                    <Nav/>
                </Tilt>
            </Layout>
        </div>
    )
}

export default Main
