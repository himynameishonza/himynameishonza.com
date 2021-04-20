import React from 'react';
import classnames from 'classnames';
import styles from './FeedPost.scss';
import Icon from '../Icon';
import urlParser from 'js-video-url-parser';
import {serializers, dateFormater, monthFormater, timeFormatter} from '../../utils';
import PlyrPlayer from '../PlyrPlayer';

import BlockContent from '@sanity/block-content-to-react';
export function FeedPost(props) {
    const attachmentData = urlParser.parse(props.data.attachment);

    return (
        <article className={styles['feed-post']}>
            <div className={styles['feed-post__header']}>
                <h3 className={classnames(styles['headline--medium'], styles['text--no-margin'])}>
                    {dateFormater(props.data.publishedAt) +
                        '. ' +
                        monthFormater(props.data.publishedAt) +
                        ' ' +
                        timeFormatter(props.data.publishedAt)}
                </h3>
                <div className={styles['header__content-type']}>{props.data.contentType[0]}</div>
            </div>
            <div className={styles['feed-post__body']}>
                <BlockContent blocks={props.data.body} serializers={serializers} />
                {props.data.attachment && props.data.contentType[0] === 'video' ? (
                    <PlyrPlayer
                        type="video"
                        provider={attachmentData.provider}
                        source={attachmentData.id}
                    />
                ) : (
                    <div dangerouslySetInnerHTML={{__html: props.data.attachment}} />
                )}
            </div>
            <div className={styles['feed-post__footer']}>
                <div className={styles['footer__tags']}>
                    <ul>
                        {props.data.tags.map(tag => (
                            <li>#{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles['footer__counter']}>
                    readLikedFeedPosts
                    <Icon icon="ui-unlike" size="24" />
                    <span>234</span>
                </div>
            </div>
        </article>
    );
}
