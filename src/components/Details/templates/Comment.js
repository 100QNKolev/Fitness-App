import styles from './Comment.module.css';

export const Comment = ({currentComment}) => {
    const {username, comment, _id} = currentComment;
   
    return (
        <div className={styles['comment-div']}>
            <li key={_id} className={styles['comment-li']}>
                <p>{username}: {comment}</p>
            </li>
        </div>
    );
};