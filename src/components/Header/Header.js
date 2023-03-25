import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import styles from './Header.module.css';

export const Header = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <nav>
            <ul className={styles['list-item']}>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/catalog">Catalog</Link> </li>
                <li> <Link to="/contact">Contact</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                {!isAuthenticated && (
                    <Fragment>
                        <li id="guest"> <Link to="/login">Login</Link> </li>
                        <li id="guest"> <Link to="/register">Register</Link> </li>
                    </Fragment>
                )}
                {isAuthenticated && (
                    <Fragment>
                        <li id="user"> <Link to="/create">Create Post</Link> </li>
                        <li id="user"> <Link to="/logout">Logout </Link> </li>
                    </Fragment>
                )}
            </ul>
        </nav>
    );
};