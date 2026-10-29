import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/eshika_logo_svg.svg';
import cross from '../../assets/cross1.svg';
import menubar from '../../assets/menu.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ theme, toggleTheme }) => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (section) => {
    setActiveMenu(section);
    closeMenu();
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar" aria-label="Main Navigation">
        <a href="#home" className="logo-link" aria-label="Eshika Kumari Home">
          <img src={logo} alt="Eshika Kumari Logo" className="logo" />
        </a>

        {/* Mobile menu backdrop */}
        {isMenuOpen && <div className="nav-backdrop" onClick={closeMenu} aria-hidden="true" />}

        <ul className={`navlinks ${isMenuOpen ? 'nav-open' : ''}`}>
          <li className="menu-close-item">
            <button
              type="button"
              className="menu-close-btn"
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              <img src={cross} alt="" className="menu-close" />
            </button>
          </li>
          <li>
            <AnchorLink className="anchor-links" href="#home">
              <span
                onClick={() => handleNavClick('home')}
                className={`nav-item ${activeMenu === 'home' ? 'active' : ''}`}
              >
                Home
              </span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-links" offset={60} href="#about">
              <span
                onClick={() => handleNavClick('about')}
                className={`nav-item ${activeMenu === 'about' ? 'active' : ''}`}
              >
                About Me
              </span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-links" offset={60} href="#skills">
              <span
                onClick={() => handleNavClick('skills')}
                className={`nav-item ${activeMenu === 'skills' ? 'active' : ''}`}
              >
                Skills
              </span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-links" offset={60} href="#projects">
              <span
                onClick={() => handleNavClick('projects')}
                className={`nav-item ${activeMenu === 'projects' ? 'active' : ''}`}
              >
                Projects
              </span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-links" offset={60} href="#contact">
              <span
                onClick={() => handleNavClick('contact')}
                className={`nav-item ${activeMenu === 'contact' ? 'active' : ''}`}
              >
                Contact
              </span>
            </AnchorLink>
          </li>
        </ul>

        <div className="navbar-actions">
          {/* Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FiSun className="theme-icon sun" /> : <FiMoon className="theme-icon moon" />}
          </button>

          {/* Connect button (desktop) */}
          <div className="connect">
            <AnchorLink className="anchor-links" offset={60} href="#contact">
              Connect With me
            </AnchorLink>
          </div>

          {/* Hamburger toggle for mobile */}
          <button
            type="button"
            className="menu-open-btn"
            onClick={openMenu}
            aria-label="Open navigation menu"
          >
            <img src={menubar} alt="" className="menu-open" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
