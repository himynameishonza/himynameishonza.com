import React from 'react';
import styles from './Footer.scss';

const d = new Date();
const n = d.getFullYear();

export class Footer extends React.Component {
    render() {
        return (
            <footer className={styles['footer']}>

                <div className={styles['footer__left']}>
                    &copy; {n} himynameishonza.com
                    </div>

                <div className={styles['footer__right']}>
                    <ul>
                        <li><a href="/" aria-label="Odkaz na stránku Podpořit web">Podpořit web</a></li>
                        <li><a href="/" aria-label="Odkaz na stránku GDPR &amp; Cookies">GDPR &amp; Cookies</a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;
