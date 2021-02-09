import React from 'react';
import styles from './Button.scss';
import classnames from 'classnames';

export class Button extends React.Component {
    render() {
        return this.props.href ? (
            <a href className={classnames(styles['button'], styles['button--' + this.props.type])}>
                {this.props.label}
            </a>
        ) : (
            <button
                onClick={this.props.onclick}
                className={classnames(styles['button'], styles['button--' + this.props.type])}
            >
                {this.props.label}
            </button>
        );
    }
}

export class ButtonGroup extends React.Component {
    render() {
        return (
            <div href className={styles['button-group']}>
                {this.props.children}
            </div>
        );
    }
}
