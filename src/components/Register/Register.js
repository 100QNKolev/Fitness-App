import { useState } from 'react';

import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/authContext';
import { validateUser } from '../../validators/authValidator';

import styles from './Register.module.css';

export const Register = () => {

    const { onRegisterSubmit } = useAuthContext();

    const [formErrors, setFormErrors] = useState([]);

    const { values, changeHandler, onSubmit } = useForm({
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
    }, onRegisterSubmit);

    const validateData = async (e) => {
        e.preventDefault();
        const errors = Object.values(await validateUser(values));

        if (errors.length === 0) {
            onSubmit(e);
        }
        else {
            setFormErrors(errors);
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
            <div className={styles['register-block']}>
                <h1>Register</h1>
                <form onSubmit={validateData} method="POST">
                    <input type="text" placeholder="Username" value={values.username} onChange={changeHandler} name="username" id="username" />
                    <input type="password" placeholder="Password" value={values.password} onChange={changeHandler} name="password" id="password" />
                    <input type="password" placeholder="Confirm Password" value={values.confirmPassword} onChange={changeHandler} name="confirmPassword" id="confirmPassword" />
                    <input type="text" placeholder="Email" value={values.email} onChange={changeHandler} name="email" id="email" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};