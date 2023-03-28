import { useForm } from '../../hooks/useForm';
import styles from './CreatePost.module.css';
import { usePostContext } from '../../contexts/gameContext';

export const CreatePost = () => {

    const {onCreateSubmit} = usePostContext();

    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        thumbnailUrl: '',
        description: '',
    }, onCreateSubmit );

    return (
        <div>
            <div className={styles['logo']}></div>
            <div className={styles['createPost-block']}>
                <form onSubmit={onSubmit}>
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