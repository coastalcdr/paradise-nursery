import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <div className="content">
        <h1>Paradise Nursery</h1>
        <p>Welcome to Paradise Plants</p> 
        <Link to="/products" className="get-started-button">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
