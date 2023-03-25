import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useService } from "../../hooks/useService";
import { postServiceFactory } from '../../services/postService';
import styles from './Details.module.css';
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Details = ({onDeleteHandler}) => {

    const { postId } = useParams();
    const [post, setPost] = useState({});

    const { userId } = useContext(AuthContext);
    //const [username, setUsername] = useState('');
    //const [comment, setComment] = useState('');

    const postService = useService(postServiceFactory);

    useEffect(() => {
        postService.getOne(postId)
            .then(result => {
                setPost(result);
            })
    }, [postId, postService]);

    //const onCommentSubmit = async (e) => {
    //    e.preventDefault();
    //
    //    const result = await postService.addComment(postId, {
    //        username,
    //        comment,
    //    });
    //
    //    setPost(state => ({...state, comments: {...state.comments, [result._id]: result}}));
    //    setUsername('');
    //    setComment('');
    //};

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
                {post._ownerId === userId && (
                    <div className="ownerButtons">
                        <Link to={`/catalog/${post._id}/edit`} className="button" >Edit</Link>
                        <button onClick={() => onDeleteHandler(post._id)} className="button">Delete</button>
                    </div>
                )}
            </div>
        </div>

    );

};