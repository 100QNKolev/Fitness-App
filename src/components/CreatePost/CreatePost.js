import { useState } from 'react';
import styles from './CreatePost.module.css';

export const CreatePost = ({onSubmitHandler}) => {

    const [values, setValues] = useState({
        title: '',
        thumbnailUrl: '',
        description: '',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {
        onSubmitHandler(values);
    };

    return (
        <div>
                <div className={styles['logo']}></div>
                <div className={styles['createPost-block']}>
                    <h1>Create Post</h1>
                    <input value={values.title} onChange={onChangeHandler} type="text" placeholder="Title" id="title" name="title" />
                    <input value={values.thumbnailUrl} onChange={onChangeHandler} type="text" placeholder="Thumbnail URL" id="thumbnailUrl" name="thumbnailUrl" />
                    <textarea value={values.description} onChange={onChangeHandler} placeholder="Description" id="description" name="description"/>
                    <button onClick={onSubmit}>Submit</button>
                </div>
        </div>
    )
};