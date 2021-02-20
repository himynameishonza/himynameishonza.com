import React, {useState, useEffect} from 'react';
import Head from '../Head';
import {useRouter} from 'next/router';
import Header from '../Header';
import {LayoutInfoPage, LayoutArticle, LayoutArchive, LayoutHomepage} from './Layout';
import CookiesModal from '../CookiesModal';
import ErrorPage from '../ErrorPage';
import Footer from '../Footer';

import {
    setInitialCookies,
    readThemeCookie,
    readMasterCookie,
    saveMasterCookie,
    setTheme,
} from '../../utils/cookies';

import {plainText, goBack} from '../../utils';
import '../../styles/global.scss';
import styles from './Layout.scss';
import classnames from 'classnames';

function Layout(props) {
    const [navState, setNavState] = useState(false);
    const [cookiesModal, setCookiesModal] = useState(readMasterCookie() === undefined);
    const [scrollable, setScrollable] = useState(false);

    function initCookies(userChoice) {
        if (userChoice === true) {
            setInitialCookies();
            setScrollable(false);
            saveMasterCookie(true);
            setCookiesModal(false);
        } else {
            setScrollable(false);
            setCookiesModal(false);
            return;
        }
    }

    useEffect(() => {
        !scrollable
            ? document.body.classList.add('scroll-locked')
            : document.body.classList.remove('scroll-locked');
        cookiesModal || navState ? setScrollable(false) : setScrollable(true);
        setTheme();
    });

    return (
        <>
            <Head
                theme={readThemeCookie()}
                title={props.type !== 'homepage' && props.data ? props.data.title : props.title}
                description={
                    props.type === 'article' && props.data
                        ? plainText(props.data.body)
                        : props.description
                }
            />
            {cookiesModal && (
                <CookiesModal
                    saveCookies={() => initCookies(true)}
                    discardCookies={() => initCookies(false)}
                />
            )}
            {props.type !== 'error' && (
                <Header
                    showAbout
                    showSettings
                    showSocial
                    navToggle={() => setNavState(!navState)}
                    navState={navState}
                    type={props.type}
                />
            )}
            <div className={classnames(styles['layout'], styles['layout--' + props.type])}>
                {props.type === 'homepage' && <LayoutHomepage {...props} />}

                {props.type === 'archive' && <LayoutArchive {...props} />}

                {props.type === 'info-page' && <LayoutInfoPage {...props} />}

                {props.type === 'article' && <LayoutArticle {...props} />}

                {props.type === 'error' && <ErrorPage statusCode={props.statusCode} />}
            </div>
            {props.type !== 'article' && <Footer />}
        </>
    );
}

export default Layout;
