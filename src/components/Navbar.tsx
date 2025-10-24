import React, { useState } from 'react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeAllMenus = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar" role="navigation">
      {/* Logo/Brand */}
      <div className="nav-brand">
        <a href="#" className="brand-link">YourBrand</a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn"
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Menu */}
      <div className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={closeAllMenus}>
              <span className="nav-icon">🏠</span>
              Home
            </a>
          </li>
          
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={closeAllMenus}>
              <span className="nav-icon">👤</span>
              About
            </a>
          </li>

          {/* Dropdown Menu */}
          <li className="nav-item dropdown">
            <button 
              className="nav-link dropdown-toggle"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <span className="nav-icon">📱</span>
              Apps
              <span className="dropdown-arrow">▼</span>
            </button>
            
            <ul 
              className={`dropdown-menu ${isDropdownOpen ? 'dropdown-open' : ''}`}
              aria-label="Apps submenu"
            >
              <li className="dropdown-item">
                <a href="#" className="dropdown-link" onClick={closeAllMenus}>
                  <span className="app-icon">🚀</span>
                  App 1
                </a>
              </li>
              <li className="dropdown-item">
                <a href="#" className="dropdown-link" onClick={closeAllMenus}>
                  <span className="app-icon">🎨</span>
                  App 2
                </a>
              </li>
              <li className="dropdown-item">
                <a href="#" className="dropdown-link" onClick={closeAllMenus}>
                  <span className="app-icon">📊</span>
                  App 3
                </a>
              </li>
              <li className="dropdown-item">
                <a href="#" className="dropdown-link" onClick={closeAllMenus}>
                  <span className="app-icon">🔒</span>
                  App 4
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link" onClick={closeAllMenus}>
              <span className="nav-icon">📞</span>
              Contact
            </a>
          </li>
        </ul>

        {/* Call to Action */}
        <div className="nav-actions">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Sign In</button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div className="nav-overlay" onClick={closeAllMenus}></div>
      )}
    </nav>
  );
};

export default Navbar;