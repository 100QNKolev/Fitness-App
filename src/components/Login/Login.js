import styles from './Login.module.css';
import { useForm } from '../../hooks/useForm';

export const Login = ({ onLoginSubmit }) => {

    const { values, changeHandler, onSubmit } = useForm({
        email: "",
        password: "",
    }, onLoginSubmit);

    return (
        <div>
            <div className={styles['logo']}></div>
            <div className={styles['login-block']}>
                <form onSubmit={onSubmit} method="POST" >
                    <h1>Login</h1>
                    <input type="text" placeholder="Email" value={values.email} onChange={changeHandler} name="email" id="email" />
                    <input type="password" placeholder="Password" value={values.password} onChange={changeHandler} name="password" id="password" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
};