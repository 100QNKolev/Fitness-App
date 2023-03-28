import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { postServiceFactory } from '../services/postService';
import { AuthContext } from "./authContext";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {

    const { token } = useContext(AuthContext);

    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const { getOne, getAll, create, edit, deletePost } = postServiceFactory(token);

    useEffect(() => {
        getAll()
            .then(result => {
                setPosts(result);
            })
    });

    const onCreateSubmit = async (data) => {
        const newPost = await create(data);

        setPosts(x => [...x, newPost]);

        navigate('/catalog');
    };

    const onEditSubmit = async (data) => {
        const result = await edit(data._id, data);

        setPosts(state => state.map(x => x._id === data._id ? result : x));

        navigate(`/catalog/${data._id}`);
    };

    const deletePostHandler = async (postId) => {

        await deletePost(postId);

        setPosts(state => state.filter(x => x._id !== postId));

        navigate('/catalog');
    };

    const getOnePost = async (postId) => {
        return await getOne(postId);
    };

    const context = {
        onCreateSubmit,
        onEditSubmit,
        deletePostHandler,
        posts,
        getOnePost
    };

    return (
        <>
            <PostContext.Provider value={context}>
                {children}
            </PostContext.Provider>
        </>
    );

};
export const usePostContext = () => {
    const context = useContext(PostContext);

    return context;
};
;