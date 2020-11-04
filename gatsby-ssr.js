import React from 'react';
import Footer from './src/components/footer';
import Header from './src/components/header';
import Layout from './src/components/layout';

import './src/styles/reset.scss';
import './src/styles/main.scss';

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
}
export const onRenderBody = ({setHeadComponents, setPreBodyComponents, setPostBodyComponents}) => {
    setPreBodyComponents (<Header />);
    setPostBodyComponents(<Footer />);
}