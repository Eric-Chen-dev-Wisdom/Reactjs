import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-lists">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        
        <ul>
          <li><a href="#">Products</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
        
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Events</a></li>
        </ul>
      </div>
      
      <p className="copyright">&copy; 2024 Company Name. All rights reserved.</p>
      
      <div className="footer-links">
        <a href="#">Twitter</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;