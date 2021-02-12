import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import Cookies from 'universal-cookie';
import Head from '../Head';
import Header from '../Header';
import Facts from '../Facts';
import SideContent from '../SideContent';
import CookiesModal from '../CookiesModal';
import { HeroArticlePreview, FeaturedArticlePreview } from '../ArticlePreview';
import Loading from '../Loading';
import Illustration from '../Illustration';
import Footer from '../Footer';
import '../../styles/global.scss';
import styles from './Layout.scss';

const cookies = new Cookies();
const cookiesExist = cookies.get('cookiesSaved') === undefined ? false : true;
let cookiesTheme = cookies.get('theme') === undefined ? 'light' : cookies.get('theme');

function Layout(props) {

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

            <div className={classnames(styles['layout'], styles['layout--' + props.type])}>
                {props.type === 'homepage' && (
                    <>
                        <div className={styles['layout__content']}>
                            <div className={styles['hero-article']}>
                                <HeroArticlePreview
                                    category="Knihy"
                                    title="Jana Ciglerová: Americký deník"
                                    link="/"
                                    excerpt="Dorazil mi balík víkendového čtiva z Deníku N. A jako první mi do ruky padla kniha mojí oblíbené novinářky Jany Ciglerové, která strávila spolu se svojí rodinou nezanedbatelnou část života ve Spojených státech a která své všední i nevšední zážitky zasílala do českých luhů a hájů ve formě deníkových záznamů. Ty pak před rokem vyšly jako sbírka Americký deník. Kniha obsahuje čtyřicet esejí, v každé z nich si potom Ciglerová vybírá jedno téma z každodenního života Čecha žijícího v Americe."
                                />
                            </div>

                            <div className={styles['featured-articles']}>
                                <FeaturedArticlePreview
                                    category="Film"
                                    title="The Upside"
                                    link="/"
                                    excerpt="Že se dívám na předělávku Nedotknutelných z roku 2011 mi došlo asi až po dvaceti minutách sledování. Název filmu na Prime Videu byl totiž The Upside, nikoliv Untouchables. Jakmile mi ale secvakly obvody, překvapivě jsem neměl chuť film vypnout. Že si Američané potrpí na remaky filmů a seriálů originální evropské produkce, je všeobecně známo. Zatímco například u seriálu The Office byla předělávka vcelku nasnadě, u Nedotknutelných to ale už tak pochopitelné není. "
                                />

                                <FeaturedArticlePreview
                                    category="Knihy"
                                    title="Josi Klein Halevi: Dopisy přes zeď"
                                    link="/"
                                    excerpt="Další rest splněn. Už delší dobu jsem hledal knihu o historii izraelsko-palestinského konfliktu, která by mi jednoduchou formou vysvětlila, v čem tkví hlavní problém tohoto nekonečného přetahování na Blízkém východě. Dopisy přes zeď jsou přesně tím, co jsem hledal."
                                />

                                <FeaturedArticlePreview
                                    category="Knihy"
                                    title="Hans Rosling: Faktomluva"
                                    link="/"
                                    excerpt="Knihu Faktomluva jsem si úmyslně šetřil na konec roku. Když jsem si někdy před měsícem naordinoval absolutní abstinenci od denního zpravodajství, hledal jsem alternativu. Rozečetl jsem skvělou knihu Dějiny USA (tu asi nechám bez recenze, recenzoval bych totiž spíš samotné dějiny USA, nikoliv knihu) a začal číst trochu víc beletrie. Faktomluvu jsem si nechal na čas po Vánocích, jelikož slibovala, že mi zvedne náladu. A zvedla!"
                                />
                            </div>

                            <div className={styles['side-content']}>
                                <Facts />
                                <SideContent />
                            </div>
                        </div>
                        <div className={styles['layout__decoration']} />
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
                                    <h1 className={styles['text--align-center']}>O webu</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero accumsan, ornare magna at, molestie lorem. Donec mollis tortor eget nunc sagittis porttitor. Aliquam erat volutpat. Donec auctor sollicitudin aliquet. In hac habitasse platea dictumst. Nullam odio urna, sodales laoreet erat in, faucibus malesuada tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et nibh in mi sagittis volutpat a dapibus dui. Ut tincidunt fermentum sem vitae faucibus. Praesent enim augue, euismod sed dapibus eu, auctor sed ante. Morbi malesuada, turpis vel aliquam varius, urna sapien elementum diam, at varius neque urna vel mi. Nam ante turpis, molestie cursus nisl vitae, feugiat hendrerit nulla. Nullam ornare facilisis velit ut congue.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero accumsan, ornare magna at, molestie lorem. Donec mollis tortor eget nunc sagittis porttitor. Aliquam erat volutpat. Donec auctor sollicitudin aliquet. In hac habitasse platea dictumst. Nullam odio urna, sodales laoreet erat in, faucibus malesuada tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et nibh in mi sagittis volutpat a dapibus dui. Ut tincidunt fermentum sem vitae faucibus. Praesent enim augue, euismod sed dapibus eu, auctor sed ante. Morbi malesuada, turpis vel aliquam varius, urna sapien elementum diam, at varius neque urna vel mi. Nam ante turpis, molestie cursus nisl vitae, feugiat hendrerit nulla. Nullam ornare facilisis velit ut congue.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero accumsan, ornare magna at, molestie lorem. Donec mollis tortor eget nunc sagittis porttitor. Aliquam erat volutpat. Donec auctor sollicitudin aliquet. In hac habitasse platea dictumst. Nullam odio urna, sodales laoreet erat in, faucibus malesuada tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et nibh in mi sagittis volutpat a dapibus dui. Ut tincidunt fermentum sem vitae faucibus. Praesent enim augue, euismod sed dapibus eu, auctor sed ante. Morbi malesuada, turpis vel aliquam varius, urna sapien elementum diam, at varius neque urna vel mi. Nam ante turpis, molestie cursus nisl vitae, feugiat hendrerit nulla. Nullam ornare facilisis velit ut congue.</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </>
    );
}

export default Layout;
