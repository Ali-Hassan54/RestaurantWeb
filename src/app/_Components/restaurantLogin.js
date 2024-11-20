"use client";
import { useState } from "react";
const restaurantLogin = ({ onToggle }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle login logic here
      console.log('Username:', username);
      console.log('Password:', password);
    };
  return (
    <div className="login-container">
    <div>
    <h1 style={{textAlign:'center'}}>Restaurant SignIn/Register</h1>
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username or Email</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
      <span className="link-btn" onClick={onToggle} >Already have account? Login</span>
    </form>
    </div>
    <style jsx>{`
      .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height:100vh;
        background-color: #f5f5f5;
      }
      .login-form {
        background-color: #ffffff;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        width: 100%;
      }
      h2 {
        text-align: center;
        margin-bottom: 1.5rem;
      }
      .form-group {
        margin-bottom: 1rem;
      }
      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
      }
      input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
      }
      button {
        width: 100%;
        padding: 0.75rem;
        background-color: #0070f3;
        border: none;
        border-radius: 4px;
        color: #ffffff;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      button:hover {
        background-color: #005bb5;
      }
      .link-btn{
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          text-align:center;
          color:blue;
          margin-top:15px;
          cursor:pointer;
        }
    `}</style>
  </div>
  )
}

export default restaurantLogin
