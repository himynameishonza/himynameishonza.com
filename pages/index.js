import React, { useEffect, useState } from 'react';
import Head from '../components/Head';
import Layout from '../components/Layout';
import CookiesModal from '../components/CookiesModal';
import Cookies from 'universal-cookie';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Footer from '../components/Footer';

const cookies = new Cookies();
const cookiesExist = cookies.get('cookiesSaved') === undefined ? false : true;
let cookiesTheme = cookies.get('theme') === undefined ? 'light' : cookies.get('theme');

function Homepage(props) {
    const [renderPage, setRenderPage] = useState(false);
    const [cookiesModal, setCookiesModal] = useState(!cookiesExist);
    const [navState, setNavState] = useState(false);
    const [scrollable, setScrollable] = useState(false);

    function initCookies(userChoice) {
        if (userChoice === true) {
            cookies.set('cookiesSaved', true, { path: '/' });
            cookies.set('theme', 'light', { path: '/' });
            cookies.set('markRead', true, { path: '/' });
            setCookiesModal(false);
            setScrollable(false);
        } else {
            setCookiesModal(false);
            setScrollable(false);
            return;
        }
    }

    useEffect(() => {
        document.body.classList.remove('theme--dark', 'theme--light');
        document.body.classList.add('theme--' + cookiesTheme);

        !scrollable ? document.body.classList.add('scroll-locked') : document.body.classList.remove('scroll-locked');

        cookiesModal || navState || !renderPage ? setScrollable(false) : setScrollable(true);

        setRenderPage(true)
    });

    return (
        <>

            <Loading show={renderPage} />

            <Head theme={cookiesTheme} />
            {
                cookiesModal && (
                    <CookiesModal saveCookies={() => initCookies(true)} discardCookies={() => initCookies(false)} />
                )
            }

            <Header showAbout showSettings showSocial navToggle={() => setNavState(!navState)} navState={navState} />
            <Layout type="homepage" >{props.children}</Layout>
            <Footer />
        </>
    )
}
export default Homepage;
