import React from 'react';
import styles from './Button.scss';
import classnames from 'classnames';

export function Button(props) {
    return props.href ? (
        <a href className={classnames(styles['button'], styles['button--' + props.type])}>
            {props.label}
        </a>
    ) : (
        <button
            onClick={props.onclick}
            className={classnames(styles['button'], styles['button--' + props.type])}
        >
            {props.label}
        </button>
    );
}

export function ButtonGroup(props) {
    return (
        <div
            href
            className={classnames(styles['button-group'], {
                [styles['button-group--centered']]: props.centered,
            })}
        >
            {props.children}
        </div>
    );
}
