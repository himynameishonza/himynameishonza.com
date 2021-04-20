import styles from './Layout.scss';
import { FeedPost } from '../FeedPost';
import classnames from 'classnames';

export function LayoutFeed(props) {
    return (

        <div className={styles['layout__content']}>
            <div className={styles['container--archive']}>
                <h3
                    className={classnames(
                        styles['headline--large'],
                        styles['text--margin-bottom-large']
                    )}
                >Feed</h3>

                {props.data.map(post => (<FeedPost publishedAt={post.publishedAt} contentType={post.contentType} body={post.body} attachment={post.attachment} />))}

                <div className={styles['end-of-feed']}>Začátek feedu. Nebo teda konec. Prostě tu už nic dalšího neni!</div>
            </div>
        </div>
    );
}
