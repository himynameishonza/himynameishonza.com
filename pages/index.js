import React from 'react';
import Page from '../components/Page';
import Header from '../components/Header';

export class Homepage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Page>Hello</Page>
            </>
        );
    }
}

export default Homepage;
