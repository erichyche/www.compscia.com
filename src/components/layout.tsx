import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './header';
import Footer from './footer';
import '../styles/reset.scss';
import '../styles/layout.scss';

export default class Layout extends React.Component<any, any> {    
    
    addMore = () => {

    }
    render() {
        const { children } = this.props;
        return (
            <>
            <Helmet>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/brands.css" integrity="sha384-MiOGyNsVTeSVUjE9q/52dpdZjrr7yQAjVRUs23Bir5NhrTq0YA0rny4u/qe4dxNj" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/fontawesome.css" integrity="sha384-PRy/NDAXVTUcXlWA3voA+JO/UMtzWgsYuwMxjuu6DfFPgzJpciUiPwgsvp48fl3p" crossOrigin="anonymous" />
            </Helmet>
            <Header />
            <main>
                { children }
            </main>
            <Footer />
            </>
        );
    }
}