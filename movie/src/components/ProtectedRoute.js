import React from 'react';
import { Navigate } from 'react-router-dom';
import { account } from '../configuration/appwrite';
import { useState, useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await account.get();
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        return <div>Loading...</div>; // Or some kind of loading indicator
    }

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
