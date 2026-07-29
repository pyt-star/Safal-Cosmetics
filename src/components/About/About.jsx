import "./About.css";
import aboutImg from "../../assets/images/about.jpg";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section className="about">

      <div className="about-container">

        <div className="about-content">

          <span className="section-tag">
            ABOUT SAFAL COSMETICS
          </span>

          <h2>
            Crafting Premium
            <br />
            Fragrance Brands
            <br />
            Since 2003
          </h2>

          <p>
            With over two decades of expertise, Safal Cosmetics partners
            with startups and established brands to develop, manufacture,
            and package premium perfumes and personal care products with
            uncompromising quality.
          </p>

          <div className="about-features">

            <div>
              <FaCheckCircle />
              <span>End-to-End Manufacturing</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Custom Fragrance Development</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Premium Packaging Solutions</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>International Quality Standards</span>
            </div>

          </div>

          <a href="#" className="learn-more">
            Learn More →
          </a>

        </div>

        <div className="about-image">

          <img
            src={aboutImg}
            alt="Safal Cosmetics Manufacturing"
          />

        </div>

      </div>

    </section>
  );
}

export default About;