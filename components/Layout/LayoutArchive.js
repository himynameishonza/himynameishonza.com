import styles from './Layout.scss';
import {HeroArticlePreview, ArchiveArticlePreview} from '../ArticlePreview';

export function LayoutArchive(props) {
    return (
        <>
            <div className={styles['layout__content']}>
                <div className={styles['content-container']}>
                    <HeroArticlePreview
                        category={'knihy'}
                        title={props.data[0].title}
                        link={'/' + props.data[0].slug.current}
                        excerpt={props.data[0].body}
                        mainImage={props.data[0].mainImage}
                    />
                    {props.data.slice(1).map(article => (
                        <ArchiveArticlePreview
                            category={'knihy'}
                            title={article.title}
                            link={'/' + article.slug.current}
                            excerpt={article.body}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
