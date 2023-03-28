import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useService } from "../../hooks/useService";
import styles from './Details.module.css';
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AddComment } from "./AddComment/AddComment";
import { commentServiceFactory } from "../../services/commentService";
import { useAuthContext } from "../../contexts/authContext";
import { usePostContext } from "../../contexts/gameContext";

export const Details = () => {

    const { postId } = useParams();
    const {getOne} = usePostContext();
    const [post, setPost] = useState({});
    const { } = useForm({
        comment: '',

    });

    const { userId, isAuthenticated, onDeleteHandler } = useAuthContext();
    const commentService = useService(commentServiceFactory);

    const isOwner = post._ownerId === userId;

    useEffect(() => {
        Promise.all([
            getOne(postId),
            commentService.getAll(postId),
        ])
            .then(([postData, commentsData]) => {
                setPost({
                    ...postData,
                    comments: commentsData
                });
            });
    });

    const onCommentSubmit = async (values) => {
        const result = commentService.create(postId, values);

        setPost(state => ({
            ...state,
            comments: [...state.comments, result],
        }));
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
                    <div className="ownerButtons">
                        <Link to={`/catalog/${post._id}/edit`} className="button" >Edit</Link>
                        <button onClick={() => onDeleteHandler(post._id)} className="button">Delete</button>
                    </div>
                )}
                {post.comments && (
                    <div>
                        <h2>Comments:</h2>
                        <ul>
                            {post.comments && Object.values(post.comments)
                                .map(x => (<li key={x._id}>
                                    <p>{x.username}: {x.comment}</p>
                                </li>))}
                        </ul>
                    </div>
                )}
                {isAuthenticated &&
                    <AddComment onCommentSubmit={onCommentSubmit} />
                }
                {!post.comments && (
                    <h1>No coments</h1>
                )}
            </div>
        </div>

    );
};