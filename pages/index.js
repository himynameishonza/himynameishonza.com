import React from 'react';
import Page from '../components/Page';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Illustration from '../components/Illustration';

export class Homepage extends React.Component {
    render() {
        return (
            <>
                <Loading />
                <Header showMenu showClose showSocial showBack showSettings showAbout />
                <Page>Hello</Page>
            </>
        );
    }
}

export default Homepage;
