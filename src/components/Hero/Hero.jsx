import "./Hero.css";
import hero from "../../assets/images/hero.png";

function Hero({ onOpenQuote }) {
  return (
    <section className="hero">

      <div className="overlay"></div>

      <img src={hero} alt="Perfume Manufacturing" />

      <div className="hero-content">

        <span className="tag">
          PRIVATE LABEL PERFUME MANUFACTURER
        </span>

        <h1>
          Manufacturing <br />
          World-Class <br />
          <span>Perfume Brands</span>
        </h1>

        <p>
          Complete end-to-end perfume manufacturing
          for startups and established brands.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn" onClick={onOpenQuote}>
            Get a Quote
          </button>

          <button className="secondary-btn" onClick={onOpenQuote}>
            Contact Us
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;