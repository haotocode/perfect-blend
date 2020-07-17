import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LayoutStyles from './Layout.module.scss';

export default function Layout(props) {
    return (
        <div className={LayoutStyles.container}>
            <div className={LayoutStyles.content}>
                <Header/>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}
