import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import BlockContent from '@sanity/block-content-to-react';
import Head from '../Head';
import Header from '../Header';
import Facts from '../Facts';
import SideContent from '../SideContent';
import CookiesModal from '../CookiesModal';
import {HeroArticlePreview, FeaturedArticlePreview} from '../ArticlePreview';
import Loading from '../Loading';
import ErrorPage from '../ErrorPage';
import Illustration from '../Illustration';
import {useSpring, animated} from 'react-spring';
import Footer from '../Footer';
import {
    setInitialCookies,
    readThemeCookie,
    readMasterCookie,
    saveMasterCookie,
    setTheme,
} from '../../utils/cookies';
import {
    serializers,
    urlFor,
    readingTime,
    dateFormater,
    monthFormater,
    plainText,
    getCategory,
} from '../../utils';
import '../../styles/global.scss';
import styles from './Layout.scss';
import classnames from 'classnames';

function Layout(props) {
    const [navState, setNavState] = useState(false);
    const [cookiesModal, setCookiesModal] = useState(readMasterCookie() === undefined);
    const [scrollable, setScrollable] = useState(false);
    const [renderReady, setRenderReady] = useState(false);
    const animationFadeIn = useSpring({opacity: 1, from: {opacity: 0}});

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
        setRenderReady(true);
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
            {!renderReady || (props.type === 'loading' && <Loading />)}
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
                {props.type === 'homepage' && (
                    <>
                        <div className={styles['layout__content']}>
                            <div className={styles['hero-article']}>
                                <HeroArticlePreview
                                    category="Knihy"
                                    title={props.data[0].title}
                                    link={'/' + props.data[0].slug.current}
                                    excerpt={props.data[0].body}
                                    mainImage={props.data[0].mainImage}
                                />
                            </div>

                            <div className={styles['featured-articles']}>
                                <FeaturedArticlePreview
                                    category="Knihy"
                                    title={props.data[1].title}
                                    link={'/' + props.data[1].slug.current}
                                    excerpt={props.data[1].body}
                                />

                                <FeaturedArticlePreview
                                    category="Knihy"
                                    title={props.data[2].title}
                                    link={'/' + props.data[2].slug.current}
                                    excerpt={props.data[2].body}
                                />

                                <FeaturedArticlePreview
                                    category="Knihy"
                                    title={props.data[3].title}
                                    link={'/' + props.data[3].slug.current}
                                    excerpt={props.data[3].body}
                                />
                            </div>

                            <div className={styles['side-content']}>
                                <Facts />
                                <SideContent />
                            </div>
                        </div>
                        <div className={styles['layout__decoration']} />
                        <Footer />
                    </>
                )}

                {props.type === 'archive' && (
                    <>
                        <div className={styles['layout__content']}>
                            <div className={styles['hero-article']}>
                                <h2>{props.data[0].title}</h2>
                                <h3>{props.data[0].description}</h3>
                            </div>
                        </div>
                        <div className={styles['layout__decoration']} />
                        <Footer />
                    </>
                )}

                {props.type === 'info-page' && (
                    <>
                        <div className={styles['layout__content']}>
                            <div className={styles['info-page__illustration']}>
                                <div className={styles['illustration__container']}>
                                    <Illustration illustration={'error500'} />
                                </div>
                            </div>
                            <div className={styles['info-page__content']}>
                                <div className={styles['content-container']}>
                                    <h1>{props.title}</h1>
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {props.type === 'article' && (
                    <animated.div style={animationFadeIn}>
                        <div className={styles['layout__content']}>
                            <div className={styles['article__hero']}>
                                {props.data.mainImage && (
                                    <Image
                                        alt="Image"
                                        src={urlFor(props.data.mainImage).width().url()}
                                        layout="fill"
                                        objectFit="cover"
                                        quality={process.env.IMAGE_QUALITY}
                                        loading="lazy"
                                        nopin="nopin"
                                    />
                                )}
                            </div>
                            <div className={styles['article__content']}>
                                <div className={styles['content-container']}>
                                    <h1>{props.data.title}</h1>

                                    <h3>
                                        {getCategory(props.data.categories[0]['_key'])} -
                                        {readingTime(props.data.body)}{' '}
                                        {dateFormater(props.data.publishedAt) +
                                            '. ' +
                                            monthFormater(props.data.publishedAt)}
                                    </h3>
                                    <BlockContent
                                        blocks={props.data.body}
                                        serializers={serializers}
                                    />
                                </div>
                            </div>
                        </div>
                    </animated.div>
                )}

                {props.type === 'error' && <ErrorPage statusCode={props.statusCode} />}
            </div>
        </>
    );
}

export default Layout;
