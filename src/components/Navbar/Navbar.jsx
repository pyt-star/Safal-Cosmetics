import "./Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {

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
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Infrastructure</a></li>
        <li><a href="#">Contact</a></li>

      </ul>

      <button className="quote-btn">

        Request Quote

      </button>

    </nav>

  );

}

export default Navbar;