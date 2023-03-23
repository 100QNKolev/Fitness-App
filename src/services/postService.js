import * as request from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/posts';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const games = Object.values(result);

    return games;
};

export const create = async (data) => {
    const result = request.post(baseUrl,data);

    return result;
};