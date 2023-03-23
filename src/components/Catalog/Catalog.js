import { CatalogItem } from './CatalogItem/CatalogItem';
import styles from './Catalog.module.css';

export const Catalog = ({ posts }) => {
 return (
        <div>
            {posts.map(x =>
                <CatalogItem key={x._id} {...x} />
            )}

            {posts.length === 0 && (<h1>No posts yet!</h1>)}
        </div>
    )
};