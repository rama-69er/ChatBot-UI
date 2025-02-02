import React, { useState } from 'react';
import "../css/Register.css";

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPasswordCode, setConfirmPasswordCode] = useState('');

    const handleSubmit = (e) => {
        // e.preventDefault();

        if (password === confirmPasswordCode) {
            const userData = {
                name,
                email,
                password,
                confirmPasswordCode
            };
            localStorage.setItem('user', JSON.stringify(userData));
            alert("User registered successfully!");
        }
        else {
            alert("Password didn't match !!!");
        }
    };

    const handleGoogleLogin = () => {
        // Handle Google Login Here...
        alert("Functionality not set right now . . .")
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="register-details">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Name..."
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email..."
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password..."
                    />
                    <input
                        type="password"
                        value={confirmPasswordCode}
                        onChange={(e) => setConfirmPasswordCode(e.target.value)}
                        required
                        placeholder="Confirm Password..."
                    />
                    <button className='btn btn-secondary my-2 p-2' type="submit">Register</button>
                    <button className='btn btn-danger m-2 p-2' onClick={handleGoogleLogin}>Continue with Google </button>
                </div>
            </form>
        </div>
    );
}

export default Register;