import React from 'react';
import '../../styles/global.scss';
import styles from './Page.scss';
import Illustration from '../Illustration';
export class Page extends React.Component {
    render() {
        return (
            <div className={styles['page']}>
                <div className={styles['page__decoration']}></div>
            </div>
        );
    }
}

export default Page;
