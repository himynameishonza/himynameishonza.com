import React from 'react';
import styles from './Header.scss';
import Icon from '../Icon';
import Navigation from '../Navigation';

export class Header extends React.Component {
    render() {
        return (
            <>
                <header className={styles['header']}>

                    <div className={styles['header__logo']}>
                        <a href="/" aria-label="Přejít na hlavní stránku">
                            <Icon icon="logo" size="48" />
                            <span className={styles['logo__type']}>himynameishonza</span>
                        </a>
                    </div>
                    <div className={styles['header__navbar']}>
                        {this.props.showSocial && !this.props.navState && (
                            <div className={styles['social']}>
                                <a href="https://www.facebook.com/himynameishonzacom" aria-label="Odkaz na facebookový profil autora webu">
                                    <Icon icon="social-facebook" size="21" />
                                </a>
                                <a href="https://twitter.com/himynameishonza" aria-label="Odkaz na twitterový profil autora webu">
                                    <Icon icon="social-twitter" size="21" />
                                </a>
                                <a href="https://www.instagram.com/himynameishonza/" aria-label="Odkaz na instagramový profil autora webu">
                                    <Icon icon="social-instagram" size="21" />
                                </a>
                                <a href="https://www.flickr.com/photos/55487287@N06/" aria-label="Odkaz na flickerový profil autora webu">
                                    <Icon icon="social-flickr" size="21" />
                                </a>
                            </div>
                        )}
                        {this.props.showAbout && this.props.navState && (
                            <a href="/o-webu" aria-label="Přejít na stránku O webu">
                                <span className={styles['svg__text']}>O webu</span>
                                <Icon icon="ui-about" size="24" />
                            </a>
                        )}

                        {this.props.showSettings && this.props.navState && (
                            <a href="/" aria-label="Přejít na stránku Nastavení">
                                <span className={styles['svg__text']}>Nastavení</span>
                                <Icon icon="ui-cog" size="24" />
                            </a>
                        )}


                        {this.props.showBack && (
                            <a href="/" aria-label="Zpět do hlavního menu">
                                <span className={styles['svg__text']}>Zpět</span>
                                <Icon icon="ui-back" size="24" />
                            </a>
                        )}

                        {this.props.navState && (
                            <a aria-label="Zavřít hlavní menu" onClick={this.props.navToggle}>
                                <span className={styles['svg__text']}>Zavřít</span>
                                <Icon icon="ui-close" size="24" />
                            </a>
                        )}

                        {!this.props.navState && (
                            <a aria-label="Otevřít hlavní menu" onClick={this.props.navToggle}>
                                <span className={styles['svg__text']}>Menu</span>
                                <Icon icon="ui-menu" size="24" />
                            </a>
                        )}
                    </div>
                </header>
                { this.props.navState && <Navigation />}
            </>
        );
    }
}

export default Header;
