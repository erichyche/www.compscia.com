import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './header';
import Footer from './footer';
import '../styles/main.scss';

export default class Layout extends React.Component<any, any> {    
    
    addMore = () => {

    }
    render() {
        const { children } = this.props;
        return (
            <>
            <Helmet></Helmet>
            <Header />
            <main>
                { children }
            </main>
            <Footer />
            </>
        );
    }
}