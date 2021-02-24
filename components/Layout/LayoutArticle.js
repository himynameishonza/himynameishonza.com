import styles from './Layout.scss';
import Image from 'next/image';
import BlockContent from '@sanity/block-content-to-react';
import { serializers, urlFor, readingTime, dateFormater, monthFormater } from '../../utils';
import { readThemeCookie } from '../../utils/cookies';
import { useSpring, animated } from 'react-spring'

export function LayoutArticle(props) {
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } })
    return (
        <>
            <div className={styles['layout__content']}>
                <div className={styles['article__hero']}>
                    {props.data.mainImage && (
                        <animated.div style={fade}>
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
                        </animated.div>
                    )}
                </div>
                <div className={styles['article__content']}>
                    <div className={styles['container--article']}>
                        <h1 className={styles['headline--medium']}>{props.data.title}</h1>
                        {props.data.categoryNames[0].title !== 'Texty' ?
                            <h3 className={styles['headline--medium']}>
                                {props.data.categoryNames[0].title === 'Venku zase prší' || props.data.categoryNames[0].title === 'Texty'
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
                            </h3> : null}
                        <div className={styles['content__hero']}>
                            {props.data.mainImage && (
                                <animated.div style={fade}>
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
                                </animated.div>
                            )}
                        </div>

                        <BlockContent blocks={props.data.body} serializers={serializers} />
                    </div>
                </div>
            </div>
        </>
    );
}
