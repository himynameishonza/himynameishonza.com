import React from 'react';
import styles from './Navigation.scss';
import quotes from '../../public/static/quotes.js';

function Navigation(props) {

    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    return <section className={styles["navigation"]}>
        <div className={styles['nav__illustration']}>
            <blockquote className={styles['quote']}>{quote.content}<cite>– {quote.author}</cite></blockquote>
            {/* <Illustration illustration='navigation' /> */}
        </div>
        <nav className={styles['nav__content']}>
            <ul>
                <li><a href="/">Knihy<span>Recenze a doporučení na četbu</span></a></li>
                <li><a href="/">Filmy<span>Stručné recenze filmů</span></a></li>
                <li><a href="/">Hry<span>Recenze nových i starých her</span></a></li>
                <li><a href="/">Povídky<span>Povídky a novely</span></a></li>
                <li><a href="/">Blog<span>Cokoliv mě zrovna napadne</span></a></li>
                <li><a href="/">Venku zase prší<span>O tramvajích, dešti a stupidních lidech</span></a></li>
                <li><a href="/">Texty<span>...a jednou k nim bude i hudba</span></a></li>
            </ul>
        </nav>
    </section >;

}

export default Navigation;
