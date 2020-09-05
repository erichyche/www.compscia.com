import React from 'react';

export interface AppProps {
    name: string
}

export default class App extends React.Component<AppProps, any> {
    render() {
        return(
            <>
                <h1>Welcome to React, { this.props.name }!</h1>
                { this.props.children }
            </>
        );
    }
};
