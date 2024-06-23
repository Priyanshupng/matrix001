import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../configuration/appwrite';
import './styles.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await account.createSession(username, password);
            navigate('/'); // Navigate to home after successful login
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/signup">Signup</a></p>
        </div>
    );
}

export default Login;
