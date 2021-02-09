import React from 'react';
import styles from './Loading.scss';

export class Loading extends React.Component {
    render() {
        return (<div className={styles['loading']}>
            <div className={styles['loading__spinner']}>
                <div />
                <div />
                <div />
            </div>
            <h2>Načítám...</h2>
        </div>
        )
    }
}

export default Loading;
