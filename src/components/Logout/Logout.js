import { Navigate } from 'react-router-dom';
import {useEffect } from 'react';
import { useAuthContext } from '../../contexts/authContext';

export const Logout = () => {
    const { onLogoutHandler } = useAuthContext();

    useEffect(() => {
        onLogoutHandler();
    }, [onLogoutHandler]);

    return <Navigate to="/" />
};