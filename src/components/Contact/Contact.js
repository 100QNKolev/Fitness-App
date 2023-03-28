import styles from './Contact.module.css';
import { useAuthContext } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const Contact = () => {
    const { email, username } = useAuthContext();
    const navigate = useNavigate();

    const onContactSubmit = (values) => {
        navigate('/catalog');
    };

    const { values, changeHandler, onSubmit } = useForm({
        username: username,
        email: email,
        question: "",
    }, onContactSubmit);

    return (
        <form onSubmit={onSubmit} method="POST" >
            <input name="name" id="name" type="text" className={styles['feedback-input']} placeholder="Name" value={values.username} onChange={changeHandler}/>
            <input name="email" id="email" type="text" className={styles['feedback-input']} placeholder="Email" value={values.email} onChange={changeHandler}/>
            <textarea name="question" id="question" className={styles['feedback-input']} placeholder="Your Question" onChange={changeHandler}></textarea>
            <input type="submit" value="SUBMIT" />
        </form>
    );
};