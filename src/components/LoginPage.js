import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Navigate to the RewardsPage
    navigate('/rewards');
  };

  return (
    <div className="login-root">
      <div className="login-container">
        <h1 className="login-title">Welcome Back!</h1>
        <p className="login-description">Log in to access your rewards and track your cashback history.</p>
        <button className="login-button" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
