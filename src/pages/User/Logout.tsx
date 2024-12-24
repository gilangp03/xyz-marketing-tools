import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear user session or token here
        localStorage.removeItem('authToken'); // Example: remove token from localStorage

        // Redirect to login page
        navigate('/login');
    }, [navigate]);

    return null;
};

export default Logout;