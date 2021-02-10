import React from 'react';
import '../../styles/global.scss';
import styles from './Page.scss';
import Facts from '../Facts';
import SideContent from '../SideContent';
import classnames from 'classnames';
export class Page extends React.Component {
    render() {
        return (
            <div className={classnames(styles['page'], styles['page--' + this.props.type])}>
                <div className={styles['page__content']}>
                    <div className={styles['hero-article']}>asdasd</div>
                    <div className={styles['article-1']}>asd</div>
                    <div className={styles['article-2']}>ad</div>
                    <div className={styles['article-3']}>asddasd</div>
                    <div className={styles['side-content']}>
                        <Facts />
                        <SideContent />
                    </div>
                </div>
                <div className={styles['page__decoration']} />
            </ div>
        );
    }
}

export default Page;
