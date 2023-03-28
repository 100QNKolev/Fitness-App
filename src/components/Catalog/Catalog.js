import { CatalogItem } from './CatalogItem/CatalogItem';
import { usePostContext } from '../../contexts/gameContext';

export const Catalog = () => {

    const {posts} = usePostContext();

 return (
        <div>
            {posts.map(x =>
                <CatalogItem key={x._id} {...x} />
            )}

            {posts.length === 0 && (<h1>No posts yet!</h1>)}
        </div>
    )
};