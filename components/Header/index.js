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
                    <a href="/">
                        <span className={styles['svg__text']}>Zpět</span>
                        <Icon icon="back" size="24" />
                    </a>
                    <a href="/">
                        <span className={styles['svg__text']}>Menu</span>
                        <Icon icon="menu" size="24" />
                    </a>
                </div>
            </header>
        );
    }
}

export default Header;
