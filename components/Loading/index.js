import React, {useState, useEffect} from 'react';
import styles from './Loading.scss';
import classnames from 'classnames';

function Loading(props) {
    const [status, setStatus] = useState(false);

    useEffect(() => {
        props.show ? setStatus(true) : setStatus(false);
    });

    return (
        <>
            <div className={classnames(styles['loading'], {[styles['loading--hide']]: status})}>
                <div className={styles['loading__spinner']}>
                    <div />
                    <div />
                    <div />
                </div>
                <h2>Načítám...</h2>
            </div>
        </>
    );
}

export default Loading;
