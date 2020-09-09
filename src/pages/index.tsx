import React from 'react';
import { Link } from 'gatsby';
import App from '../components/app';
import Layout from '../components/layout';

export default () => {
    return(
        <Layout>
            <Link to='/about'>About</Link>
            <App name="John">
                <p>There is plenty that you can do.</p>
            </App>
        </Layout>
    );
}