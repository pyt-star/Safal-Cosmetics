import { useEffect, useState } from "react";
import "./Navbar.css";
import safalLogo from "../../assets/images/safallogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 30); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className={`navbar-wrapper ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="navbar-brand" onClick={closeMenu}><img src={safalLogo} alt="Safal Cosmetics" className="navbar-logo" /></a>
        <div id="site-menu" className={`navbar-links ${menuOpen ? "menu-open" : ""}`}>
          <a onClick={closeMenu} href="#home">Home</a><a onClick={closeMenu} href="#about">About</a><a onClick={closeMenu} href="#services">Capabilities</a><a onClick={closeMenu} href="#clients">Our partners</a><a onClick={closeMenu} href="#contact">Contact</a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="site-menu" aria-label="Toggle navigation"><span></span><span></span></button>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdm-vCMxguLdQTMSfg7o_JrHi22_PPxqnMG-RgRQ0MCI4fLZA/viewform?usp=header" onClick={closeMenu} className="quote-btn"><span>Request a quote</span><span className="quote-icon">↗</span></a>
      </nav>
    </header>
  );
};
export default Navbar;
