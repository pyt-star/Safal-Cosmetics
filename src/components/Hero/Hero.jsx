import "./Hero.css";
import heroImg from "../../assets/images/hero.png"; 

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={heroImg} alt="Fragrance Creation" />
        <div className="overlay"></div>
      </div>
      
      <div className="hero-content">
        <span className="hero-tag">Specialist manufacturing partner</span>
        <h1>From Concept to Bottle.</h1>
        <div className="hero-footer">
          <span>Results in 30 Days</span>
          <span>Our Commitments</span>
          <span>Our Purpose</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;