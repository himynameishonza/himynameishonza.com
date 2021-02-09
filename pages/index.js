import React from 'react';
import Page from '../components/Page';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Fade from 'react-reveal/Fade';
export class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true, renderPage: false };
        console.log(this.state.loading)
    }

    componentDidMount() {
        setTimeout(
            function () {
                this.setState({ loading: false });
            }
                .bind(this),
            1000
        );

        setTimeout(
            function () {
                this.setState({ renderPage: true });
            }
                .bind(this),
            2000
        );
    }

    render() {
        return (
            <>
                <Fade opposite when={this.state.loading}>
                    <Loading hide={this.state.renderPage} />
                </Fade>
                <Fade opposite when={this.state.renderPage}>
                    <Header showMenu showClose showSocial showBack showSettings showAbout />
                    <Page>Hello</Page>
                </Fade>
            </>
        );
    }
}

export default Homepage;
