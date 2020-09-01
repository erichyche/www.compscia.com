import React from 'react';

export interface AppProps {
    name: string
}

export default class App extends React.Component<AppProps> {
    render() {
        return <div>Welcome to Preact!</div>;
    }
};