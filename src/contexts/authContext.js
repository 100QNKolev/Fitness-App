import { createContext, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { authServiceFactory } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const authService = authServiceFactory(user.accessToken);
    const navigate = useNavigate();

    const onLoginSubmit = async (userData) => {
        const result = await authService.Login(userData);

        setUser(result);

        navigate('/catalog');
    };

    const onLogoutHandler = async () => {
        await authService.Logout();

        setUser({});

        navigate('/');
    };

    const onRegisterSubmit = async (userData) => {
        const result = await authService.Register(userData);

        setUser(result);

        navigate('/catalog');
    };

    const getOneUser = async () => {
        return await authService.getOne();
    };

    const context = {
        onRegisterSubmit,
        onLoginSubmit,
        onLogoutHandler,
        getOneUser,
        userId: user._id,
        username: user.username,
        email: user.email,
        token: user.accessToken,
        isAuthenticated: !!user.accessToken,
    };

    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};