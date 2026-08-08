import React, { useState } from "react";
import "./Navbar.css";
import safallogo from "../../assets/images/safallogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <a href="#home" className="navbar-logo">
        <img src={safallogo} alt="Safal Cosmetics" />
      </a>

      {/* Desktop Navigation */}
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About us</a>
        <a href="#services">Services</a>
        <a href="#clients">Valued Clients</a>
        <a href="#contact">Contact us</a>
      </div>

      {/* Right Side */}
      <div className="navbar-actions">

        {/* Search */}
        <button className="search-button" aria-label="Search">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="6.5" />
            <path d="M16 16L21 21" />
          </svg>
        </button>

        {/* Mobile Menu Button */}
        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About us
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#clients" onClick={closeMenu}>
          Valued Clients
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact us
        </a>

      </div>

    </nav>
  );
}

export default Navbar;