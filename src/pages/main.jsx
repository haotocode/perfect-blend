import React from 'react'
import Tilt from 'react-tilt';
import '../styles/main.scss';
import Layout from '../components/Layout';
import Nav from '../components/Nav/Nav';
import KommunicateChat from '../components/Chat';

function Main() {
    return (
        <div className="homepage">
            <Layout>
                <Tilt className="Tilt" options={{ max : 25, scale: 1}}  style={{ height: 100, width: 100 }}>
                    <Nav/>
                </Tilt>
                <KommunicateChat/>
            </Layout>
        </div>
    )
}

export default Main
