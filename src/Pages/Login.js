import React, { useState } from 'react';
import '../Components/Styles/Login.css';

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="login-container">
      <div className={`login-box ${isSignup ? 'signup-mode' : ''}`}>
        <div className="login-left">
          <h1>{isSignup ? 'Sign Up' : 'Sign In'}</h1>
          <form>
            <div className="form-group">
              <label htmlFor="username">{isSignup ? 'Username' : 'Username'}</label>
              <input type="text" id="username" name="username" placeholder="Username" />
            </div>
            {isSignup && (
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Password" />
            </div>
            <button type="submit" className="login-btn">{isSignup ? 'Sign Up' : 'Sign In'}</button>
            {!isSignup && (
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
                <a href="#">Forgot Password</a>
              </div>
            )}
          </form>
        </div>
        <div className="login-right">
          <h2>Welcome to {isSignup ? 'Sign Up' : 'Sign In'}</h2>
          <p>{isSignup ? 'Already have an account?' : "Don't have an account?"}</p>
          <button className="signup-btn" onClick={toggleSignup}>{isSignup ? 'Sign In' : 'Sign Up'}</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
