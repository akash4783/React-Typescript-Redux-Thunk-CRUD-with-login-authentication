import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HOCAuth({ children }: any) {
    const history = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('AccessToken');
        if (accessToken === null || accessToken === undefined) {
            history('/');
        }
    },[]);

    return children;
}

export default HOCAuth;

