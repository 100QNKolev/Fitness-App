import { useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { useForm } from "../../../hooks/useForm";
import styles from './AddComment.module.css';

export const AddComment = ({ onCommentSubmit }) => {

    const username = useContext(AuthContext);

    const {values, changeHandler, onSubmit} = useForm({
        comment: '',
        username
    }, onCommentSubmit);

    return (
        <div>
            <div className={styles['logo']}></div>
            <div className={styles['comment-block']}>
                <form onSubmit={onSubmit} method="POST" >
                    <h1>Add Comment</h1>
                    <input type="text" placeholder="comment" value={values.comment} onChange={changeHandler} name="comment" id="comment" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
};