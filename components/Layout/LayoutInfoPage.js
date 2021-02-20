import styles from './Layout.scss';
import Illustration from '../Illustration';

export function LayoutInfoPage(props) {
    return (
        <>
            <div className={styles['layout__content']}>
                <div className={styles['info-page__illustration']}>
                    <div className={styles['illustration__container']}>
                        <Illustration illustration={'error500'} />
                    </div>
                </div>
                <div className={styles['info-page__content']}>
                    <div className={styles['content-container']}>
                        <h1 className={styles['headline--medium']}>{props.title}</h1>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
}
