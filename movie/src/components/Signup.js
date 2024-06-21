import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Signup = () => {
    return (
        <div className="form-container">
            <h2>Signup</h2>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />

                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" required />

                <button type="submit">Signup</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
}

export default Signup;
