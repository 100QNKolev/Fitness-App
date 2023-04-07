import { CatalogItem } from './templates/CatalogItem/CatalogItem';
import { usePostContext } from '../../contexts/postContext';

import styles from './Catalog.module.css';

export const Catalog = () => {

    const { posts } = usePostContext();

    return (
        <div>
            {posts.map(x =>
                <CatalogItem key={x._id} {...x} />
            )}

            {posts.length === 0 && (
                <div className={styles['heading']}>
                    <h1>No posts available</h1>
                </div>
            )}
        </div>
    )
};