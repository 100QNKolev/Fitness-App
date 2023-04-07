import {useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/authContext';

export const Logout = () => {
    const { onLogoutHandler } = useAuthContext();

    useEffect(() => {
        onLogoutHandler();
    }, [onLogoutHandler]);

    return <Navigate to="/" />
};