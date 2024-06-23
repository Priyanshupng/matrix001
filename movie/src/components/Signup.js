import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../configuration/appwrite';
import './styles.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            await account.create('unique()', email, password, username);
            navigate('/login'); // Navigate to login after successful signup
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    required
                />

                <button type="submit">Signup</button>
            </form>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
}

export default Signup;
