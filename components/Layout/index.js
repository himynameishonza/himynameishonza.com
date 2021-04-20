import React, { useState, useEffect } from 'react';
import Head from '../Head';
import Header from '../Header';
import { LayoutInfoPage, LayoutArticle, LayoutArchive, LayoutHomepage, LayoutFeed } from './Layout';
import CookiesModal from '../CookiesModal';
import Footer from '../Footer';
import Loading from '../Loading';
import { urlFor } from '../../utils';

import {
    setInitialCookies,
    readThemeCookie,
    readMasterCookie,
    saveMasterCookie,
    setTheme,
} from '../../utils/cookies';

import { plainText, goBack } from '../../utils';
import '../../styles/global.scss';
import styles from './Layout.scss';
import classnames from 'classnames';

function Layout(props) {
    const [navState, setNavState] = useState(false);
    const [cookiesModal, setCookiesModal] = useState(readMasterCookie() === undefined);
    const [scrollable, setScrollable] = useState(false);
    const [renderPage, setRenderPage] = useState(false);


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

    function parseImageData(layout, data) {
        if (layout === 'homepage') { return; }
        else if (layout === 'archive') {
            return "/static/rubrika-" + data[0].categoryNames[0].slug
        }
        else if (layout === 'article') {
            if (data.ogImage !== undefined) {
                return urlFor(data.ogImage).width().url();
            }
            else { return urlFor(data.mainImage).width().url() };
        } else {
            return;
        }
    }


    function parseUrl(layout, data) {
        if (layout === 'homepage') { return "https://www.himynameishonza.com"; }
        else if (layout === 'archive') {
            return "https://www.himynameishonza.com/rubrika/" + data[0].categoryNames[0].slug
        }
        else if (layout === 'article') {
            return "https://www.himynameishonza.com/" + data.slug.current
        } else {
            return "https://www.himynameishonza.com";
        }
    }



    useEffect(() => {
        !scrollable
            ? document.body.classList.add('scroll-locked')
            : document.body.classList.remove('scroll-locked');
        cookiesModal || navState ? setScrollable(false) : setScrollable(true);
        setTheme();
        setRenderPage(true);
    });


    return (
        <>
            <Loading status={renderPage} />
            <Head
                theme={readThemeCookie()}
                title={props.type !== 'homepage' && props.data ? props.type === 'archive' && props.data ? props.data[0].categoryNames[0].title : props.type === 'feed' ? 'Feed' : props.data.title : props.title}
                description={
                    props.type === 'article' && props.data
                        ? plainText(props.data.body)
                        : props.description
                }
                ogImage={parseImageData(props.type, props.data)}
                url={parseUrl(props.type, props.data)}
            />
            {cookiesModal && (
                <CookiesModal
                    saveCookies={() => initCookies(true)}
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
                {props.type === 'feed' && <LayoutFeed {...props} />}
            </div>
            {props.type !== 'article' && <Footer />}
        </>
    );
}

export default Layout;
