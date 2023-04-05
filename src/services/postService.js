import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/posts';

export const postServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const posts = Object.values(result);

        return posts;
    };

    const create = async (data) => {
        const result = await request.post(baseUrl, data);

        return result;
    };

    const getOne = async (postId) => {
        return await request.get(`${baseUrl}/${postId}`);
    };

    const addComment = async (postId, data) => {
        return await request.post(`${baseUrl}/${postId}/comments`, data);
    };

    const deletePost = async (postId) => {
        await request.del(`${baseUrl}/${postId}`);
    };
    
    const edit = (postId, data) => {
        return request.put(`${baseUrl}/${postId}`, data);
    };

    const getByUser = async (userId) => {
        const query = encodeURIComponent(`_ownerId="${userId}"`);

        const result = await request.get(`${baseUrl}?where=${query}`);
        const comments = Object.values(result);

        return comments;
    };

    const getByName = async (name) => {
        const query = encodeURIComponent(`title LIKE "${name}"`);

        const result = await request.get(`${baseUrl}?where=${query}`);
        const posts = Object.values(result);

        return posts;
    };

    return {
        getAll, 
        getOne,
        create,
        addComment,
        deletePost,
        edit,
        getByUser,
        getByName
    };
}