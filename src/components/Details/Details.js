import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as postService from '../../services/postService';
import styles from './Details.module.css';

export const Details = () => {

    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    useEffect(() => {
        postService.getOne(postId)
            .then(result => {
                setPost(result);
            })
    }, [postId]);

    const onCommentSubmit = async (e) => {
        e.preventDefault();

        const result = await postService.addComment(postId, {
            username,
            comment,
        });

        setPost(state => ({...state, comments: {...state.comments, [result._id]: result}}));
        setUsername('');
        setComment('');
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
            </div>
        </div>

    );

};