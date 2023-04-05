import { requestFactory } from '../services/requester';

const baseUrl = 'http://localhost:3030/users';

export const authServiceFactory = (token) => {

    const request = requestFactory(token);

    const Login = async (loginData) => {
        return await request.post(`${baseUrl}/login`, loginData);
    };

    const Register = async (registerData) => {
        return await request.post(`${baseUrl}/register`, registerData);
    };

    const Logout = async (logoutData) => {
        return await request.get(`${baseUrl}/logout`, logoutData);
    };

    const getOne = async () => {
        return await request.get(`${baseUrl}/me`);
    };

    return {
        Login,
        Register,
        Logout,
        getOne
    };
};