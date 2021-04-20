import React from 'react';
import styles from './Navigation.scss';
import quotes from '../../public/static/quotes.js';
import { useSpring, animated } from 'react-spring'

function Navigation(props) {
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } })
    return (
        <section className={styles['navigation']}>
            <div className={styles['nav__illustration']}>
                <animated.div style={fade}>
                    <blockquote className={styles['quote']}>
                        {quote.content}
                        <cite>– {quote.author}</cite>
                    </blockquote>
                </animated.div>
            </div>
            <nav className={styles['nav__content']}>
                <animated.div style={fade}>
                    <ul>
                        <li>
                            <a href="/denik">
                                Deník<span>Všechno to, co se mi nechce dávat jinam</span>
                            </a>
                        </li>
                        <li>
                            <a href="/rubrika/knihy">
                                Knihy<span>Recenze a doporučení na četbu</span>
                            </a>
                        </li>
                        <li>
                            <a href="/rubrika/filmy">
                                Filmy<span>Stručné recenze filmů</span>
                            </a>
                        </li>
                        {/* <li>
                        <a href="/rubrika/hry">
                            Hry<span>Recenze nových i starých her</span>
                        </a>
                    </li> */}
                        <li>
                            <a href="/rubrika/povidky">
                                Povídky<span>Povídky a novely</span>
                            </a>
                        </li>
                        {/* <li>
                        <a href="/rubrika/blog">
                            Blog<span>Cokoliv mě zrovna napadne</span>
                        </a>
                    </li> */}
                        <li>
                            <a href="/rubrika/venku-zase-prsi">
                                Venku zase prší<span>O tramvajích, dešti a stupidních lidech</span>
                            </a>
                        </li>
                        <li>
                            <a href="/rubrika/texty">
                                Texty<span>...a jednou k nim bude i hudba</span>
                            </a>
                        </li>
                    </ul></animated.div>
            </nav>
        </section>
    );
}

export default Navigation;
