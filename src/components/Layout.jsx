import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Palette, Info, Mail, Menu, X, Rocket } from 'lucide-react';
import './Layout.css';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="layout">
      {/* Decorative Background Elements */}
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>

      <header className="header shadow-sm">
        <div className="container header-content">
          <NavLink to="/" className="logo" onClick={closeMenu}>
            <div className="logo-icon-wrapper">
              <Rocket className="logo-icon" size={28} />
            </div>
            <span className="logo-text">Uriya's <span className="highlight-text">Gallery</span></span>
          </NavLink>

          {/* Mobile approach */}
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li>
                <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>
                  <Palette size={20} className="nav-icon" />
                  <span>Gallery</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>
                  <Info size={20} className="nav-icon" />
                  <span>About Uriya</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>
                  <Mail size={20} className="nav-icon" />
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content container animate-fade-in-up">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Uriya's Creations. Built with 💙 and 💛.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
