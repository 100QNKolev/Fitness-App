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
        request.put(`${baseUrl}/${postId}`, data);
    };

    return {
        getAll, 
        getOne,
        create,
        addComment,
        deletePost,
        edit
    };
}