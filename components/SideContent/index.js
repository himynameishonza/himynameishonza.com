import React from 'react';
import styles from './SideContent.scss'
import Icon from '../Icon';
import classnames from 'classnames'
import Link from 'next/Link'
export class SideContent extends React.Component {

    render() {
        return (
            <section className={styles['side-content']}>
                <h3 className={styles['text--no-margin']}>Venku zase prší</h3>


                <article className={styles['side-content__post']}>
                    <a href="/">
                        <h2 className={styles['headline--side']}>Třicet pět</h2>
                        <p className={styles['paragraph--side']}>U Glaubiců je plno. Bouřka zahnala půlku města do hospod. Pracuju s Honzou na třetím půllitru prazdroje a bavíme se o tom, jak se daří Rodenovi v jeho roli terepeuta Pošty. <Icon icon="ui-back" size="12" /></p>
                    </a>
                </article>
                <article className={styles['side-content__post']}>
                    <h2 className={styles['headline--side']}>Třicet pět</h2>
                    <p className={styles['paragraph--side']}>U Glaubiců je plno. Bouřka zahnala půlku města do hospod. Pracuju s Honzou na třetím půllitru prazdroje a bavíme se o tom, jak se daří Rodenovi v jeho roli terepeuta Pošty. </p>
                </article>

                <article className={styles['side-content__post']}>
                    <h2 className={styles['headline--side']}>Třicet pět</h2>
                    <p className={styles['paragraph--side']}>U Glaubiců je plno. Bouřka zahnala půlku města do hospod. Pracuju s Honzou na třetím půllitru prazdroje a bavíme se o tom, jak se daří Rodenovi v jeho roli terepeuta Pošty. </p>
                </article>

                <article className={styles['side-content__post']}>
                    <h2 className={styles['headline--side']}>Třicet pět</h2>
                    <p className={styles['paragraph--side']}>U Glaubiců je plno. Bouřka zahnala půlku města do hospod. Pracuju s Honzou na třetím půllitru prazdroje a bavíme se o tom, jak se daří Rodenovi v jeho roli terepeuta Pošty. </p>
                </article>

                <article className={styles['side-content__post']}>
                    <h2 className={styles['headline--side']}>Třicet pět</h2>
                    <p className={styles['paragraph--side']}>U Glaubiců je plno. Bouřka zahnala půlku města do hospod. Pracuju s Honzou na třetím půllitru prazdroje a bavíme se o tom, jak se daří Rodenovi v jeho roli terepeuta Pošty. </p>
                </article>

                <article className={styles['side-content__post']}>
                    <h2 className={styles['headline--side']}>Třicet pět</h2>
                    <p className={styles['paragraph--side']}>U Glaubiců je plno. Bouřka zahnala půlku města do hospod. Pracuju s Honzou na třetím půllitru prazdroje a bavíme se o tom, jak se daří Rodenovi v jeho roli terepeuta Pošty. </p>
                </article>

                <article className={styles['side-content__post']}>
                    <h2 className={styles['headline--side']}>Třicet pět</h2>
                    <p className={styles['paragraph--side']}>U Glaubiců je plno. Bouřka zahnala půlku města do hospod. Pracuju s Honzou na třetím půllitru prazdroje a bavíme se o tom, jak se daří Rodenovi v jeho roli terepeuta Pošty. </p>
                </article>
            </section >
        );
    }
}

export default SideContent;
