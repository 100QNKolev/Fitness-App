import { Navigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/authContext';

export const Logout = () => {
    const { onLogoutHandler } = useContext(AuthContext);

    useEffect(() => {
        onLogoutHandler();
    }, [onLogoutHandler]);

    return <Navigate to="/" />
};