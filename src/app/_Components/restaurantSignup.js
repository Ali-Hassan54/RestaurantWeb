"use client";
import { useState } from "react";
const restaurantSignup = ({ onToggle }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        restaurantName: '',
        city: '',
        address: '',
        contactNo: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        console.log('Form Data:', formData);
      };
    
  return (
    <div className="signup-container">
    <div>
      <h1 style={{textAlign:'center'}}>Restaurant SignIn/Register</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="restaurantName">Restaurant Name</label>
          <input
            type="text"
            id="restaurantName"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Full Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNo">Contact No</label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Signup</button>
        <span className="link-btn" onClick={onToggle} >Do not have account? SignUp</span>
      </form>
    </div>
      <style jsx>{`
        .signup-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f5f5f5;
          padding:50px 0px;
        }
        .signup-form {
          background-color: #ffffff;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 500px;
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

export default restaurantSignup
