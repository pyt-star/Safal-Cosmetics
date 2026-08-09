import "./Footer.css";
import safalLogo from "../../assets/images/safallogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        
        {/* Company */}
        <div className="footer-company">
          <div className="footer-logo-box">
            <img src={safalLogo} alt="Safal Cosmetics" />
          </div>

          <p>
            Premium private-label fragrance and personal care manufacturing
            solutions, helping brands turn ideas into products.
          </p>

          <button
            className="footer-quote-btn"
            onClick={() => scrollToSection("contact")}
          >
            Request a Quote <span>↗</span>
          </button>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Explore</h3>

          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About Us</button>
          <button onClick={() => scrollToSection("services")}>Services</button>
          <button onClick={() => scrollToSection("brands")}>
            Valued Clients
          </button>
          <button onClick={() => scrollToSection("contact")}>
            Contact Us
          </button>
        </div>

        {/* Solutions */}
        <div className="footer-column">
          <h3>Our Solutions</h3>

          <a href="#services">Private Label Manufacturing</a>
          <a href="#services">Fragrance Development</a>
          <a href="#services">Product Formulation</a>
          <a href="#services">Packaging Solutions</a>
          <a href="#services">Contract Manufacturing</a>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Get in Touch</h3>

          <p>Gujarat, India</p>

          <a href="mailto:info@safalcosmetics.com">
            info@safalcosmetics.com
          </a>

          <p>
            Let's build your next fragrance brand together.
          </p>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>© {currentYear} Safal Cosmetics. All rights reserved.</p>

        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>

        <p>Crafting Fragrance. Building Brands.</p>
      </div>
    </footer>
  );
};

export default Footer;