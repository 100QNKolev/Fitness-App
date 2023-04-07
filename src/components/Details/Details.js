import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";

import { useService } from "../../hooks/useService";
import { AddComment } from "./AddComment/AddComment";
import { commentServiceFactory } from "../../services/commentService";
import { useAuthContext } from "../../contexts/authContext";
import { usePostContext } from "../../contexts/postContext";
import { Comment } from "./templates/Comment/Comment";

import styles from './Details.module.css';

export const Details = () => {

    const { postId } = useParams();
    const { userId, isAuthenticated } = useAuthContext();
    const { getOnePost, deletePostHandler } = usePostContext();

    const commentService = useService(commentServiceFactory);
    
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const isOwner = post._ownerId === userId;

    useEffect(() => {
        Promise.all([
            getOnePost(postId),
            commentService.getAll(postId),
        ])
            .then(([postData, commentsData]) => {
                setComments(commentsData === undefined ? [] : commentsData);
                setPost({
                    ...postData,
                });
            });
            // eslint-disable-next-line
    }, [postId]);

    const onCommentSubmit = async (values) => {
        const result = await commentService.create(postId, values);

        setComments(state => (
            state = [
            ...state, result,
            ]));
    };

    return (

        <div>
            <div className={styles['logo']}></div>
            <div className={styles['details-block']}>
                <div className={styles['heading']}>
                    <h1>{post.title}</h1>
                </div>
                <div className={styles['description']}>
                    <p>{post.description}</p>
                </div>
                {isOwner && (
                    <div className={styles['ownerButtons']}>
                        <Link to={`/catalog/${post._id}/edit`} className={styles['button']} >Edit</Link>
                        <button onClick={() => deletePostHandler(post._id)} className={styles['button']}>Delete</button>
                    </div>
                )}
                {comments.length === 0 && (
                    <div className={styles['heading']}>
                        <h1 style={{ marginTop: 50 }}>No coments</h1>
                    </div>
                )}
                {comments.length > 0 && (
                    <div className={styles['comment-section']}>
                        <h2 className={styles['comments-heading']}>Comments:</h2>
                        <ul>
                            {comments
                                .map(x => (
                                    <div key={x._id} style={{ marginTop: 5 }} >
                                        <Comment currentComment={x} />
                                    </div>
                                ))}
                        </ul>
                    </div>
                )}
                {isAuthenticated &&
                    <AddComment onCommentSubmit={onCommentSubmit} />
                }
            </div>
        </div>

    );
};