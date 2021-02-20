import React, {useState} from 'react';
import styles from './Header.scss';
import Icon from '../Icon';
import Navigation from '../Navigation';
import Settings from '../Settings';
import {useKeyboardEvent, goBack} from '../../utils/';
import classnames from 'classnames';

function Header(props) {
    const [settingsState, setSettingsState] = useState(false);

    useKeyboardEvent('Escape', () => {
        settingsState ? setSettingsState(false) : () => navToggle();
    });

    return (
        <>
            <header
                className={classnames(styles['header'], styles['header--' + props.type], {
                    [styles['header--active']]: props.navState,
                })}
            >
                <div className={styles['header__logo']}>
                    <a href="/" aria-label="Přejít na hlavní stránku">
                        <Icon icon="logo" size="48" />
                        {props.type !== 'article' && (
                            <span className={styles['logo__type']}>himynameishonza</span>
                        )}
                    </a>
                </div>
                <div className={styles['header__navbar']}>
                    {props.showSocial && !props.navState && props.type !== 'article' && (
                        <div className={styles['social']}>
                            <a
                                href="https://www.facebook.com/himynameishonzacom"
                                aria-label="Odkaz na facebookový profil autora webu"
                            >
                                <Icon icon="social-facebook" size="21" />
                            </a>
                            <a
                                href="https://twitter.com/himynameishonza"
                                aria-label="Odkaz na twitterový profil autora webu"
                            >
                                <Icon icon="social-twitter" size="21" />
                            </a>
                            <a
                                href="https://www.instagram.com/himynameishonza/"
                                aria-label="Odkaz na instagramový profil autora webu"
                            >
                                <Icon icon="social-instagram" size="21" />
                            </a>
                            <a
                                href="https://www.flickr.com/photos/55487287@N06/"
                                aria-label="Odkaz na flickerový profil autora webu"
                            >
                                <Icon icon="social-flickr" size="21" />
                            </a>
                        </div>
                    )}

                    {props.showAbout && props.navState && !settingsState && (
                        <a href="/o-webu" aria-label="Přejít na stránku O webu">
                            <span className={styles['svg__text']}>O webu</span>
                            <Icon icon="ui-about" size="24" />
                        </a>
                    )}

                    {props.navState && !settingsState && (
                        <a
                            aria-label="Přejít na stránku Nastavení"
                            onClick={() => setSettingsState(true)}
                        >
                            <span className={styles['svg__text']}>Nastavení</span>
                            <Icon icon="ui-cog" size="24" />
                        </a>
                    )}

                    {/* back button for Settings */}
                    {settingsState && (
                        <a
                            aria-label="Zpět do hlavního menu"
                            onClick={() => setSettingsState(false)}
                        >
                            <span className={styles['svg__text']}>Zpět</span>
                            <Icon icon="ui-back" size="24" />
                        </a>
                    )}

                    {/* Back button for Article */}
                    {props.type === 'article' && !settingsState && !props.navState && (
                        <a aria-label="Zpět" onClick={goBack()}>
                            <span className={styles['svg__text']}>Zpět</span>
                            <Icon icon="ui-back" size="24" />
                        </a>
                    )}

                    {props.navState && !settingsState && (
                        <a aria-label="Zavřít hlavní menu" onClick={props.navToggle}>
                            <span className={styles['svg__text']}>Zavřít</span>
                            <Icon icon="ui-close" size="24" />
                        </a>
                    )}

                    {!props.navState && (
                        <a aria-label="Otevřít hlavní menu" onClick={props.navToggle}>
                            <span className={styles['svg__text']}>Menu</span>
                            <Icon icon="ui-menu" size="24" />
                        </a>
                    )}
                </div>
            </header>
            {props.navState && <Navigation />}
            {settingsState && <Settings />}
        </>
    );
}

export default Header;
