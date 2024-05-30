import React from 'react';
import '../Components/Styles/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <h1>Sign In</h1>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Password" />
            </div>
            <button type="submit" className="login-btn">Sign In</button>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#">Forgot Password</a>
            </div>
          </form>
        </div>
        <div className="login-right">
          <h2>Welcome to login</h2>
          <p>Don't have an account?</p>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
