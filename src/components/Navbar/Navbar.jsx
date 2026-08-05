import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">
        <h2>SAFAL</h2>
      </div>
      <ul className="nav-links">
        <li><a href="#divisions">Manufacturing</a></li>
        <li><a href="#purpose">Our Purpose</a></li>
        <li><a href="#news">Commitments</a></li>
        <li><a href="#power">Capabilities</a></li>
      </ul>
      <div className="nav-actions">
        <button className="nav-btn" onClick={onOpenQuote}>
          Contact Us
        </button>
        <span className="lang-switch">EN / FR / AR</span>
      </div>
    </nav>
  );
}

export default Navbar;