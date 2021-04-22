import React from 'react';
import classnames from 'classnames';
import styles from './FeedPost.scss';
import urlParser from "js-video-url-parser";
import { serializers, dateFormater, monthFormater, timeFormatter } from '../../utils';
import PlyrPlayer from "../PlyrPlayer";
import './index.scss'
import BlockContent from '@sanity/block-content-to-react';

export function FeedPost(props) {
    let attachmentType = props.attachmentType[0];
    const attachmentData = urlParser.parse(props.attachment)

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
            <BlockContent blocks={props.body} serializers={serializers} />
            {props.attachment && attachmentType === 'video' ? <PlyrPlayer type="video" provider={attachmentData.provider} source={attachmentData.id} /> : null}
            {props.attachment && attachmentType === 'embed' ? <div dangerouslySetInnerHTML={{ __html: props.attachment }} /> : null}

        </article>
    );
}
