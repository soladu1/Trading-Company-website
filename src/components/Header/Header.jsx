// src/components/Header/Header.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body class to prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/Images/SERENTA-LOGO.png" alt="Serenta Trading Logo" />
          </Link>
        </div>
        
        {/* Hamburger Menu Button - Only visible on mobile */}
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        {/* Desktop Navigation - Always visible on desktop */}
        <nav className="nav-menu">
          <ul>
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? 'active' : ''}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={location.pathname === '/services' ? 'active' : ''}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? 'active' : ''}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Navigation - Only visible when menu is open */}
        <nav className={`nav-menu mobile-active ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? 'active' : ''}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={location.pathname === '/services' ? 'active' : ''}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? 'active' : ''}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Header Actions - Only visible on desktop */}
        <div className="header-actions">
          <Link to="/contact" className="btn" onClick={closeMenu}>Get In Touch</Link>
        </div>
      </div>
      
      {/* Mobile Menu Overlay - Only visible when menu is open on mobile */}
      <div 
        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>
    </header>
  );
};

export default Header;