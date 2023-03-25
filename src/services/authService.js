import * as requester from '../services/requester';

const baseUrl = 'http://localhost:3030/users/';

export const Login = (data) => {
    return requester.post(`${baseUrl}/login`, data);
};

export const Register = (data) => {
    return requester.post(`${baseUrl}/register`, data);
};