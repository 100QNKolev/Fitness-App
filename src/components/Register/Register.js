import styles from './Register.module.css';


export const Register = () => {
    return (
        <div>
                <div className={styles['logo']}></div>
                <div className={styles['login-block']}>
                    <h1>Register</h1>
                    <input type="text" defaultValue="" placeholder="Username" id="username" />
                    <input type="password" defaultValue="" placeholder="Password" id="password" />
                    <input type="password" defaultValue="" placeholder="Confirm Password" id="confirmPassword" />
                    <input type="text" defaultValue="" placeholder="Email" id="email" />
                    <button>Submit</button>
                </div>
        </div>
    );
};