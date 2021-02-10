import React from 'react';
import styles from './Facts.scss'
import Icon from '../Icon'
import facts from "../../public/static/facts.js";
import classnames from 'classnames'

export class Facts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fact: facts[Math.floor(Math.random() * facts.length)]
        };
    }

    render() {
        return (
            <section className={styles['facts']}>
                <div className={styles['facts__content']}>
                    <h3 className={styles['text--no-margin']}>Bezvýznamná fakta</h3>
                    <p className={styles['text--no-margin']}>{this.state.fact.content}</p>
                </div>

                <div className={styles['facts__icon']}>
                    <Icon icon="ui-fact" />
                </div>
            </section >
        );
    }
}

export default Facts;
