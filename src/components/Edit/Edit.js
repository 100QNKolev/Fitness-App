import { useForm } from '../../hooks/useForm';
import styles from './Edit.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useService } from '../../hooks/useService';
import { postServiceFactory } from '../../services/postService';

export const EditPost = ({ onSubmitHandler }) => {
   
    const { postId } = useParams();
    const postService = useService(postServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        title: '',
        thumbnailUrl: '',
        description: '',
    }, onSubmitHandler);
 
    useEffect(() => {
        postService.getOne(postId)
            .then(result => {
                changeValues(result);
            });
    }, [postId]);

    return (
        <div>
            <div className={styles['logo']}></div>
            <div className={styles['editPost-block']}>
                <form onSubmit={onSubmit}>
                    <h1>Edit Post</h1>
                    <input value={values.title} onChange={changeHandler} type="text" placeholder="Title" id="title" name="title" />
                    <input value={values.thumbnailUrl} onChange={changeHandler} type="text" placeholder="Thumbnail URL" id="thumbnailUrl" name="thumbnailUrl" />
                    <textarea value={values.description} onChange={changeHandler} placeholder="Description" id="description" name="description" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
};