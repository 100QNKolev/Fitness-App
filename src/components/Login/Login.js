import { useState } from 'react';

import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/authContext';
import { validateLogin } from '../../validators/authValidator';

import styles from './Login.module.css';

export const Login = () => {

    const { onLoginSubmit } = useAuthContext();

    const [formErrors, setFormErrors] = useState([]);
    const { values, changeHandler, onSubmit } = useForm({
        email: "",
        password: "",
    }, onLoginSubmit);

    const loginValidate = async (e) => {
        e.preventDefault();

        const result = await validateLogin(values);
        const errors = Object.values(result);

        if (errors.length > 0) {
            setFormErrors(errors);
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
            <div className={styles['login-block']}>
                <form onSubmit={loginValidate} method="POST" >
                    <h1>Login</h1>
                    <input type="text" placeholder="Email" value={values.email} onChange={changeHandler} name="email" id="email" />
                    <input type="password" placeholder="Password" value={values.password} onChange={changeHandler} name="password" id="password" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
};