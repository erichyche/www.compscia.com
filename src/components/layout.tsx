import React from 'react';
import Header from './header';
import Footer from './footer';

export default class Layout extends React.Component<any, any> {    
    render() {
        const { children } = this.props;
        return(
            <>
            <Header />
            <main>
                { children }
            </main>
            <Footer />
            </>
        );
    }
}