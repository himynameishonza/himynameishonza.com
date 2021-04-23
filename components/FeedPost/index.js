import React from 'react';
import classnames from 'classnames';
import urlParser from "js-video-url-parser";
import { serializers, dateFormater, monthFormater, timeFormatter } from '../../utils';
import PlyrPlayer from "../PlyrPlayer";
import BlockContent from '@sanity/block-content-to-react';
import styles from './FeedPost.scss';
import './index.scss'
import Microlink from '@microlink/react'
import styled from 'styled-components'
const MyCustomCard = styled(Microlink)`
  max-width: 100%;
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--color-divider);
  transition: color .24s, background .24s, border .24s;
  background: var(--color-bg);
  color: var(--color-main-text);

  header p {
      font-size: 16px;
      margin-top: 8px !important;
  }
  p {
    font-size: 15px;
    line-height: 1.3;
    font-family: serif;
    }

  :hover {
      background: var(--color-divider);
      border: 1px solid var(--color-link);
  }

  footer p {
      color: var(--color-link) !important;
  }
`

export default class FeedPost extends React.Component {
    render() {
        let attachmentType = this.props.attachmentType[0];
        const attachmentData = urlParser.parse(this.props.attachment)
        return <article className={styles['feed-post']}>
            <div className={styles['feed-post__header']}>
                <h3 className={classnames(styles['headline--medium'], styles['text--no-margin'])}>
                    {dateFormater(this.props.publishedAt) +
                        '. ' +
                        monthFormater(this.props.publishedAt) +
                        ' ' +
                        timeFormatter(this.props.publishedAt)}
                </h3>
                <div className={styles['header__content-type']}>{this.props.contentType[0]}</div>
            </div>
            <BlockContent blocks={this.props.body} serializers={serializers} />
            {this.props.attachment && attachmentType === 'video' ? <PlyrPlayer type="video" provider={attachmentData.provider} source={attachmentData.id} /> : null}
            {this.props.attachment && attachmentType === 'embed' ? <div dangerouslySetInnerHTML={{ __html: this.props.attachment }} /> : null}
            {this.props.attachment && attachmentType === 'link' ? <MyCustomCard url='https://denikn.cz/609256/kdyz-agresivni-rakovinne-bunky-chytnou-druhy-dech-vedci-z-brna-nasli-zpusob-jak-jim-prekazit-objizdku/?ref=tit1' size="large" /> : null}
        </article>
    }
}