import React from 'react'
import Layout from '../components/Layout';
import UserForm from '../components/UserForm/UserForm';
import '../styles/explore.scss';

export default function Explore() {
    return (
        <section className="explore">
            <Layout>
                <div className="explore__content-container">      
                    <h1 className="explore__header-title">Explore your own blend</h1>
                    <UserForm/>
                </div>
            </Layout>
        </section>
    )
}
