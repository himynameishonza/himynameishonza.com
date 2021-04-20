import React from 'react';
import classnames from 'classnames';
import styles from './FeedPost.scss';
import urlParser from "js-video-url-parser";
import { serializers, dateFormater, monthFormater, timeFormatter } from '../../utils';
import PlyrPlayer from "../PlyrPlayer";

import BlockContent from '@sanity/block-content-to-react';
export function FeedPost(props) {
    const attachmentData = urlParser.parse(props.attachment)

    return (
        <article className={styles["feed-post"]}>
            <div className={styles["feed-post__header"]}>
                <h3 className={classnames(styles['headline--medium'], styles['text--no-margin'])}>
                    {dateFormater(props.publishedAt) + '. ' + monthFormater(props.publishedAt) + ' ' + timeFormatter(props.publishedAt)}
                </h3>
                <div className={styles['content-type']}>{props.contentType[0]}</div>
            </div>
            <BlockContent blocks={props.body} serializers={serializers} />
            {props.attachment && props.contentType[0] === 'video' ? <PlyrPlayer type="video" provider={attachmentData.provider} source={attachmentData.id} /> : <div dangerouslySetInnerHTML={{ __html: props.attachment }} />}
        </article>
    );
}

