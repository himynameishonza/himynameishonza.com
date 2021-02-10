import React from 'react';
import Head from '../components/Head';
import Page from '../components/Page';
import CookiesModal from '../components/CookiesModal';
import Cookies from 'universal-cookie';
import Header from '../components/Header';

const cookies = new Cookies();
const cookiesExist = cookies.get('cookiesSaved') === undefined ? false : true;
let cookiesTheme = cookies.get('theme') === undefined ? 'light' : cookies.get('theme');
export class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderPage: false,
            showCookiesModal: !cookiesExist,
            navigationOpened: false,
        };
    }

    setCookies(userChoice) {
        if (userChoice === true) {
            cookies.set('cookiesSaved', true, {path: '/'});
            cookies.set('theme', 'light', {path: '/'});
            cookies.set('markRead', true, {path: '/'});
            this.setState({showCookiesModal: false});
        } else {
            this.setState({showCookiesModal: false});
            return;
        }
    }

    toggleNavigation() {
        this.setState({navigationOpened: !this.state.navigationOpened});
    }

    componentDidMount() {
        this.setState({renderPage: true});
        document.body.classList.add('theme--' + cookiesTheme);

        // This require needs to be fixed - it is loading both stylesheets!
        if (cookiesTheme === 'light') {
            require('../styles/theme-light.scss');
        } else {
            require('../styles/theme-light.scss');
        }
    }

    render() {
        return (
            <>
                <Head theme={cookiesTheme} />
                {this.state.showCookiesModal && (
                    <CookiesModal saveCookies={() => this.setCookies(true)} discardCookies={() => this.setCookies(false)} />
                )}

                <Header navToggle={() => this.toggleNavigation()} navOpened={this.state.navigationOpened} />
                <Page type="homepage">{this.props.children}</Page>
            </>
        );
    }
}

export default Homepage;
