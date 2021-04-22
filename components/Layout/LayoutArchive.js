import styles from './Layout.scss';
import { ArchiveArticlePreview } from '../ArticlePreview';
import classnames from 'classnames';

export function LayoutArchive(props) {
    return (
        <>
            <div className={styles['layout__content']}>
                <div className={styles['container--archive']}>
                    <h3
                        className={classnames(
                            styles['headline--large'],
                            styles['text--margin-bottom-large']
                        )}
                    >
                        {props.data[0].categoryNames[0].title}
                    </h3>
                    <ArchiveArticlePreview
                        title={props.data[0].title}
                        link={'/' + props.data[0].slug.current}
                        excerpt={props.data[0].body}
                        mainImage={props.data[0].mainImage}
                        mainImageDark={props.data[0].mainImageDark}
                    />
                    {props.data.slice(1).map(article => (
                        <ArchiveArticlePreview
                            key={article.title}
                            title={article.title}
                            link={'/' + article.slug.current}
                            excerpt={article.body}
                            mainImage={article.mainImage}
                            mainImageDark={article.mainImageDark}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
