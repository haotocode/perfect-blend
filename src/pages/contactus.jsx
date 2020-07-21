import React from 'react';
import Layout from '../components/Layout';
import '../styles/contactus.scss'

export default function ConctactUs() {
    return (
        <section className="contact">
            <Layout>
                <div className="contact__content-container">
                    <h1 className="contact__header-title">Contact page</h1>
                    <p className="contact__content">contact details here</p>
                </div>
            </Layout>
        </section>
    )
}
