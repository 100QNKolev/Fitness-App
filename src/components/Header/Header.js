import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
    return (
            <nav>
                <ul className={styles['list-item']}>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/catalog">Catalog</Link> </li>
                    <li> <Link to="/contact">Contact</Link> </li>
                    <li> <Link to="/about">About</Link> </li>
                    <li> <Link to="/login">Login</Link> </li>
                    <li> <Link to="/register">Register</Link> </li>
                    <li> <Link to="/logout">Logout </Link> </li>
                </ul>
            </nav>
    );
};