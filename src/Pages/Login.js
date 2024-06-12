import React, { useState } from 'react';
import axios from 'axios';
import '../Components/Styles/Login.css';

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const toggleMode = () => {
    setIsSignup(!isSignup);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignup 
      ? 'http://192.168.1.236:8080/api/customers/signup' 
      : 'http://192.168.1.236:8080/api/customers/signin';

    try {
      const response = await axios.post(url, formData);
      console.log('Response:', response.data);
      // Handle successful response (e.g., redirect or display a success message)
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <div className="login-container">
      <div className={`login-box ${isSignup ? 'signup-mode' : ''}`}>
        <div className="login-left">
          <h1>{isSignup ? 'Sign Up' : 'Sign In'}</h1>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    placeholder="First Name" 
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    placeholder="Last Name" 
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
            <div className="form-group">
              <label htmlFor="username">{isSignup ? 'Username' : 'Username'}</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                placeholder="Username" 
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            {isSignup && (
              <>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Password" 
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {isSignup && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  placeholder="Confirm Password" 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            )}
            <button type="submit" className="login-btn">{isSignup ? 'Sign Up' : 'Sign In'}</button>
            {!isSignup && (
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
                <a href="/forgot-password" className="forgot-password-link">
                  Forgot Password
                </a>
              </div>
            )}
          </form>
        </div>
        <div className="login-right">
          <h2>Welcome {isSignup ? 'to Sign Up' : 'back'}</h2>
          <p>{isSignup ? 'Already have an account?' : "Don't have an account?"}</p>
          <button className="signup-btn" onClick={toggleMode}>
            {isSignup ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
