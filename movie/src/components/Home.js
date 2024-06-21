import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <h2>Welcome to the Home Page</h2>
            <p><Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to continue.</p>
        </div>
    );
}

export default Home;
