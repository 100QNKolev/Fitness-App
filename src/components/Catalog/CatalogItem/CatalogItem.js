import styles from './CatalogItem.module.css';

export const CatalogItem = ({
    title,
    thumbnailUrl,
}) => {
    return (
        <div className={styles['post']}>
            <div className={styles['post-info']}>
                <img className={styles['image']} src={thumbnailUrl} />
                <h2 className={styles['heading']}>{title}</h2>
                <div className={styles['detailsButton']}>
                    <a className={styles['details-button']}>Details</a>
                </div>
            </div>
        </div>
    )
};