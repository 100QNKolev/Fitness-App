import {requestFactory} from '../services/requester';

const baseUrl = 'http://localhost:3030/users';

export const authServiceFactory = (token) => {
    
    const request = requestFactory(token);

    const Login = async (data) => {
        return await request.post(`${baseUrl}/login`, data);
    };
    
    const Register = async (data) => {
        return await request.post(`${baseUrl}/register`, data);
    };
    
    const Logout = async (data) => {
        return await request.get(`${baseUrl}/logout`, data);
    };

    return {
        Login,
        Register,
        Logout
    };
};