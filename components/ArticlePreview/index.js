import React from 'react';
import Image from 'next/image';
import { plainText, urlFor } from '../../utils';
import Icon from '../Icon';
import classnames from 'classnames';
import styles from './ArticlePreview.scss';
import { readThemeCookie } from '../../utils/cookies';
import { useSpring, animated } from 'react-spring'

export function HeroArticlePreview(props) {
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } })
    return (
        <article className={classnames(styles['article-preview'], styles['article-preview--hero'])}>
            <a
                href={props.link}
                aria-label={'Odkaz na článek ' + props.title + ' z rubriky ' + props.category}
            >
                <div className={styles['hero__image']}>
                    <animated.div style={fade}>
                        <div className={styles['image__container']}>

                            <Image
                                alt="Image"
                                src={
                                    readThemeCookie() === 'dark' && props.mainImageDark !== undefined
                                        ? urlFor(props.mainImageDark).width().url()
                                        : urlFor(props.mainImage).width().url()
                                }
                                layout="fill"
                                objectFit="cover"
                                quality={process.env.IMAGE_QUALITY}
                                loading="lazy"
                                nopin="nopin"
                            />
                        </div>
                    </animated.div>

                    <div className={styles['image__decoration']}></div>
                </div>
                <div className={styles['hero__content']}>
                    <h3 className={styles['text--margin-bottom-tiny']}>{props.category}</h3>
                    <h2>
                        {props.title}
                        <span>
                            <Icon icon="ui-forward" size="18" />
                        </span>
                    </h2>
                    <p>{plainText(props.excerpt)}</p>
                </div>
            </a>
        </article>
    );
}

export function SidecarArticlePreview(props) {
    return (
        <article
            className={classnames(styles['article-preview'], styles['article-preview--sidecar'])}
        >
            <a
                href={props.link}
                aria-label={'Odkaz na článek ' + props.title + ' z rubriky ' + props.category}
            >
                <h2
                    className={classnames(
                        styles['headline--medium'],
                        styles['text--no-margin'],
                        styles['text--margin-bottom-tiny']
                    )}
                >
                    {props.title}
                    <span>
                        <Icon icon="ui-forward" size="12" />
                    </span>
                </h2>
                <p
                    className={classnames(
                        styles['paragraph--small'],
                        styles['text--no-margin'],
                        styles['text--margin-bottom-big']
                    )}
                >
                    {plainText(props.excerpt)}
                </p>
            </a>
        </article>
    );
}

export function FeaturedArticlePreview(props) {
    return (
        <article
            className={classnames(styles['article-preview'], styles['article-preview--featured'])}
        >
            <a
                href={props.link}
                aria-label={'Odkaz na článek ' + props.title + ' z rubriky ' + props.category}
            >
                <div className={styles['hero__content']}>
                    <h3 className={styles['text--margin-bottom-tiny']}>{props.category}</h3>
                    <h2
                        className={classnames(
                            styles['headline--medium'],
                            styles['text--no-margin'],
                            styles['text--margin-bottom-tiny']
                        )}
                    >
                        {props.title}
                        <span>
                            <Icon icon="ui-forward" size="16" />
                        </span>
                    </h2>
                    <p>{plainText(props.excerpt)}</p>
                </div>
            </a>
        </article>
    );
}

export function ArchiveArticlePreview(props) {
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } })
    return (
        <article
            className={classnames(styles['article-preview'], styles['article-preview--archive'])}
        >
            <a
                href={props.link}
                aria-label={'Odkaz na článek ' + props.title + ' z rubriky ' + props.category}
            >
                <div className={styles['hero__image']}>
                    <animated.div style={fade}>
                        <div className={styles['image__container']}>
                            <Image
                                alt="Image"
                                src={
                                    readThemeCookie() === 'dark' && props.mainImageDark !== undefined
                                        ? urlFor(props.mainImageDark).width().url()
                                        : urlFor(props.mainImage).width().url()
                                }
                                layout="fill"
                                objectFit="cover"
                                quality={process.env.IMAGE_QUALITY}
                                loading="lazy"
                                nopin="nopin"
                            />
                        </div>
                    </animated.div>

                    <div className={styles['image__decoration']}></div>
                </div>
                <div className={styles['hero__content']}>
                    <h2
                        className={classnames(
                            styles['headline--medium'],
                            styles['text--no-margin'],
                            styles['text--margin-bottom-tiny']
                        )}
                    >
                        {props.title}
                        <span>
                            <Icon icon="ui-forward" size="16" />
                        </span>
                    </h2>
                    <p>{plainText(props.excerpt)}</p>
                </div>
            </a>
        </article>
    );
}

export default HeroArticlePreview;
