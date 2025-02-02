import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData && userData.email === email && userData.password === password) {
            alert('Login successfull !');
            navigate('/chatbot');
        } else {
            alert('Invalid email or password');
        }
    };


    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className='login-details'>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email...'
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password...'
                        required
                    />
                    <button className='btn btn-outline-primary m-2 p-2' type="submit">Login</button>
                    
                </div>
            </form>
        </div>
    );
}

export default Login;