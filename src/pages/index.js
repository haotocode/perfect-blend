import React from 'react';
import '../styles/index.scss';
import Layout from '../components/Layout';
import Nav from '../components/Nav/Nav';

const Home = () => {
  return (
    <div className="homepage">
      <Layout>
        <>
          <Nav className="homepage"/>
        </>
      </Layout>
    </div>
  )
}

export default Home;