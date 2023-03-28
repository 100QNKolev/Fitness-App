import { useForm } from "../../../hooks/useForm";
import styles from './AddComment.module.css';
import { useAuthContext } from "../../../contexts/authContext";

export const AddComment = ({ onCommentSubmit }) => {

    const {username} = useAuthContext();

    const {values, changeHandler, onSubmit} = useForm({
        comment: '',
        username: username,
    }, onCommentSubmit);

    return (
        <div>
            <div className={styles['logo']}></div>
            <div className={styles['comment-block']}>
                <form onSubmit={onSubmit} method="POST" >
                    <h1>Add Comment</h1>
                    <input type="text" placeholder="Username" value={values.username} name="username" id="username" disabled/>
                    <input type="text" placeholder="Comment" value={values.comment} onChange={changeHandler} name="comment" id="comment" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
};