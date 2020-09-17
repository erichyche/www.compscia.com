import React from 'react';
import Header from './src/components/header';

const onRenderBody = ({ setHeadComponents }) => {
 setHeadComponents([
     <Header />,
  ]);
}

exports.onRenderBody = onRenderBody;