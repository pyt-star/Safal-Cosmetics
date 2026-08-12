import "./Hero.css";
import heroImage from "../../assets/images/image.png";

const Hero = () => (
  <section className="hero" id="home">
    <img className="hero-image" src={heroImage} alt="A person applying fragrance from a perfume bottle" />
    <div className="hero-shade" aria-hidden="true"></div>
    <div className="hero-content">
      <h1><span>Safal</span> <span>Cosmetics</span></h1>
      <p className="hero-kicker">Fragrance manufacturing · since 2004</p>
    </div>
    <div className="hero-bottom">
      <p className="hero-intro">We turn a scent direction into a finished product—formulated, filled, and ready for your brand to carry forward.</p>
      <div className="hero-actions"><a href="#contact" className="hero-primary-btn">Begin a project <b>→</b></a><a href="#services" className="hero-secondary-btn">Explore capabilities</a></div>
      <p className="hero-index"><span>01</span> India · B2B manufacturing</p>
    </div>
  </section>
);
export default Hero;
