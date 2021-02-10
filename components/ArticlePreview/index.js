import React from 'react';
import styles from './ArticlePreview.scss';
import Icon from '../Icon';
import classnames from 'classnames';

export function HeroArticlePreview(props) {
    return (
        <article className={classnames(styles['article-preview'], styles['article-preview--hero'])}>
            <a href={props.link} aria-label={'Odkaz na článek ' + props.title + ' z rubriky ' + props.category}>
                <div className={styles['hero__image']}>
                    <div className={styles['image__container']}>
                        <div className={styles['image__decoration']}></div>
                    </div>
                </div>
                <div className={styles['hero__content']}>
                    <h3 className={styles['text--margin-bottom-tiny']}>{props.category}</h3>
                    <h2>
                        {props.title}
                        <span>
                            <Icon icon="ui-forward" size="16" />
                        </span>
                    </h2>
                    <p>{props.excerpt}</p>
                </div>
            </a>
        </article>
    );
}

export function SidecarArticlePreview(props) {
    return (
        <article className={classnames(styles['article-preview'], styles['article-preview--sidecar'])}>
            <a href={props.link} aria-label={'Odkaz na článek ' + props.title + ' z rubriky ' + props.category}>
                <h2 className={classnames(styles['headline--medium'], styles['text--no-margin'], styles['text--margin-bottom-tiny'])}>
                    {props.title}
                    <span>
                        <Icon icon="ui-forward" size="16" />
                    </span>
                </h2>
                <p className={classnames(styles['paragraph--medium'], styles['text--no-margin'], styles['text--margin-bottom-big'])}>
                    {props.excerpt}
                </p>
            </a>
        </article>
    );
}

export function FeaturedArticlePreview(props) {
    return (
        <article className={classnames(styles['article-preview'], styles['article-preview--featured'])}>
            <a href={props.link} aria-label={'Odkaz na článek ' + props.title + ' z rubriky ' + props.category}>
                <div className={styles['hero__content']}>
                    <h3 className={styles['text--margin-bottom-tiny']}>{props.category}</h3>

                    <h2 className={classnames(styles['headline--medium'], styles['text--no-margin'], styles['text--margin-bottom-tiny'])}>
                        {props.title}
                        <span>
                            <Icon icon="ui-forward" size="16" />
                        </span>
                    </h2>
                    <p>{props.excerpt}</p>
                </div>
            </a>
        </article>
    );
}

export default HeroArticlePreview;
