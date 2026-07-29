import "./Navbar.css";
import { useEffect, useState } from "react";

function Navbar({ onOpenQuote }) {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 80);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav className={scrolled ? "navbar scrolled" : "navbar"}>

      <div className="logo">

        <h2>Safal Cosmetics</h2>

        <span>PERFUME SOLUTIONS</span>

      </div>

      <ul className="nav-links">

        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products Manufactured</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact" onClick={onOpenQuote}>Contact</a></li>

      </ul>

      <button className="quote-btn" onClick={onOpenQuote}>

        Request Quote

      </button>

    </nav>

  );

}

export default Navbar;