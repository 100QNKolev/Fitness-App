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
        <div>
        <div className={styles['logo']}></div>
        <div className={styles['contact-block']}>
            <form onSubmit={onSubmit} method="POST" >
                <h1>Contact us</h1>
                <input type="text" placeholder="Username" value={values.username} onChange={changeHandler} name="username" id="username" />
                <input type="text" placeholder="Email" value={values.email} onChange={changeHandler} name="email" id="email" />
                <input type="text" placeholder="Question" value={values.question} onChange={changeHandler} name="question" id="question" />
                <button>Submit</button>
            </form>
        </div>
    </div>
    );
};