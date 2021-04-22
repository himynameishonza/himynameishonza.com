import styles from './Layout.scss';
import { HeroArticlePreview, FeaturedArticlePreview } from '../ArticlePreview';
import Facts from '../Facts';
import SideContent from '../SideContent';

export function LayoutHomepage(props) {
    let markReadCookie = readMarkReadSetting();
    let showReadBadge = markReadCookie === 'true' ? true : false;
    return (
        <>
            <div className={styles['layout__content']}>
                <div className={styles['hero-article']}>
                    <HeroArticlePreview
                        category={props.data[0].categoryNames[0].title}
                        title={props.data[0].title}
                        link={'/' + props.data[0].slug.current}
                        excerpt={props.data[0].body}
                        mainImage={props.data[0].mainImage}
                        mainImageDark={props.data[0].mainImageDark}
                        markRead={showReadBadge && checkIfRead(props.data[0].slug.current)}
                    />
                </div>
                <div className={styles['featured-articles']}>
                    <FeaturedArticlePreview
                        category={props.data[1].categoryNames[0].title}
                        title={props.data[1].title}
                        link={'/' + props.data[1].slug.current}
                        excerpt={props.data[1].body}
                        markRead={showReadBadge && checkIfRead(props.data[1].slug.current)}
                    />

                    <FeaturedArticlePreview
                        category={props.data[2].categoryNames[0].title}
                        title={props.data[2].title}
                        link={'/' + props.data[2].slug.current}
                        excerpt={props.data[2].body}
                        markRead={showReadBadge && checkIfRead(props.data[2].slug.current)}
                    />

                    <FeaturedArticlePreview
                        category={props.data[3].categoryNames[0].title}
                        title={props.data[3].title}
                        link={'/' + props.data[3].slug.current}
                        excerpt={props.data[3].body}
                        markRead={showReadBadge && checkIfRead(props.data[3].slug.current)}
                    />
                </div>
                <div className={styles['side-content']}>
                    <Facts />
                    <SideContent data={props.dataVzp} />
                </div>
            </div>
            <div className={styles['layout__decoration']} />
        </>
    );
}
