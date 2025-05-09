import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { useClickSound } from '../Assets/js/useClickSound';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleClick = useClickSound();

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await axios.post(`${API_URL}/api/register`, {
        username,
        email,
        password,
      });
      
      setMessage('Registration successful! Please login.');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Registration error:', error);
      setMessage(error.response?.data?.message || 'An error occurred during registration. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Register</h2>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={isLoading}
            minLength={3}
            maxLength={20}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
            minLength={6}
          />
        </div>
        <button type="submit" onClick={handleClick()} disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
        <button type="button" onClick={() => navigate('/login')} disabled={isLoading}>
          Already have an account? Login
        </button>
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