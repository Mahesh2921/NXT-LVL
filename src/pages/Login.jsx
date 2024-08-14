import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9001/api/users/login', {
        email,
        password
      });
      if (response.status === 200) {
        setMessage('Login successful!');
        // Redirect to Admin Dashboard
        navigate('/Admin');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessage('Invalid credentials!');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      <Link to="/home" className="home-link">Go to Home</Link>
    </div>
  );
};

export default Login;
