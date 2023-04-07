import { Link } from 'react-router-dom';

import styles from './Post.module.css';

export const Post = ({
    title,
    thumbnailUrl,
    _id,
}) => {
    return (
        <div className={styles['post']}>
            <div className={styles['post-info']}>
                <img className={styles['image']} src={thumbnailUrl} alt='post thumbnail'/>
                <h2 className={styles['heading']}>{title}</h2>
                <div className={styles['detailsButton']}>
                    <Link to={`/catalog/${_id}`} className={styles['details-button']}>Details</Link>
                </div>
            </div>
        </div>
    )
};