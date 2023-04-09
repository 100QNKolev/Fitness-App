import { useState } from 'react';

import { useForm } from '../../hooks/useForm';
import { usePostContext } from '../../contexts/postContext';

import styles from './CreatePost.module.css';

export const CreatePost = () => {

    const { onCreateSubmit } = usePostContext();
    const [formErrors, setFormErrors] = useState([]);
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        thumbnailUrl: '',
        description: '',
    }, onCreateSubmit);

    const validateData = async (e) => {
        e.preventDefault();

        if (values.title.length > 27) {
            setFormErrors(["Title can up to 27 symbols"]);
        }
        else {
            onSubmit(e);
        }
    };

    return (
        <div>
            {formErrors.length > 0 && (

                formErrors.map(x => (
                    <div key={x} className={styles['error']}>
                        <h2>{x}</h2>
                    </div>
                ))

            )}
            <div className={styles['logo']}></div>
            <div className={styles['createPost-block']}>
                <form onSubmit={validateData}>
                    <h1>Create Post</h1>
                    <input value={values.title} onChange={changeHandler} type="text" placeholder="Title" id="title" name="title" />
                    <input value={values.thumbnailUrl} onChange={changeHandler} type="text" placeholder="Thumbnail URL" id="thumbnailUrl" name="thumbnailUrl" />
                    <textarea value={values.description} onChange={changeHandler} placeholder="Description" id="description" name="description" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
};