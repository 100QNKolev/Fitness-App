import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';

export const commentServiceFactory = (token) => {
   
    const requester = requestFactory(token);

    const getAll = async (postId) => {
        const query = encodeURIComponent(`postId="${postId}"`);

        const result = await requester.get(`${baseUrl}?where=${query}`);
        const comments = Object.values(result);

        return comments;
    };

    const create = async (postId, values) => {
        const {comment,username} = values;
        return await requester.post(baseUrl, { postId, comment, username });
    };

    return {
        create,
        getAll,
    };
};