import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/register`, {
        username,
        password,
      });
      setMessage(response.data.message || 'Registration successful!');
    } catch (error) {
      setMessage('Registration failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Register</h2>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        {message && (
          <p className={message.includes('successful') ? 'success-message' : 'error-message'}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Register;
