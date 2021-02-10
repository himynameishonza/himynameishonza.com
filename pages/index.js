import React from 'react';
import Fade from 'react-reveal/Fade';
import Head from '../components/Head';
import Page from '../components/Page';
import Header from '../components/Header';
import CookiesModal from '../components/CookiesModal';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookiesExist = cookies.get('cookiesSaved') === undefined ? false : true;
let cookiesTheme = cookies.get('theme') === undefined ? 'light' : cookies.get('theme');
export class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderPage: false,
            showCookiesModal: !cookiesExist,
        };
    }

    setCookies(userChoice) {
        if (userChoice === true) {
            cookies.set('cookiesSaved', true, { path: '/' });
            cookies.set('theme', 'dark', { path: '/' });
            cookies.set('markRead', true, { path: '/' });
            this.setState({ showCookiesModal: false });
        } else {
            this.setState({ showCookiesModal: false });
            return;
        }
    }

    componentDidMount() {
        this.setState({ renderPage: true });
        document.body.classList.add('theme--' + cookiesTheme);

        // This require needs to be fixed - it is loading both stylesheets!
        if (cookiesTheme === 'light') {
            require('../styles/theme-light.scss');
        } else {
            require('../styles/theme-dark.scss');
        }
    }

    render() {


        return (
            <>
                <Head theme={cookiesTheme} />
                {this.state.showCookiesModal && (
                    <CookiesModal
                        saveCookies={() => this.setCookies(true)}
                        discardCookies={() => this.setCookies(false)}
                    />
                )}

                <Header showMenu showSocial />
                <Page type="homepage">{this.props.children}</Page>
            </>
        );
    }
}

export default Homepage;
