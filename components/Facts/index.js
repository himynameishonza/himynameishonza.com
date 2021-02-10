import React from 'react';
import styles from './Facts.scss';
import facts from '../../public/static/facts.js';
import classnames from 'classnames';

function Facts() {
    let fact = facts[Math.floor(Math.random() * facts.length)];

    return (
        <section className={styles['facts']} aria-label="Sekce (Bez)významná fakta">
            <div className={styles['facts__content']}>
                <h3 className={classnames(styles['text--no-margin'], styles['text--margin-bottom-tiny'])}>(Bez)významná fakta</h3>
                <p className={styles['text--no-margin']}>
                    <strong>{fact.content}</strong>
                </p>
            </div>
        </section>
    );
}

export default Facts;
