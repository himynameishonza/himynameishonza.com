import styles from './Layout.scss';
import Image from 'next/image';
import BlockContent from '@sanity/block-content-to-react';
import {serializers, urlFor, readingTime, dateFormater, monthFormater} from '../../utils';
import {readThemeCookie} from '../../utils/cookies';

export function LayoutArticle(props) {
    return (
        <>
            <div className={styles['layout__content']}>
                <div className={styles['article__hero']}>
                    {props.data.mainImage && (
                        <Image
                            alt="Image"
                            src={
                                readThemeCookie() === 'dark' &&
                                props.data.mainImageDark !== undefined
                                    ? urlFor(props.data.mainImageDark).width().url()
                                    : urlFor(props.data.mainImage).width().url()
                            }
                            layout="fill"
                            objectFit="cover"
                            quality={process.env.IMAGE_QUALITY}
                            loading="lazy"
                            nopin="nopin"
                        />
                    )}
                </div>
                <div className={styles['article__content']}>
                    <div className={styles['content-container']}>
                        <h1 className={styles['headline--medium']}>{props.data.title}</h1>

                        <h3 className={styles['headline--medium']}>
                            {props.data.categoryNames[0].title === 'Venku zase prší'
                                ? null
                                : dateFormater(props.data.publishedAt) +
                                  '. ' +
                                  monthFormater(props.data.publishedAt)}
                            {props.data.categoryNames[0].title === 'Venku zase prší' ? null : (
                                <span>|</span>
                            )}
                            <a
                                href={'/rubrika/' + props.data.categoryNames[0].slug}
                                aria-label={
                                    'Přejít do rubriky ' + props.data.categoryNames[0].title
                                }
                            >
                                {props.data.categoryNames[0].title}
                            </a>

                            <span>|</span>
                            {readingTime(props.data.body)}
                        </h3>
                        <div className={styles['content__hero']}>
                            {props.data.mainImage && (
                                <Image
                                    alt="Image"
                                    src={
                                        readThemeCookie() === 'dark' &&
                                        props.data.mainImageDark !== undefined
                                            ? urlFor(props.data.mainImageDark).width().url()
                                            : urlFor(props.data.mainImage).width().url()
                                    }
                                    layout="fill"
                                    objectFit="cover"
                                    quality={process.env.IMAGE_QUALITY}
                                    loading="lazy"
                                    nopin="nopin"
                                />
                            )}
                        </div>

                        <BlockContent blocks={props.data.body} serializers={serializers} />
                    </div>
                </div>
            </div>
        </>
    );
}
