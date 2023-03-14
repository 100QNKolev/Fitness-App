import styles from './Login.module.css';

export const Login = () => {
    return (
        <div>
                <div className={styles['logo']}></div>
                <div className={styles['login-block']}>
                    <h1>Login</h1>
                    <input type="text" defaultValue="" placeholder="Username" id="username" />
                    <input type="password" defaultValue="" placeholder="Password" id="password" />
                    <button>Submit</button>
                </div>
        </div>
    )
};