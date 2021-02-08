import React from 'react';
import styles from './Header.scss';

export class Header extends React.Component {
    render() {
        return <header className={styles['header']}></header>;
    }
}

export default Header;
