import React from 'react';
import styles from './Header.scss';
import Icon from '../Icon';

export class Header extends React.Component {
    render() {
        return (
            <header className={styles['header']}>
                <div className={styles['header__logo']}>
                    <a href="/">
                        <Icon icon="logo" size="48" />
                        <span className={styles['logo__type']}>himynameishonza</span>
                    </a>
                </div>
                <div className={styles['header__navbar']}>
                    {this.props.showSocial && (
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

                    {this.props.showSettings && (
                        <a href="/">
                            <span className={styles['svg__text']}>O webu</span>
                            <Icon icon="ui-about" size="24" />
                        </a>
                    )}

                    {this.props.showSettings && (
                        <a href="/">
                            <span className={styles['svg__text']}>Nastavení</span>
                            <Icon icon="ui-cog" size="24" />
                        </a>
                    )}

                    {this.props.showBack && (
                        <a href="/">
                            <span className={styles['svg__text']}>Zpět</span>
                            <Icon icon="ui-back" size="24" />
                        </a>
                    )}
                    {this.props.showClose && (
                        <a href="/">
                            <span className={styles['svg__text']}>Zavřít</span>
                            <Icon icon="ui-close" size="24" />
                        </a>
                    )}
                    {this.props.showMenu && (
                        <a href="/">
                            <span className={styles['svg__text']}>Menu</span>
                            <Icon icon="ui-menu" size="24" />
                        </a>
                    )}
                </div>
            </header>
        );
    }
}

export default Header;
