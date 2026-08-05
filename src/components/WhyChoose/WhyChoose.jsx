import "./WhyChoose.css";

function WhyChoose() {
  return (
    <section id="news" className="why-choose">
      <div className="grid-layout">
        
        {/* Large Main Feature */}
        <div className="grid-item large bg-primary">
          <span className="news-tag">SAFAL ADVANTAGE</span>
          <h3>Speed to Market: Development & Delivery in 30 Days</h3>
          <p>
            Launching a new brand comes with tight timelines. Safal Cosmetics takes your product from concept to packed inventory in as little as 30 days without compromising on quality.
          </p>
          <a href="#">Discover</a>
        </div>

        {/* Medium Features */}
        <div className="grid-item image-bg">
          <div className="overlay"></div>
          <div className="content">
            <span className="news-tag">EXPERTISE</span>
            <h3>Formulation & Fragrance Development</h3>
          </div>
        </div>

        <div className="grid-item default">
          <span className="news-tag">QUALITY ASSURED</span>
          <h3>In-House Quality Lab</h3>
          <p>Rigorous inspection at every production stage ensuring 100% compliance.</p>
        </div>

        <div className="grid-item default">
          <span className="news-tag">GLOBAL FOOTPRINT</span>
          <h3>Exporting to 7 Countries</h3>
          <p>Products supplied across 4 continents reaching USA, UAE, and Africa.</p>
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;