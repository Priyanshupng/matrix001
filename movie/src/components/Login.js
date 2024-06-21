import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Login = () => {
    return (
        <div className="form-container">
            <h2>Login</h2>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Signup</Link></p>
        </div>
    );
}

export default Login;

