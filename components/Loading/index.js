import React from 'react';
import styles from './Loading.scss';
import classnames from 'classnames';
export class Loading extends React.Component {
    render() {
        return (<div className={classnames(styles['loading'], { [styles['loading--hide']]: this.props.hide })}>
            <div className={styles['loading__spinner']}>
                <div />
                <div />
                <div />
            </div>
            <h2>Načítám...</h2>
        </ div>
        )
    }
}

export default Loading;
