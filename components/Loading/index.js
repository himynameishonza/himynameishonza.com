import React, { useState, useEffect } from 'react';
import styles from './Loading.scss';
import classnames from 'classnames';

function Loading(props) {
    const [status, setStatus] = useState(true);

    useEffect(() => {
        setTimeout(
            () => {
                setStatus(false);
            },
            2000
        );
    });

    return (

        <div className={classnames(styles['loading'], { [styles['loading--hide']]: !status })}>
            <div className={styles['loading__spinner']}>
                <div />
                <div />
                <div />
            </div>
            <h2>Načítám...</h2>
        </div>
    )
}

export default Loading;
