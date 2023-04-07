import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/authContext';
import { usePostContext } from '../../contexts/postContext';

import styles from './Header.module.css';

export const Header = () => {
    
    const { isAuthenticated, userId } = useAuthContext();
    const { getSearchedPosts } = usePostContext();

    const onSearch = async (values) => {
        await getSearchedPosts(values.search);
    };

    const { values, changeHandler, onSubmit } = useForm({
        search: "",
    }, onSearch);

    return (
        <nav>
            <form className={styles['search']}>
                <input type="text" placeholder="Search:" name="search" id="search" value={values.search} onChange={changeHandler} />
                <button onClick={onSubmit} ></button>
            </form>
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
                        <li id="user"> <Link to={`/account/${userId}`}>My account</Link> </li>
                        <li id="user"> <Link to="/logout">Logout </Link> </li>
                    </>
                )}
            </ul>
        </nav>
    );
};