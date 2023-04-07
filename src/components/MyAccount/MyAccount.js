import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { useAuthContext } from "../../contexts/authContext";
import { usePostContext } from "../../contexts/postContext";
import { Post } from "../MyAccount/templates/Post/Post";

import styles from './MyAccount.module.css';

export const MyAccount = () => {

    const { accountId } = useParams();
    const { getOneUser } = useAuthContext();
    const [user, setUser] = useState({});
    const [userPosts, setUserPosts] = useState([]);
    const { getUserPosts } = usePostContext();

    useEffect(() => {
        Promise.all([
            getOneUser(accountId),
            getUserPosts(accountId),
        ])
            .then(([userData, postsData]) => {
                setUser(userData);
                setUserPosts(postsData);
            })
        // eslint-disable-next-line
    }, [accountId]);

    return (
        <div>
            <div className={styles['logo']}></div>
            <div className={styles['myProfile-block']}>
                <form>
                    <h1>My profile</h1>
                    <input value={`Username: ${user.username}`} type="text" placeholder="Username" id="username" name="username" disabled />
                    <input value={`Email: ${user.email}`} type="text" placeholder="Email URL" id="email" name="email" disabled />
                    <input value={`Password: ${user.password}`} placeholder="Password" id="password" name="password" disabled />
                </form>
            </div>

            {userPosts.map(x =>
                <Post key={x._id} {...x} />
            )}

            {userPosts.length === 0 && (
                <div className={styles['heading']}>
                    <h1>No posts yet!</h1>
                </div>
            )}
        </div>
    )
};