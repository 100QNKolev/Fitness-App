import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useAuthContext } from '../../contexts/authContext';

export const Header = () => {
    const { isAuthenticated } = useAuthContext();
    return (
        <nav>
            <ul className={styles['list-item']}>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/catalog">Catalog</Link> </li>
                <li> <Link to="/contact">Contact</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                {!isAuthenticated && (
                    <>
                        <li id="guest"> <Link to="/login">Login</Link> </li>
                        <li id="guest"> <Link to="/register">Register</Link> </li>
                    </>
                )}
                {isAuthenticated && (
                    <>
                        <li id="user"> <Link to="/create">Create Post</Link> </li>
                        <li id="user"> <Link to="/logout">Logout </Link> </li>
                    </>
                )}
            </ul>
        </nav>
    );
};