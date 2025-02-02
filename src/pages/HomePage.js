import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';
import "../css/bootstrap.css"

function HomePage() {
    return (
        <div className="home-page">
            <h1>Welcome to User Registration and Chatbot Integration</h1>
            <p>Please choose an option below:</p>
            <div className="navigation">
                <Link to="/login" className="btn btn-outline-primary mx-2 px-2">Login</Link>
                <Link to="/register" className="btn btn-primary mx-2 px-2">Register</Link>
            </div>
        </div>
    );
}

export default HomePage;